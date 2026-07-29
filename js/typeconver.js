//隐式转换
//1.字符串转换
var a = 1;
var b = "2";
console.log(` ${a + b} = ${typeof (a + b)}类型`); //隐式转换为字符串


//2.数字转换
var c = "3";
var d = 4;
console.log(`${c * d}是${typeof (c * d)}类型`); //隐式转换为数字
//显示转换
var e = "5.4";
var f = Number(e);
console.log(`${f}是${typeof f}类型`); //显示转换为数字
