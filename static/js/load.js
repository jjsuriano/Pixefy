window.addEventListener("load", function (event) {
  document.querySelector("body").className = "";
});

const now = new Date();
document.querySelector("#year").innerHTML = now.getFullYear();
