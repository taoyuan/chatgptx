import { defineConfig } from 'tsup'

const baseConfig = {
  entry: ['src/index.ts', 'src/cli.ts'],
  splitting: false,
  sourcemap: true,
  minify: false,
  shims: true,
  dts: true,
  external: ['undici']
}

export default defineConfig([
  {
    ...baseConfig,
    outDir: 'build',
    target: 'node16',
    platform: 'node',
    format: ['esm']
  },
  {
    ...baseConfig,
    outDir: 'build',
    target: 'node14',
    platform: 'node',
    format: ['cjs'],
    noExternal: ['p-timeout', 'quick-lru', 'strip-markdown']
  }
])
