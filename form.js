function myFunction() {
    const x = document.getElementById("numb").value;
    if (isNaN(x) || x < 1 || x > 10) {
        document.getElementById("demo").textContent = "输入错误，请输入1-10之间的数字";
    } else {
        document.getElementById("demo").textContent = "输入正确";
    }




}