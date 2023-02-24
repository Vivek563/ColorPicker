//vivek
const btn = document.getElementsByClassName("btn");
const cop = document.getElementsByClassName("copy_alert");
const text = document.getElementsByClassName("text")[0];

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    const vm = document.createElement("textarea");
    let color = this.getAttribute("data-color");
    console.log("color is " + color);
    vm.value = color;
    document.body.appendChild(vm);
    vm.select();
    document.execCommand("copy");
    document.body.removeChild(vm);

    cop[i].style.visibility = "visible";
    setTimeout(() => {
      cop[i].style.visibility = "hidden";
    }, "1000");
  });
}
