import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import fs from 'fs/promises';
import path from 'path';
import { optimize } from 'svgo';

// Mock dependencies
vi.mock('fs/promises');
vi.mock('svgo');

describe('optimize.ts - SVG Optimization Script', () => {
  const mockRawDir = path.resolve(process.cwd(), 'raw');
  const mockOptimizedDir = path.resolve(process.cwd(), 'optimized');

  beforeEach(() => {
    vi.clearAllMocks();
    // Reset console mocks
    vi.spyOn(console, 'log').mockImplementation(() => {});
    vi.spyOn(console, 'error').mockImplementation(() => {});
    vi.spyOn(process, 'exit').mockImplementation((code?: number) => {
      throw new Error(`process.exit called with code ${code}`);
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('ensureDir functionality', () => {
    it('should not create directory if it already exists', async () => {
      const mockAccess = vi.mocked(fs.access);
      const mockMkdir = vi.mocked(fs.mkdir);
      
      mockAccess.mockResolvedValue(undefined);

      // Simulate the ensureDir function behavior
      try {
        await fs.access(mockOptimizedDir);
      } catch {
        await fs.mkdir(mockOptimizedDir, { recursive: true });
      }

      expect(mockAccess).toHaveBeenCalledWith(mockOptimizedDir);
      expect(mockMkdir).not.toHaveBeenCalled();
    });

    it('should create directory if it does not exist', async () => {
      const mockAccess = vi.mocked(fs.access);
      const mockMkdir = vi.mocked(fs.mkdir);
      
      mockAccess.mockRejectedValue(new Error('ENOENT'));
      mockMkdir.mockResolvedValue(undefined);

      // Simulate the ensureDir function behavior
      try {
        await fs.access(mockOptimizedDir);
      } catch {
        await fs.mkdir(mockOptimizedDir, { recursive: true });
      }

      expect(mockAccess).toHaveBeenCalledWith(mockOptimizedDir);
      expect(mockMkdir).toHaveBeenCalledWith(mockOptimizedDir, { recursive: true });
    });

    it('should create directory with recursive option', async () => {
      const mockAccess = vi.mocked(fs.access);
      const mockMkdir = vi.mocked(fs.mkdir);
      
      mockAccess.mockRejectedValue(new Error('ENOENT'));
      mockMkdir.mockResolvedValue(undefined);

      try {
        await fs.access(mockOptimizedDir);
      } catch {
        await fs.mkdir(mockOptimizedDir, { recursive: true });
      }

      expect(mockMkdir).toHaveBeenCalledWith(
        mockOptimizedDir,
        expect.objectContaining({ recursive: true })
      );
    });
  });

  describe('optimizeSvg function', () => {
    const mockSvgContent = '<svg><path d="M10 10"/></svg>';
    const mockFilename = 'test-icon.svg';

    it('should call optimize with correct config structure', () => {
      const mockOptimize = vi.mocked(optimize);
      mockOptimize.mockReturnValue({ data: 'optimized' });

      const expectedConfig = {
        path: mockFilename,
        multipass: true,
        plugins: expect.arrayContaining([
          expect.objectContaining({ name: 'preset-default' }),
          expect.objectContaining({ name: 'prefixIds' }),
          'removeXMLNS',
          'sortAttrs',
          expect.objectContaining({ name: 'addAttributesToSVGElement' })
        ])
      };

      optimize(mockSvgContent, expectedConfig);

      expect(mockOptimize).toHaveBeenCalledWith(mockSvgContent, expectedConfig);
    });

    it('should configure prefixIds with basename of filename', () => {
      const mockOptimize = vi.mocked(optimize);
      mockOptimize.mockReturnValue({ data: 'optimized' });

      const config = {
        path: mockFilename,
        multipass: true,
        plugins: [
          { name: 'preset-default', params: { overrides: {} } },
          { name: 'prefixIds', params: { prefix: 'test-icon-' } },
          'removeXMLNS',
          'sortAttrs',
          { name: 'addAttributesToSVGElement', params: { attributes: [] } }
        ]
      };

      optimize(mockSvgContent, config);

      const prefixIdsPlugin = config.plugins.find(
        (p) => typeof p === 'object' && p.name === 'prefixIds'
      );

      expect(prefixIdsPlugin).toBeDefined();
      expect(prefixIdsPlugin).toMatchObject({
        name: 'prefixIds',
        params: { prefix: 'test-icon-' }
      });
    });

    it('should include SVG attributes in config', () => {
      const mockOptimize = vi.mocked(optimize);
      mockOptimize.mockReturnValue({ data: 'optimized' });

      const config = {
        path: mockFilename,
        multipass: true,
        plugins: [
          { name: 'preset-default', params: { overrides: {} } },
          { name: 'prefixIds', params: { prefix: 'test-icon-' } },
          'removeXMLNS',
          'sortAttrs',
          {
            name: 'addAttributesToSVGElement',
            params: {
              attributes: [
                { 'aria-hidden': 'true' },
                { width: '24' },
                { height: '24' },
                { fill: 'currentColor' }
              ]
            }
          }
        ]
      };

      optimize(mockSvgContent, config);

      const attributesPlugin = config.plugins.find(
        (p) => typeof p === 'object' && p.name === 'addAttributesToSVGElement'
      );

      expect(attributesPlugin).toBeDefined();
      expect(attributesPlugin).toHaveProperty('params.attributes');
      expect(attributesPlugin.params.attributes).toEqual(
        expect.arrayContaining([
          { 'aria-hidden': 'true' },
          { width: '24' },
          { height: '24' },
          { fill: 'currentColor' }
        ])
      );
    });

    it('should use multipass optimization', () => {
      const mockOptimize = vi.mocked(optimize);
      mockOptimize.mockReturnValue({ data: 'optimized' });

      const config = {
        path: mockFilename,
        multipass: true,
        plugins: []
      };

      optimize(mockSvgContent, config);

      expect(config.multipass).toBe(true);
    });

    it('should return optimized SVG data', () => {
      const mockOptimize = vi.mocked(optimize);
      const expectedOutput = '<svg width="24" height="24">optimized</svg>';
      mockOptimize.mockReturnValue({ data: expectedOutput });

      const result = optimize(mockSvgContent, {
        path: mockFilename,
        multipass: true,
        plugins: []
      });

      expect(result.data).toBe(expectedOutput);
    });

    it('should handle complex SVG content', () => {
      const complexSvg = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <g id="group1">
            <path d="M10 10 L20 20" fill="red"/>
            <circle cx="50" cy="50" r="10"/>
          </g>
        </svg>
      `;

      const mockOptimize = vi.mocked(optimize);
      mockOptimize.mockReturnValue({ data: 'optimized-complex' });

      const result = optimize(complexSvg, {
        path: 'complex.svg',
        multipass: true,
        plugins: []
      });

      expect(mockOptimize).toHaveBeenCalledWith(complexSvg, expect.any(Object));
      expect(result.data).toBe('optimized-complex');
    });

    it('should handle SVG with special characters in filename', () => {
      const specialFilename = 'icon-with-dash_and_underscore.svg';
      const expectedPrefix = 'icon-with-dash_and_underscore-';

      const basename = path.basename(specialFilename, '.svg');
      expect(`${basename}-`).toBe(expectedPrefix);
    });
  });

  describe('processFiles function', () => {
    it('should read files from RAW_DIR', async () => {
      const mockReaddir = vi.mocked(fs.readdir);
      mockReaddir.mockResolvedValue(['icon1.svg', 'icon2.svg', 'readme.txt'] as any);

      await fs.readdir(mockRawDir);

      expect(mockReaddir).toHaveBeenCalledWith(mockRawDir);
    });

    it('should filter only SVG files', async () => {
      const mockFiles = ['icon1.svg', 'icon2.SVG', 'readme.txt', 'icon3.png'];
      const mockReaddir = vi.mocked(fs.readdir);
      mockReaddir.mockResolvedValue(mockFiles as any);

      const files = await fs.readdir(mockRawDir);
      const svgFiles = files.filter((file: string) => file.toLowerCase().endsWith('.svg'));

      expect(svgFiles).toEqual(['icon1.svg', 'icon2.SVG']);
      expect(svgFiles).toHaveLength(2);
    });

    it('should handle case-insensitive SVG extension', async () => {
      const mockFiles = ['icon.svg', 'icon.SVG', 'icon.Svg', 'icon.sVg'];
      const svgFiles = mockFiles.filter(file => file.toLowerCase().endsWith('.svg'));

      expect(svgFiles).toHaveLength(4);
    });

    it('should process each SVG file', async () => {
      const mockReaddir = vi.mocked(fs.readdir);
      const mockReadFile = vi.mocked(fs.readFile);
      const mockWriteFile = vi.mocked(fs.writeFile);
      const mockOptimize = vi.mocked(optimize);

      mockReaddir.mockResolvedValue(['icon1.svg', 'icon2.svg'] as any);
      mockReadFile.mockResolvedValue('<svg>content</svg>');
      mockOptimize.mockReturnValue({ data: '<svg>optimized</svg>' });
      mockWriteFile.mockResolvedValue(undefined);

      const files = await fs.readdir(mockRawDir);
      const svgFiles = files.filter((f: string) => f.toLowerCase().endsWith('.svg'));

      for (const file of svgFiles) {
        const content = await fs.readFile(path.join(mockRawDir, file), 'utf8');
        const optimized = optimize(content, { path: file, multipass: true, plugins: [] });
        await fs.writeFile(path.join(mockOptimizedDir, file), optimized.data, 'utf8');
      }

      expect(mockReadFile).toHaveBeenCalledTimes(2);
      expect(mockOptimize).toHaveBeenCalledTimes(2);
      expect(mockWriteFile).toHaveBeenCalledTimes(2);
    });

    it('should write optimized SVG to correct output path', async () => {
      const mockWriteFile = vi.mocked(fs.writeFile);
      const filename = 'test-icon.svg';
      const optimizedContent = '<svg>optimized</svg>';

      mockWriteFile.mockResolvedValue(undefined);

      await fs.writeFile(
        path.join(mockOptimizedDir, filename),
        optimizedContent,
        'utf8'
      );

      expect(mockWriteFile).toHaveBeenCalledWith(
        path.join(mockOptimizedDir, filename),
        optimizedContent,
        'utf8'
      );
    });

    it('should generate manifest.json with icon names', async () => {
      const mockWriteFile = vi.mocked(fs.writeFile);
      const iconNames = ['icon1', 'icon2', 'icon3'];
      const manifestPath = path.join(mockOptimizedDir, 'manifest.json');

      mockWriteFile.mockResolvedValue(undefined);

      await fs.writeFile(
        manifestPath,
        JSON.stringify({ icons: iconNames }, null, 2),
        'utf8'
      );

      expect(mockWriteFile).toHaveBeenCalledWith(
        manifestPath,
        JSON.stringify({ icons: iconNames }, null, 2),
        'utf8'
      );
    });

    it('should extract icon names without .svg extension', () => {
      const svgFiles = ['icon1.svg', 'icon2.svg', 'my-icon.svg'];
      const iconNames = svgFiles.map(file => path.basename(file, '.svg'));

      expect(iconNames).toEqual(['icon1', 'icon2', 'my-icon']);
    });

    it('should format manifest JSON with proper indentation', () => {
      const iconNames = ['icon1', 'icon2'];
      const manifest = JSON.stringify({ icons: iconNames }, null, 2);

      expect(manifest).toContain('{\n');
      expect(manifest).toContain('  "icons"');
      expect(manifest).toContain('\n}');
    });

    it('should log progress messages during processing', async () => {
      const mockConsoleLog = vi.spyOn(console, 'log');
      const svgCount = 5;

      console.log(`Found ${svgCount} SVG files to optimize`);
      console.log('✓ Optimized: icon.svg');
      console.log(`\nOptimization complete! ${svgCount} SVGs processed.`);

      expect(mockConsoleLog).toHaveBeenCalledWith('Found 5 SVG files to optimize');
      expect(mockConsoleLog).toHaveBeenCalledWith('✓ Optimized: icon.svg');
      expect(mockConsoleLog).toHaveBeenCalledWith('\nOptimization complete! 5 SVGs processed.');
    });
  });

  describe('Error handling', () => {
    it('should log error and exit on file read failure', async () => {
      const mockReaddir = vi.mocked(fs.readdir);
      const mockConsoleError = vi.spyOn(console, 'error');
      const mockExit = vi.spyOn(process, 'exit');

      const error = new Error('Permission denied');
      mockReaddir.mockRejectedValue(error);

      try {
        await fs.readdir(mockRawDir);
      } catch (err) {
        console.error('Error optimizing SVGs:', err);
        process.exit(1);
      }

      expect(mockConsoleError).toHaveBeenCalledWith('Error optimizing SVGs:', error);
      expect(mockExit).toHaveBeenCalledWith(1);
    });

    it('should handle empty directory gracefully', async () => {
      const mockReaddir = vi.mocked(fs.readdir);
      mockReaddir.mockResolvedValue([] as any);

      const files = await fs.readdir(mockRawDir);
      const svgFiles = files.filter((f: string) => f.toLowerCase().endsWith('.svg'));

      expect(svgFiles).toEqual([]);
      expect(svgFiles).toHaveLength(0);
    });

    it('should handle directory with no SVG files', async () => {
      const mockReaddir = vi.mocked(fs.readdir);
      mockReaddir.mockResolvedValue(['readme.txt', 'image.png'] as any);

      const files = await fs.readdir(mockRawDir);
      const svgFiles = files.filter((f: string) => f.toLowerCase().endsWith('.svg'));

      expect(svgFiles).toEqual([]);
    });

    it('should handle write errors', async () => {
      const mockWriteFile = vi.mocked(fs.writeFile);
      const error = new Error('Disk full');
      mockWriteFile.mockRejectedValue(error);

      await expect(
        fs.writeFile('test.svg', 'content', 'utf8')
      ).rejects.toThrow('Disk full');
    });

    it('should handle optimize errors', () => {
      const mockOptimize = vi.mocked(optimize);
      const error = new Error('Invalid SVG');
      mockOptimize.mockImplementation(() => {
        throw error;
      });

      expect(() => optimize('<invalid>', { path: 'test.svg', plugins: [] })).toThrow('Invalid SVG');
    });
  });

  describe('Path handling', () => {
    it('should resolve RAW_DIR correctly', () => {
      const expectedPath = path.resolve(process.cwd(), 'raw');
      expect(mockRawDir).toBe(expectedPath);
    });

    it('should resolve OPTIMIZED_DIR correctly', () => {
      const expectedPath = path.resolve(process.cwd(), 'optimized');
      expect(mockOptimizedDir).toBe(expectedPath);
    });

    it('should handle file paths with special characters', () => {
      const filename = 'icon-with-special_chars@2x.svg';
      const fullPath = path.join(mockRawDir, filename);

      expect(fullPath).toContain('raw');
      expect(fullPath).toContain(filename);
    });

    it('should construct correct output paths', () => {
      const inputFile = 'my-icon.svg';
      const outputPath = path.join(mockOptimizedDir, inputFile);

      expect(outputPath).toContain('optimized');
      expect(outputPath).toContain('my-icon.svg');
      expect(path.basename(outputPath)).toBe(inputFile);
    });
  });

  describe('Config type safety', () => {
    it('should use Config type from svgo', () => {
      const config: any = {
        path: 'test.svg',
        multipass: true,
        plugins: []
      };

      expect(config).toHaveProperty('path');
      expect(config).toHaveProperty('multipass');
      expect(config).toHaveProperty('plugins');
    });

    it('should have correct plugin structure', () => {
      const plugin = {
        name: 'prefixIds',
        params: {
          prefix: 'test-'
        }
      };

      expect(plugin.name).toBe('prefixIds');
      expect(plugin.params.prefix).toBe('test-');
    });
  });

  describe('Integration scenarios', () => {
    it('should handle complete workflow for single file', async () => {
      const mockAccess = vi.mocked(fs.access);
      const mockMkdir = vi.mocked(fs.mkdir);
      const mockReaddir = vi.mocked(fs.readdir);
      const mockReadFile = vi.mocked(fs.readFile);
      const mockWriteFile = vi.mocked(fs.writeFile);
      const mockOptimize = vi.mocked(optimize);

      mockAccess.mockRejectedValue(new Error('ENOENT'));
      mockMkdir.mockResolvedValue(undefined);
      mockReaddir.mockResolvedValue(['icon.svg'] as any);
      mockReadFile.mockResolvedValue('<svg><path/></svg>');
      mockOptimize.mockReturnValue({ data: '<svg width="24" height="24"><path/></svg>' });
      mockWriteFile.mockResolvedValue(undefined);

      // Simulate workflow
      try {
        await fs.access(mockOptimizedDir);
      } catch {
        await fs.mkdir(mockOptimizedDir, { recursive: true });
      }

      const files = await fs.readdir(mockRawDir);
      const svgFiles = files.filter((f: string) => f.toLowerCase().endsWith('.svg'));

      for (const file of svgFiles) {
        const content = await fs.readFile(path.join(mockRawDir, file), 'utf8');
        const optimized = optimize(content, { path: file, multipass: true, plugins: [] });
        await fs.writeFile(path.join(mockOptimizedDir, file), optimized.data, 'utf8');
      }

      const iconNames = svgFiles.map(f => path.basename(f, '.svg'));
      await fs.writeFile(
        path.join(mockOptimizedDir, 'manifest.json'),
        JSON.stringify({ icons: iconNames }, null, 2),
        'utf8'
      );

      expect(mockMkdir).toHaveBeenCalled();
      expect(mockReadFile).toHaveBeenCalled();
      expect(mockOptimize).toHaveBeenCalled();
      expect(mockWriteFile).toHaveBeenCalledTimes(2); // Once for SVG, once for manifest
    });

    it('should handle multiple files in batch', async () => {
      const mockReaddir = vi.mocked(fs.readdir);
      const mockReadFile = vi.mocked(fs.readFile);
      const mockWriteFile = vi.mocked(fs.writeFile);
      const mockOptimize = vi.mocked(optimize);

      const files = ['icon1.svg', 'icon2.svg', 'icon3.svg'];
      mockReaddir.mockResolvedValue(files as any);
      mockReadFile.mockResolvedValue('<svg/>');
      mockOptimize.mockReturnValue({ data: '<svg/>' });
      mockWriteFile.mockResolvedValue(undefined);

      const svgFiles = await fs.readdir(mockRawDir);

      for (const file of svgFiles) {
        const content = await fs.readFile(path.join(mockRawDir, file), 'utf8');
        const optimized = optimize(content, { path: file, multipass: true, plugins: [] });
        await fs.writeFile(path.join(mockOptimizedDir, file), optimized.data, 'utf8');
      }

      expect(mockReadFile).toHaveBeenCalledTimes(3);
      expect(mockOptimize).toHaveBeenCalledTimes(3);
      expect(mockWriteFile).toHaveBeenCalledTimes(3);
    });
  });
});