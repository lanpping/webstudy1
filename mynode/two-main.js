// 事件循环
// ①引入events模块
var events=require("events");
// ②创建eventEmitter对象
var eventEmitter=new events.EventEmitter();
// 创建事件处理处理程序
var connectHandler=function connected(){
	console.log("连接成功!");
	// 触发事件data_received
	eventEmitter.emit('data_received');
}
// ③绑定事件connection及事件处理函数connectHandler
eventEmitter.on('connection',connectHandler);
// 使用匿名函数绑定事件data_received
eventEmitter.on('data_received',function(){
	console.log("数据接受成功!");
});
// ④触发事件connection
eventEmitter.emit('connection');
console.log("程序执行完毕.");