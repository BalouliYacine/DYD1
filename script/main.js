let otherLinks = document.querySelector("#hiddenMegaUl");
let megaMenu = document.querySelector("#megamenu");
let bugerMenu = document.querySelector(".bugerMenu");
let navLinks = document.querySelector(".navLinks");
//

otherLinks.addEventListener("click", function () {
  megaMenu.classList.toggle("hide");
});
//
bugerMenu.parentNode.appendChild(bugerMenu);
bugerMenu.addEventListener("click", function (e) {
  e.preventDefault();
  bugerMenu.classList.toggle("on");
  if (bugerMenu.classList.contains("on")) {
    navLinks.style.display = "block";
  } else {
    navLinks.style.display = "none";
  }
});
//
