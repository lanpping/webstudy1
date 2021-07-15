function draw(){
	var canvas=document.getElementById('mycanvas');
	if(!canvas.getContext) return;
	var ctx=canvas.getContext("2d");
	//若不写默认黑色
	ctx.fillStyle="blue";
	//绘制填充矩形，（x,y,width,height）
	ctx.fillRect(10,10,26,16);
	//空心，即一个矩形边框
	ctx.strokeRect(40,40,26,26);
	//清除指定矩形区域，即该出出现一个透明的矩形
	ctx.clearRect(12,12,6,3);
}
draw();