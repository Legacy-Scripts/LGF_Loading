//@ts-check

import { exists, exec, getFiles } from './utils.js';
import { createBuilder, createFxmanifest } from '@overextended/fx-utils';

const watch = process.argv.includes('--watch');
const version = process.argv.find(arg => /^v(\d+)\.(\d+)\.(\d+)$/.test(arg)) || 'custom';
const web = await exists('./web');

createBuilder(
  watch,
  {
    dropLabels: !watch ? ['DEV'] : undefined,
  },
  [
    {
      name: 'server',
      options: {
        platform: 'node',
        target: ['node16'],
        format: 'cjs',
      },
    },
    {
      name: 'client',
      options: {
        platform: 'browser',
        target: ['es2021'],
        format: 'iife',
      },
    },
  ],
  async (outfiles) => {
    const files = await getFiles('dist/web', 'static', 'locales');
    await createFxmanifest({
      server_scripts: [outfiles.server],
      client_scripts: [outfiles.client],
      files: ['locales/*.json', ...files],
      dependencies: ['/server:7290', '/onesync'],
      metadata: {
        version: version,
        loadscreen: 'dist/web/index.html',
        loadscreen_cursor: 'yes',
        loadscreen_manual_shutdown: 'yes',
      },
    });
  }
);

if (web) await exec(`cd ./web && vite build ${watch ? '--watch' : ''}`);
