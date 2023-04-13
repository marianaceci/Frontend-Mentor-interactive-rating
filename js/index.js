// quando clica em cada numero:
let btns = document.querySelectorAll(".btn");


btns.forEach((btn) => {
  btn.addEventListener("click", function () {
    var rate = btn.innerHTML;
    sessionStorage.setItem("rate", rate);
  })
})

