"use strict";
document.getElementById("demo").innerHTML =
    typeof "John" + "<br>" +
        typeof 3.14 + "<br>" +
        typeof false + "<br>" +
        typeof [1, 2, 3, 4] + "<br>" +
        typeof { name: 'John', age: 34 } + "<br>" +
        typeof new Date() + "<br>" +
        typeof function () { } + "<br>" +
        typeof null + "<br>" +
        typeof undefined;
for (let i = 0; i < 10; i++) {
    document.getElementById("demo").innerHTML += typeof i + "<br>";
}
