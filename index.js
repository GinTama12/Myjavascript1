//创建对象定义属性和方法
var person = {
    name: "张三",
    age: 20,
    job: "学生",
    fullname: function() {
        return this.name + "现在是" + this.age + "岁了";
    }
}
//访问对象属性和方法（两种方式）
function myFunction() {
    //方式一：使用点符号访问对象属性
    var result1 = "方式一（点符号）：" + person.name + "，" + person.job;
    //方式二：使用方括号访问对象属性
    var result2 = "方式二（方括号）：" + person["name"] + "，" + person["job"];
    document.getElementById("demo").innerHTML = result1 + "<br>" + result2;
}