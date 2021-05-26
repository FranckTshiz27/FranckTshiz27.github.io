let mainMenu;
let openMenu;
let closeMenu;
let btnMenu;
let nav;
let isVisible = false;
let links = [];
initComponents();
function initComponents() {
  mainMenu = document.querySelector(".mainMenu");
  openMenu = document.querySelector(".openMenu");
  closeMenu = document.querySelector(".closeMenu");
  btnMenu = document.querySelector(".navbar-toggler");
  nav = document.querySelector("#navbarTogglerDemo01");
  getLinks(mainMenu);
}

function getLinks(mainMenu) {
  if (mainMenu != null) {
    let lis = mainMenu.children;
    for (let item of lis) {
      link = item.children;
      if (link != null) {
        links.push(link);
      }
    }
  }

  setActions();
}

function setActions() {
  for (let elt of links) {
    elt.addEventListener("click", function () {});
  }
}

function setActive(link) {}
function removeActiveLink() {
  let activeLink;
  for (let link of links) {
    if (link.contains("active")) {
      link.remove("active");
    }
  }
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
