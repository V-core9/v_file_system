/*jshint esversion: 7 */

const vExists = require('../src/v_exists');

// directory to check if exists
const dir = './uploads';

vExists('./uploads');
vExists('./src');
vExists('./bin');
vExists('./_tests');
vExists('./node_modules');
vExists('./node_modules/uploads');
vExists('./node_modules/src');
vExists('./node_modules/bin');
vExists('./node_modules/_tests');
vExists('./node_modules/node_modules');

vExists('./README.md');
vExists('./LICENSE');
vExists('./.gitignore');
vExists('./src/v_exists.js');
vExists('./src/package.json');
vExists('./src/README.md');
vExists('./src/LICENSE');
vExists('./src/.gitignore');
vExists('./src/src/v_exists.js');
vExists('./src/package.json');
