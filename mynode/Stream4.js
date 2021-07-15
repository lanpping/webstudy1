// 链式流
// 链式是通过连接输出流到另外一个流并创建多个流操作链的机制。链式流一般用于管道操作。
// 可用管道和链式来压缩和解压文件。
// 此为压缩文件,Stream5是解压文件

var fs = require("fs");
var zlib = require('zlib');

// 压缩 1.txt 文件为 1.txt.gz,
fs.createReadStream('1.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('1.txt.gz'));
  
console.log("文件压缩完成。");
// 执行完以上操作后，我们可以看到当前目录下生成了 1.txt 的压缩文件 1.txt.gz