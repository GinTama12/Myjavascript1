
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