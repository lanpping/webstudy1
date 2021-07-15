// EventEmitter
var events=require("events");
var emitts=new events.EventEmitter();
var listenter1=function listenter1(){
	console.log("listenter1执行");
}
var listenter2=function listenter2(){
	console.log("listenter2执行");
}
var listenter3=function listenter3(){
	console.log("listenter3执行,且最多只触发一次");
}

//绑定事件connection，及事件处理函数listenter1/2/3。
// addListener(event, listener)为指定事件添加一个监听器到监听器数组的尾部。其实和on没有任何区别
emitts.addListener("connection",listenter1);
// on(event, listener)为指定事件注册一个监听器，接受一个字符串 event 和一个回调函数。
emitts.on("connection",listenter2);
// once(event, listener)为指定事件注册一个单次监听器，即 监听器最多只会触发一次，触发后立刻解除该监听器。
emitts.once("connection",listenter3);

// 返回指定事件的监听器数量
var listenters=emitts.listenerCount("connection");
console.log("connection的监听个数："+listenters);

emitts.emit("connection");

//removeListener移除一个监听器, removeAllListeners([event])移除所有事件的所有监听器， 如果指定事件，则移除指定事件的所有监听器。
emitts.removeListener("connection",listenter1);
console.log("listener1不再监听")

emitts.emit("connection");

listenters=emitts.listenerCount("connection");
console.log("connection的监听个数："+listenters);

console.log("程序执行结束！")