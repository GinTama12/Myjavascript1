//数据类型
let num = 3.22;
let age = 18;
let str = "我是中国人";
let bool = false;
let arr = ['马化腾', '李彦宏', '刘强东', '张一民'];
let obj = { name: "张三", age: 25, gender: "男" };
document.write("数字类型；" + num + "<br>");
document.write("字符串类型；" + str + "<br>");
document.write("布尔类型；" + bool + "<br>");
document.write("数组类型；" + arr[2] + "<br>");
document.write("对象类型；" + JSON.stringify(obj) + "<br>");
let a = 3;
let b = 4;
let c = a + b;
let d = a + b * c / 2;
document.write("a+b的结果是：" + c + "<br>");
document.write(d + "<br>");
document.write("我今年是" + age + "岁" + "<br>");
//模板字符串
let name = "张三";
let message = `大家好，我是${name},今年${age}岁了`;
document.write(message + "<br>");
let emaile = prompt("请输入邮箱地址");
document.write(`您输入的邮箱地址是；${emaile}<br>`);
document.write(`您输入的邮箱地址是；${emaile}<br>`);