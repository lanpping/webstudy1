function draw(){
	var canvas=document.getElementById('mycanvas');
	if(!canvas.getContext) return;
	var ctx=canvas.getContext("2d");
	// 新建一条路径
	ctx.beginPath();
	//三角形
	ctx.moveTo(100,100);
	ctx.lineTo(280,100);
	ctx.lineTo(280,280);
	//圆弧
//arc(x, y, r, startAngle, endAngle, anticlockwise),其中4,5参数是弧度即=(Math.PI/180)*degrees
 //最后一个参数取值为false表示顺时针，也是默认值
	//ctx.arc(50,50,40,0,Math.PI/2,false);
	//ctx.arc(50,50,40,-Math.PI/2,Math.PI/2,false);
	//arcTo(x1, y1, x2, y2, radius): 按坐标半径画一段圆弧，最后再以直线连接两个端点
	//ctx.arcTo(66,66,66,86,10);
	//ctx.closePath();
	//ctx.stroke();//描边，stroke不会自动closepath()
	ctx.fill();//填充闭合区域，fill会自动关闭path不需要closepath（）
}
draw();