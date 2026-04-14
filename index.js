//创建对象定义属性和方法
var person = {
    name: "张三",
    age: 20,
    job: "学生",
    fullname: function() {
        return this.name + "现在是" + this.age + "岁了";
    }
}
//访问对象属性和方法
function myFunction() {
    document.getElementById("demo").innerHTML = person.fullname();
}