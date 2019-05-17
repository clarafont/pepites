var toggleMenu = document.getElementById("toggleMenu");
var menu = document.getElementById("nav");
var button = document.getElementById("toggleMenu2");

toggleMenu.addEventListener("click", function(){
  menu.classList.toggle("hidden");
});

toggleMenu2.addEventListener("click", function(){
  menu.classList.toggle("hidden");
});
