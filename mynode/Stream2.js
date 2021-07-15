// 写入流

var fs = require("fs");
var data = '菜鸟教程:学的不仅是技术,还是梦想';

// 创建一个可以写入的流，写入到文件 write.txt 中
var writerStream = fs.createWriteStream('write.txt');

// 使用 utf8 编码写入数据
writerStream.write(data,'UTF8');

// 标记文件末尾
writerStream.end();

// 处理流事件 --> finish、error
writerStream.on('finish', function() {
    console.log("写入完成。");
});

writerStream.on('error', function(err){
   console.log(err.stack);
});

console.log("程序执行完毕");