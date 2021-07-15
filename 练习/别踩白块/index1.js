// 建div,className为div的类名
function creatediv(className){
	var div=document.createElement('div');
	div.className=className;
	return div;
}
var clock=null;
var state=0;
var speed=6;
var flag=false;

// 点击按钮，开始游戏
function start(){
	if(!flag){
		init();//初始化游戏
	}else{
		alert("游戏已经开始，无需再次点击！");
	}
}

// 建一个类名为row都div,且其有四个子节点<div class="cell>"
function createrow(){
	var con=document.getElementById("con");
	var row=creatediv('row');//建了一个<div class="row">
	var arr=createcell();//为div cell定义类名，有一个是cell black,即是一个存放class值的数组
	
	con.appendChild(row);//为con添加子节点row
	for(var i=0;i<4;i++){
		row.appendChild(creatediv(arr[i]));//为row添加子节点<div class="cell"
	}
	
	
	
	if(con.firstChild==null){
		con.appendChild(row);
	}else{
		con.insertBefore(row,con.firstChild);
	}
}

// 创建一个存放类名的数组
function createcell(){
	var temp=['cell','cell','cell','cell']; 
	var i=Math.floor(Math.random()*4);//随机决定哪一个是黑色方块
	temp[i]='cell black';
	return temp;
}

// 删除con里面的最后一个<div class="row">
function delrow(){
	var con=document.getElementById("con");
	if(con.childNodes.length==6){
		con.removeChild(con.lastChild);
	}
}



// 初始化
function init(){
	flag=true;
	for(var i=0;i<4;i++){
		createrow();
	}

    // 添加点击事件
    document.getElementById("main").onclick=function(e){
	    e=e||event;
	    judge(e);
    };
	// 定时器  每30毫秒调用一次move()
	clock=window.setInterval("move()",30);
}
// 移动方块
function move(){
	var con=document.getElementById("con");
	// window.getComputedStyle获取指定元素con的在浏览器最终渲染的css样式，第二个参数是可选，伪类元素，
	// 当不需要查询伪类元素就可以忽略或者传入null,返回值是一个cssstyleDeclaration类型对象
	var top=parseInt(window.getComputedStyle(con,null)['top']);
	
	if(speed+top>0){
		top=0;
	}else{
		top+=speed;
	}
	con.style.top=top+'px';//不断移动Top值，让它动起来
	
	over();
	if(top==0){
		createrow();
		con.style.top="-102px";
		delrow();
	}
}

// 判断是否点击黑块或白块
function judge(e){
	// e.target属性返回的是触发该事件的节点，如生成事件的元素，文档或窗口
	if(e.target.className.indexOf('black')==-1 && e.target.className.indexOf('cell')!==-1){
		// 表示当点击了白块时，定义<div class='row'>的属性pass1值为一
		e.target.parentNode.pass1=1;
	}
	if(e.target.className.indexOf('black')!==-1){
		// 点击目标元素，类名含有black 表示点了黑块
		e.target.className='cell';
		// 定义属性pass 表示此行的黑块已经被点了
		e.target.parentNode.pass=1;
		score();//加分
	}
}

// 是否结束游戏
function over(){
	var rows=con.childNodes;
	if(rows.length==5 && rows[rows.length-1].pass!==1){
		// 黑块到了最低一层，仍未有被点击，游戏失败
		fail();
	}
	for(let i=0;i<rows.length;i++){
		// 表示白块被点了，游戏失败
		if(rows[i].pass1 ==1){
			fail();
		}
	}
}

// 游戏结束
function fail(){
	clearInterval(clock);
	flag=false;
	confirm("你的最终得分为 "+parseInt(document.getElementById("score").innerHTML));
	var con=document.getElementById("con");
	con.innerHTML="";
	document.getElementById("score").innerHTML=0;
	con.style.top='-408px';
}

//加速函数
function speedup(){
	speed+=2;
	if(speed==20){
		alert("超神了！！！");
	}
}

function score(){
	var newscore=parseInt(document.getElementById("score").innerHTML) +1;
	document.getElementById("score").innerHTML=newscore;//修改分数
	if(newscore%10==0){
		// 当分数是10的倍数，使用加速函数，分数越高速度越快
		speedup();
	}
}