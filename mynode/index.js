// 与server.js/route.js一起使用,运行时运行index.js
// ./为当前目录
var server = require("./server");
var router = require("./router");
 
server.start(router.route);