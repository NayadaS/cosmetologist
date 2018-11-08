
// ----- Header navigation -----

var $body = $('body');
var $headerMenuMobileButton = $('.hamburgerBtn');
var $headerMenu = $('.menu');

$(window).on('load resize', function () {

    if ($headerMenuMobileButton.hasClass('is-active') && $body.hasClass('menu-open')) {
        $headerMenuMobileButton.removeClass('is-active');
        $body.removeClass('menu-open');
        $headerMenu.removeClass('open');
    }
});

$headerMenuMobileButton.on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('is-active');
    $body.toggleClass('menu-open');
    $headerMenu.toggleClass('open');
});



// ----- More-info blocks open or close -----


function elOpen($el) {
  
  $el.find('button').css('display', 'none');
  $el.find('.visible-block').addClass('visibleBlockOpen');
  $el.find('.more-info').addClass('blockOpen').css('overflow', 'visible');

  if (window.innerWidth < 544) {
    $el.find('.wrap-image').slideUp('slow','swing');
  } else {
    $el.find('.wrap-image').addClass('hiddenContentOpen');
    setTimeout(function () {
      if ($el.find('button').hasClass('left-button')) {
        $el.find('button').addClass('offset');
      }
    }, 450);  
  }

  setTimeout(function () {
    $el.find('button').text('Показати менше').css('display', 'block');
  }, 500);
}

function elClose($el) {
  $el.find('button').css('display', 'none');

  if (window.innerWidth < 544) {
      $el.find('.wrap-image').slideDown('slow','swing');
  } else {
    $el.find('.wrap-image').removeClass('hiddenContentOpen');

    if ($el.find('button').hasClass('offset')) {
      $el.find('button').removeClass('offset');
    }
  }

  $el.find('.more-info').removeClass('blockOpen');
  setTimeout(function () {
    $el.find('.more-info').css('overflow', 'hidden');
  }, 450);
  $el.find('.visible-block').removeClass('visibleBlockOpen');
  setTimeout(function () {
    $el.find('button').text('Дізнатись більше').css('display', 'block');
  }, 500);
}

$('button').click(function() {

  var $el = $(this).parents('.content');
  var $topMargin;

  if (window.innerWidth < 1024) {
    $topMargin = 40;
  } else {
    $topMargin = 60;
  }
  if ($el.find('.more-info').hasClass('blockOpen')) { // If the active item is already open, we close it.
    $('html, body').animate({ scrollTop: $el.find('.visible-block').offset().top - $topMargin }, 500, 'linear');
    elClose($el);
  } else { // 
    var $openEl = $el.siblings('.content').find('.more-info.blockOpen'); // If the active element is closed,
     // then we check whether there are neighboring elements with an open block ".more-info"

    if ($el.siblings('.content').find('.more-info').hasClass('blockOpen')) {
      $('html, body').animate({ scrollTop: $el.find('.visible-block').offset().top - $topMargin }, 500, 'linear');
      elClose($openEl.parents('.content')); //If in another element the “.more-info” block is open, then we close it.
      setTimeout(function () {
        $('html, body').animate({ scrollTop: $el.find('.visible-block').offset().top - $topMargin }, 500, 'linear');
        elOpen($el); //  And after it is closed, we open the active element.
      }, 510);
    } else {
      $('html, body').animate({ scrollTop: $el.find('.visible-block').offset().top - $topMargin }, 500, 'linear');
      elOpen($el); // if the other elements are all closed, then we immediately open the active element
    }
  }
});

// ----- Scroll to top -----

$(document).ready(function(){
  $('body').append('<a href="#" class="btn-up" title="Вгору"></a>');
});

$(function() {
 $.fn.scrollToTop = function() {
  $(this).hide().removeAttr('href');
  if ($(window).scrollTop() >= '250') $(this).fadeIn('slow')
  var scrollDiv = $(this);
  $(window).scroll(function() {
   if ($(window).scrollTop() <= '250') $(scrollDiv).fadeOut('slow')
   else $(scrollDiv).fadeIn('slow')
  });
  $(this).click(function() {
   $('html, body').animate({scrollTop: 0}, 'slow')
  })
 }
});

$(function() {
 $('.btn-up').scrollToTop();
});