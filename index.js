// Ini akan mengimport module bernama `os`
const os = require('os');
const luasSegitiga = require('./segitiga.js');

// Ini akan mengimport module bernama `fs`
const fs = require('fs');

console.log('Free Memory: ', os.freemem());

// mengakses file system: melakukan read
const isi = fs.readFileSync('./text.txt', 'utf-8');

console.log(isi);
// output: berdasarkan file txt
