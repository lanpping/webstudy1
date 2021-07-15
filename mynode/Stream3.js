// 管道流
// 管道提供了一个输出流到输入流的机制。通常我们用于从一个流中获取数据并将数据传递到另外一个流中。
// fs 模块中还有 appendFile 函数，它可以将新的内容追加到已有的文件中，如果文件不存在，则会创建一个新的文件。使用方法如下：
// fs.appendFile(文件名, 数据, 编码, 回调函数(err));

var fs = require("fs");

// 创建一个可读流
var readerStream = fs.createReadStream('1.txt');

// 创建一个可写流
var writerStream = fs.createWriteStream('copy1.txt');

// 管道读写操作
// 读取 1.txt 文件内容，并将内容写入到 copy1.txt 文件中
readerStream.pipe(writerStream);

console.log("程序执行完毕");