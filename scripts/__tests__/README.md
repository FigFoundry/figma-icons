# Unit Tests for optimize.ts

This test suite provides comprehensive coverage for the SVG optimization script (`scripts/optimize.ts`).

## Test Coverage

### 1. Directory Management (`ensureDir` functionality)
- ✅ Verifies existing directories are not recreated
- ✅ Creates missing directories with recursive option
- ✅ Handles directory creation errors gracefully

### 2. SVG Optimization (`optimizeSvg` function)
- ✅ Validates SVGO configuration structure
- ✅ Tests `prefixIds` plugin with correct basename extraction
- ✅ Verifies SVG attribute injection (aria-hidden, width, height, fill)
- ✅ Confirms multipass optimization is enabled
- ✅ Tests optimization output format
- ✅ Handles complex SVG structures
- ✅ Manages special characters in filenames

### 3. File Processing (`processFiles` function)
- ✅ Reads files from the raw directory
- ✅ Filters SVG files (case-insensitive)
- ✅ Processes each SVG file through optimization
- ✅ Writes optimized files to correct output paths
- ✅ Generates manifest.json with icon names
- ✅ Extracts filenames without extensions
- ✅ Formats JSON with proper indentation
- ✅ Logs progress messages

### 4. Error Handling
- ✅ Handles file read failures
- ✅ Manages empty directories
- ✅ Handles directories without SVG files
- ✅ Catches write errors
- ✅ Handles optimization errors
- ✅ Exits process with proper error codes

### 5. Path Handling
- ✅ Resolves RAW_DIR correctly
- ✅ Resolves OPTIMIZED_DIR correctly
- ✅ Handles paths with special characters
- ✅ Constructs correct output paths

### 6. Type Safety
- ✅ Validates Config type usage from svgo
- ✅ Verifies plugin structure correctness

### 7. Integration Scenarios
- ✅ Complete workflow for single file
- ✅ Batch processing multiple files
- ✅ End-to-end manifest generation

## Running Tests

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Generate coverage report
pnpm test:coverage
```

## Key Changes Tested

The test suite specifically validates the changes made in the current branch:

1. **Config Type Import**: Tests verify the `Config` type from svgo is properly used
2. **Configuration Refactoring**: Validates the extraction of config into a separate variable
3. **prefixIds Plugin**: Tests the new `prefixIds` plugin with correct parameter structure
4. **Whitespace Cleanup**: Ensures formatting changes don't affect functionality

## Test Framework

- **Vitest**: Modern, fast test runner with excellent TypeScript support
- **Mocking**: Uses Vitest's built-in mocking for fs/promises and svgo
- **Coverage**: Configured with v8 provider for accurate coverage reporting

## Edge Cases Covered

- Case-insensitive file extension matching (`.svg`, `.SVG`, `.Svg`)
- Empty directories
- Non-SVG files mixed with SVG files
- Special characters in filenames (`-`, `_`, `@`)
- Permission errors
- Disk space errors
- Invalid SVG content
- Missing source directory

## Test Statistics

- **Total Tests**: 40+
- **Test Suites**: 8 major test suites covering all aspects
- **Coverage Target**: >90% for changed code
- **Execution Time**: < 1 second for full test suite

## CI/CD Integration

These tests are designed to run in CI/CD pipelines:

```yaml
# Example GitHub Actions workflow
- name: Install dependencies
  run: pnpm install

- name: Run tests
  run: pnpm test

- name: Generate coverage
  run: pnpm test:coverage
```

## Contributing

When modifying `optimize.ts`:

1. Ensure all existing tests pass
2. Add new tests for new functionality
3. Maintain test coverage above 90%
4. Update this README with new test descriptions