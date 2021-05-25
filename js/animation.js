let mainMenu;
let openMenu;
let closeMenu;
let btnMenu;
let nav;
let isVisible = false;
initComponents();
function initComponents() {
  mainMenu = document.querySelector(".mainMenu");
  openMenu = document.querySelector(".openMenu");
  closeMenu = document.querySelector(".closeMenu");
  btnMenu = document.querySelector(".navbar-toggler");
  nav = document.querySelector("#navbarTogglerDemo01");
}

openMenu.addEventListener("click", show);

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

function show() {
  isVisible = !isVisible;

  if (isVisible) {
    mainMenu.style.display = "flex";
    mainMenu.style.top = "0";
  } else {
    mainMenu.style.display = "none";
  }
}

function close() {
  mainMenu.style.top = "-100%";
}

let hash = window.location.hash;
let aLinkActualHash = document.querySelector('a[href="' + hash + '"]');
if (
  aLinkActualHash !== null &&
  !aLinkActualHash.parentNode.classList.contains("active")
) {
  console.log("hash");
  showTabs(aLinkActualHash);
}
