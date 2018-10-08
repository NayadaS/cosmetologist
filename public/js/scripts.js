// Function to open the menu.

document.getElementById("open").onclick=function openMenu() {
  document.getElementById("menu").classList.add("open");
  document.getElementById("body").classList.add("menu-open");
}

// Function to close the menu.

document.getElementById("close").onclick=function closeMenu() {
  document.getElementById("menu").classList.remove("open");
  document.getElementById("body").classList.remove("menu-open");
}

// Function to restore the scroll when the screen size changes with the menu open

window.onresize = function () {
  if (window.innerWidth > 767) {
    if (document.getElementById("body").classList.contains("menu-open")) {
      document.getElementById("menu").classList.remove("open");
      document.getElementById("body").classList.remove("menu-open");
    }
  }
}



function showText(el) {
  if (el.previousElementSibling.clientHeight === 0) {
    
    // el.parentNode.parentNode.parentNode.style.zIndex = 100;
    // el.previousElementSibling.style.height = '100%';
    el.previousElementSibling.classList.add("open-hidden-block");
    el.innerHTML = 'Показати меньше';
  } else {
    // el.previousElementSibling.style.height = '0';
    el.previousElementSibling.classList.remove("open-hidden-block");
    el.innerHTML = 'Дізнатись більше';
  }
}