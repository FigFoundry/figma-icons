import fs from 'fs/promises';
import path from 'path';
import { optimize, Config } from 'svgo';

const RAW_DIR = path.resolve(process.cwd(), 'raw');
const OPTIMIZED_DIR = path.resolve(process.cwd(), 'optimized');

async function ensureDir(dir: string) {
  try {
    await fs.access(dir);
  } catch {
    await fs.mkdir(dir, { recursive: true });
  }
}

async function optimizeSvg(svgContent: string, filename: string): Promise<string> {
  const config: Config = {
    path: filename,
    multipass: true,
    plugins: [
      {
        name: 'preset-default',
        params: {
          overrides: {
            // Customize optimization options
          }
        }
      },
      {
        name: 'prefixIds',
        params: {
          prefix: `${path.basename(filename, '.svg')}-`
        }
      },
      'removeXMLNS',
      'sortAttrs',
      {
        name: 'addAttributesToSVGElement',
        params: {
          attributes: [
            { 'aria-hidden': 'true' },
            { 'width': '24' },
            { 'height': '24' },
            { 'fill': 'currentColor' }
          ]
        }
      }
    ]
  };

  const result = optimize(svgContent, config);

  return result.data;
}

async function processFiles() {
  try {
    await ensureDir(OPTIMIZED_DIR);

    // Recursively get all SVG files
    async function getSvgFiles(dir: string): Promise<string[]> {
      const entries = await fs.readdir(dir, { withFileTypes: true });
      const files = await Promise.all(entries.map(async (entry) => {
        const res = path.resolve(dir, entry.name);
        return entry.isDirectory() ? getSvgFiles(res) : res;
      }));
      return Array.prototype.concat(...files)
        .filter(file => file.toLowerCase().endsWith('.svg'));
    }

    const allSvgFiles = await getSvgFiles(RAW_DIR);
    console.log(`Found ${allSvgFiles.length} SVG files to optimize`);

    for (const filePath of allSvgFiles) {
      // Get relative path to maintain structure if needed, or just basename
      // The current logic seems to flatten everything to OPTIMIZED_DIR based on filename
      const file = path.basename(filePath);
      const content = await fs.readFile(filePath, 'utf8');

      const optimizedSvg = await optimizeSvg(content, file);
      const outputPath = path.join(OPTIMIZED_DIR, file);

      await fs.writeFile(outputPath, optimizedSvg, 'utf8');
      console.log(`✓ Optimized: ${file}`);
    }

    console.log(`\nOptimization complete! ${allSvgFiles.length} SVGs processed.`);

    // Generate a manifest file with all available icons
    const iconNames = allSvgFiles.map(file => path.basename(file, '.svg'));
    const manifestPath = path.join(OPTIMIZED_DIR, 'manifest.json');
    await fs.writeFile(
      manifestPath,
      JSON.stringify({ icons: iconNames }, null, 2),
      'utf8'
    );
    console.log(`Icon manifest created at ${manifestPath}`);

  } catch (error) {
    console.error('Error optimizing SVGs:', error);
    process.exit(1);
  }
}

processFiles();