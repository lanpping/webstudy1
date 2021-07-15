// 路由器,与server.js/index.js一起使用,运行时运行index.js
function route(pathname) {
  console.log("About to route a request for " + pathname);
}
 
exports.route = route;