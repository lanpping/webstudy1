// Buffer 缓冲区，专门存放二进制数据的缓冲区

// 创建Buffer类

// 创建一个长度为 10、且用 0 填充的 Buffer
const buf1=Buffer.alloc(256);
// 创建一个长度为 10、且用 0x1 填充的 Buffer
const buf2=Buffer.alloc(10,1);
// 创建一个长度为 10、且未初始化的 Buffer。
// 这个方法比调用 Buffer.alloc() 更快，
// 但返回的 Buffer 实例可能包含旧数据，
// 因此需要使用 fill() 或 write() 重写。
const buf3=Buffer.allocUnsafe(10);
// 创建一个包含 [0x1, 0x2, 0x3] 的 Buffer。
const buf4=Buffer.from([1,2,3]);
const buf5=Buffer.from("abc");
// 创建一个包含 Latin-1 字节的 Buffer。
const buf6=Buffer.from("a","latin1");

// 写入缓冲区
// buf.write(string[, offset[, length]][, encoding])
// 根据 encoding 的字符编码写入 string 到 buf 中的 offset 位置。 length 参数是写入的字节数
// 返回实际写入的大小。如果 buffer 空间不足， 则只会写入部分字符串。
const len=buf1.write("www.runoob.com");
console.log("buf1写入字节数："+len);

// 读取缓冲区数据
// buf.toString([encoding[, start[, end]]])
for (var i=0;i<10;i++){
	buf2[i]=i+97;
}
console.log(buf2.toString('ascii'));
console.log(buf2.toString('ascii',0,5));
console.log(buf2.toString('utf8',0,5));
console.log(buf2.toString(undefined,0,5));

// 将Buffer转换为JSON对象  buf.toJSON()
// 当字符串化一个 Buffer 实例时，JSON.stringify() 会隐式地调用该 toJSON()。
const json=JSON.stringify(buf4);
// 返回·的是JSON对象
// 输出: {"type":"Buffer","data":[1,2,3,4,5]}
console.log("隐式调用buf4的toJSON()后返回的JSON对象:"+json);

// JSON通常用于与服务端交换数据,在接收服务器数据时一般是字符串
// 利用JSON.parse(text[,reviver])将数据转换成Javascript对象
// text:必需,一个有效的json字符串,reviver:可选,将为对象的每个成员调用此函数
const copy=JSON.parse(json,(key,value)=>{
	return value && value.type ==='Buffer'?
	    Buffer.from(value.data):
		value;
});
// 输出: <Buffer 01 02 03 04 05>
console.log(copy);

// 拷贝缓冲区
// 实际是用buf6的内容从buf5下标为1位置开始替换掉buf6长度的内容,是替换
// buf.copy(...)无返回值
buf6.copy(buf5,1);
console.log("将buf6内容拷贝到buf5指定位置后buf5的内容："+buf5.toString());

// 缓冲区合并
// 返回一个多个成员合并的新Buffer对象
const buf7=Buffer.from(('菜鸟教程'));
const buf8=Buffer.from(('www.runoob.com'));
const buf9=Buffer.concat([buf7,buf8]);
console.log('合并buf7和buf8后所形成的buf9内容：'+buf9.toString());

// 缓冲区比较
// 这个方法是按位比较的。buffer1 的第一位比较 buffer2 的第一位，相等的话比较第二位以此类推
// buf.compare(otherBuffer);返回的是一个数字
var b1=Buffer.from('ABC');
var b2=Buffer.from('ABCD');
var result=b1.compare(b2);
if(result<0){
	console.log(b1+"在"+b2+"之前");
}else if(result==0){
	console.log(b1+"与"+b2+"相同");
}else{
	console.log(b1+"在"+b2+"之后");
}

// 缓冲区剪切
// 返回的实际是原始缓存区 buffer 或者一部分，操作的是与原始 buffer 同一块内存区域。
var buf10=buf8.slice(0,4);
console.log("被剪切掉的buf8内容："+buf10.toString());

// 缓冲区长度,返回的是Buffer对象所占据的内存长度
console.log("buf10这个Buffer对象所占据的内存长度："+buf10.length);