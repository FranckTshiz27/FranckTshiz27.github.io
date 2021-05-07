
let mainMenu;
let openMenu;
let closeMenu;
initComponents();
function initComponents()
{
    mainMenu = document.querySelector(".mainMenu");
    openMenu = document.querySelector(".openMenu");
    closeMenu = document.querySelector(".closeMenu");

}


openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show()
{
    
    mainMenu.style.display='flex';
    mainMenu.style.top='0';

}
 

function close()
{
    
    mainMenu.style.top='-100%';

} 

let hash = window.location.hash;
 let aLinkActualHash = document.querySelector('a[href="' + hash +'"]') ;
  if(aLinkActualHash !== null && !aLinkActualHash.parentNode.classList.contains("active"))
  { console.log("hash")
    showTabs(aLinkActualHash)
  }