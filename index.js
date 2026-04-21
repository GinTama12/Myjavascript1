
// 使用反引号 (``) 定义一个模板字符串，内容为一段 HTML 片段
let templateString = `<p>这是一个模板字符串示例。'哈哈'</p>`;
// 通过 id 获取页面中的元素，并将模板字符串作为 HTML 渲染到该元素内部
document.getElementById("templateString").innerHTML = templateString;
// 定义一个多行文本的模板字符串并且输出到页面中
const multiLineText = `这是一个多行文本的示例。
它可以包含换行符和其他特殊字符。`;
// 使用 textContent 代替 innerText：性能更好（不会触发布局/回流），且不受 CSS 影响
const multiLineEl = document.getElementById("multiLineText");
if (multiLineEl) {
    multiLineEl.textContent = multiLineText;
}
// 定义一个包含表达式的模板字符串
const name="甄辉";
const age=36;
const expressionEmbedding = `我的名字是${name}，今年${age}岁。`;
document.getElementById("expressionEmbedding").textContent = expressionEmbedding;
// 定义一个包含函数调用的模板字符串
const price = 100.3;
const vat=0.2;
const TotalPrice = `总价是：${(price * (1 + vat)).toFixed(2)}元。`;
document.getElementById("functionCall").textContent = TotalPrice;
// 把模板字符串当作html片段插入到页面中
let header = "";
let tags = ["RUNOOB", "GOOGLE", "TAOBAO"];

let html = `<h2>${header}</h2><ul>`;
for (const x of tags) {
  html += `<li>${x}</li>`;
}

html += `</ul>`;
document.getElementById("htmlTemplate").innerHTML = html;
//计算X的值
function calculateX() {
    const a = 5;
    const b = 10;
    const x = `X的值是：${a + b}`;
    document.getElementById("result").textContent = x;
}
//比较运算符
function compareValues() {
    const a = 5;
    const b = "5";
    const result = `a == b: ${a == b}, a === b: ${a === b}`;
    document.getElementById("comparison").textContent = result;
}
//逻辑运算符
function logicalOperators() {
    const a = true;
    const b = false;
    const result = `a && b: ${a && b}, a || b: ${a || b}, !a: ${!a}`;
    document.getElementById("logical").textContent = result;
}
//条件运算符
function checkAge() {
    const age = parseInt(document.getElementById("age").value);
    const result = `你${age >= 18 ? "可以" : "不能"}投票。`;
    document.getElementById("ageResult").textContent = result;
}
//条件运算符示例
function greet() {
    const currentHour = new Date().getHours();
    if (currentHour < 10) {
        document.getElementById("greet").textContent = "早上好";
    } else if(currentHour>=10&&currentHour<18){
        document.getElementById("greet").textContent = "今天好";
    }else{
        document.getElementById("greet").textContent = "晚上好";
    }}
//根据当前时间获取不同的问候语
function greet(){
    const currentHour = new Date().getHours();
    switch(currentHour){
        case 20:x="8点了";
        break;
        case 21:x="9点了";
        break;

        case 22:x="10点了";
        break;

        case 23:x="11点了";
        break;
        default:x="现在不是晚上8点到11点";
    }
    document.getElementById("greet").textContent = x;
}