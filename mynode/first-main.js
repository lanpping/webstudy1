// 阻塞调用,按顺序执行，在文件读取完后才执行程序
// var fs=require("fs");
// var data=fs.readFileSync('1.txt');
// console.log(data.toString());
// console.log('程序执行结束！');
//结果是先输出文件内容再输出程序结束

// 非阻塞调用，不按顺序，在读取文件同时执行接下来的代码，大大提高程序性能
// 故如果需要处理回调函数的参数,需要写在回调函数内
var fs=require("fs");
// fs.readFile()是异步函数用于读取文件，如果在文件读取过程中发生错误，错误err对象就会输出错误信息
// 如果没有发生错误，readFile跳过err对象的输出，文件内容就通过回调函数输出
var data=fs.readFile("1.txt",function(err,data){
	if(err) return console.log(err);
	console.log(data.toString());
});
console.log("程序执行结束!");
// 先输出程序结束再输文件内容
