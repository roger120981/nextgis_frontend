// @ts-check

import { existsSync, readdirSync } from 'node:fs';

import dts from 'rollup-plugin-dts';

if (!existsSync('temp/packages')) {
  console.warn(
    'no temp dts files found. run `tsc -p tsconfig.build.json` first.',
  );
  process.exit(1);
}

const packages = readdirSync('temp/packages');
const targets = process.env.TARGETS ? process.env.TARGETS.split(',') : null;
const targetPackages = targets
  ? packages.filter((pkg) => targets.includes(pkg))
  : packages;

function ignoreAssets() {
  const pattern = /\.(css|scss|png|jpg|jpeg|svg|woff|woff2|ttf)$/;
  return {
    name: 'ignore-assets',
    /**
     * @param {string} id
     */
    resolveId(id) {
      if (pattern.test(id)) {
        return false;
      }
      return null;
    },
  };
}

export default targetPackages.map(
  /** @returns {import('rollup').RollupOptions} */
  (pkg) => {
    return {
      input: `./temp/packages/${pkg}/src/index.d.ts`,
      output: {
        file: `packages/${pkg}/lib/index.d.ts`,
        format: 'es',
      },
      plugins: [ignoreAssets(), dts()],
      onwarn(warning, warn) {
        // during dts rollup, everything is externalized by default
        if (
          warning.code === 'UNRESOLVED_IMPORT' &&
          !warning.exporter?.startsWith('.')
        ) {
          return;
        }
        warn(warning);
      },
    };
  },
);
