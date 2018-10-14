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

$('button').click(function() {
  if ($(this).siblings(".hidden").is(':hidden')) {

    $(this).siblings(".hidden").slideDown('slow','swing');
    $(this).text('Показати менше');

    if (window.innerWidth < 544) {
      // setTimeout(function ('this') {
        $(this).parent(".content-text").siblings(".wrap-image").slideUp('slow','swing');
      // }, 400);
    } else if (window.innerWidth > 767) {
      $(this).parent(".content-text").siblings(".wrap-image").addClass('hidden-content-open');

      if ($(this).hasClass('left-button')) {
        $(this).addClass('offset');
      }
    }

  } else {

    $(this).siblings(".hidden").slideUp('slow','swing');
    $(this).text('Дізнатись більше');

    if (window.innerWidth < 544) {
      // setTimeout(function () {
        $(this).parent(".content-text").siblings(".wrap-image").slideDown('slow','swing');
      // }, 400);
    } else if (window.innerWidth > 767) {
      $(this).parent(".content-text").siblings(".wrap-image").removeClass('hidden-content-open');

      if ($(this).hasClass('offset')) {
        $(this).removeClass('offset');
      }
    }     
  }
});
