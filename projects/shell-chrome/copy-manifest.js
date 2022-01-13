const chalk = require('chalk');
const { writeFileSync, readFileSync } = require('fs');
const { join } = require('path');

console.log('creating build for:', chalk.yellow(process.env.BUILD));

const MANIFEST_INPUT_PATH = join(__dirname, `src/manifest/manifest.${process.env.BUILD}.json`);
const MANIFEST_OUTPUT_PATH = join(process.cwd(), `dist/shell-chrome/manifest.json`);

const rawData = readFileSync(MANIFEST_INPUT_PATH);
const manifest = JSON.parse(rawData.toString());
console.log('writing manifest file for:', chalk.yellow(process.env.BUILD));

writeFileSync(MANIFEST_OUTPUT_PATH, JSON.stringify(manifest, null, 2), { flag: 'a+' });
console.log('manifest copied: ', chalk.green('done'));
