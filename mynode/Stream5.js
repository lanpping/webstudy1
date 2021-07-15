// 此为解压文件,Stream4为压缩文件

var fs = require("fs");
var zlib = require('zlib');

// 解压 1.txt.gz 文件为 1-2.txt
fs.createReadStream('1.txt.gz')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('1-2.txt'));
  
console.log("文件解压完成。");