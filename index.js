// Ini akan mengimport module bernama `os`
const os = require('os');
const luasSegitiga = require('./segitiga.js');

// Ini akan mengimport module bernama `fs`
const fs = require('fs');

const surya = require('./person.json');

console.log('Free Memory: ', os.freemem());

// mengakses file system: melakukan read
const isi = fs.readFileSync('./text.txt', 'utf-8');
fs.writeFileSync(
  './test.txt',
  'I love you. Eh salah, maksudnya i love binar :)'
);

console.log(isi);
// output: berdasarkan file txt

console.log(surya);
