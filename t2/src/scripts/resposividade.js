var toggleMenu = document.getElementById("toggle-menu");
var mapaForms = document.querySelector(".calculo__mapa-forms");
var mapaView = document.querySelector(".calculo__mapa-view");

toggleMenu.addEventListener("change", function () {
  if (this.checked) {
    mapaView.style.zIndex = -1;
  } else {
    mapaView.style.zIndex = "";
  }
});

window.addEventListener("resize", function () {
  if (window.innerWidth >= 1000) {
    mapaView.style.zIndex = "";
  }
});

toggleMenu.addEventListener("change", function () {
  if (window.innerWidth < 1000) {
    mapaForms.style.display = this.checked ? "flex" : "none";
  }
});

window.addEventListener("resize", function () {
  if (window.innerWidth >= 1000) {
    mapaForms.style.display = "flex";
  } else if (!toggleMenu.checked) {
    mapaForms.style.display = "none";
  }
});