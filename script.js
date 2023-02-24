const btn = document.getElementsByClassName("btn");
const elm = document.getElementsByClassName("copy_alert");
const text = document.getElementsByClassName("text")[0];

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    const el = document.createElement("textarea");
    let color = this.getAttribute("data-color");
    console.log("color is " + color);
    el.value = color;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);

    elm[i].style.visibility = "visible";
    setTimeout(() => {
      elm[i].style.visibility = "hidden";
    }, "1000");
  });
}
