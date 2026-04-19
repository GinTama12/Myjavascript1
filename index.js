
// 使用反引号 (``) 定义一个模板字符串，内容为一段 HTML 片段
let templateString = `<p>这是一个模板字符串示例。'哈哈'</p>`;
// 通过 id 获取页面中的元素，并将模板字符串作为 HTML 渲染到该元素内部
document.getElementById("templateString").innerHTML = templateString;