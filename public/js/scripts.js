
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
  
  $el.find("button").css("display", "none");
  $el.find(".visible-block").addClass("visible-block-open");
  $el.find(".more-info").addClass("block-open").css("overflow", "initial");

  if (window.innerWidth < 544) {
    $el.find(".wrap-image").slideUp('slow','swing');
  } else {
    $el.find(".wrap-image").addClass('hidden-content-open');
    setTimeout(function () {
      if ($el.find("button").hasClass('left-button')) {
        $el.find("button").addClass('offset');
      }
    }, 600);  
  }

  setTimeout(function () {
    $el.find("button").text('Показати менше').css("display", "block");
  }, 1000);
}

function elClose($el) {
  $el.find("button").css("display", "none");

  if (window.innerWidth < 544) {
      $el.find(".wrap-image").slideDown('slow','swing');
  } else {
    $el.find(".wrap-image").removeClass('hidden-content-open');

    if ($el.find("button").hasClass('offset')) {
      $el.find("button").removeClass('offset');
    }
  }

  $el.find(".more-info").removeClass("block-open");
  setTimeout(function () {
    $el.find(".more-info").css("overflow", "hidden");
  }, 450);
  $el.find(".visible-block").removeClass("visible-block-open");
  setTimeout(function () {
    $el.find("button").text('Дізнатись більше').css("display", "block");
  }, 500);
}

$('button').click(function() {

  var $el = $(this).parents(".content");
  var $topMargin;

  if (window.innerWidth < 1024) {
    $topMargin = 40;
  } else {
    $topMargin = 60;
  }
  if ($el.find(".more-info").hasClass("block-open")) {
    $('html, body').animate({ scrollTop: $el.find(".visible-block").offset().top - $topMargin }, 550);
    elClose($el);
  } else {
    var $openEl = $el.siblings(".content").find(".more-info.block-open");

    if ($el.siblings(".content").find(".more-info").hasClass("block-open")) {
      $('html, body').animate({ scrollTop: $el.find(".visible-block").offset().top - $topMargin }, 550);
      elClose($openEl.parents(".content"));
      setTimeout(function () {
        $('html, body').animate({ scrollTop: $el.find(".visible-block").offset().top - $topMargin }, 550);
        elOpen($el);
      }, 500);
    } else {
      $('html, body').animate({ scrollTop: $el.find(".visible-block").offset().top - $topMargin }, 550);
      elOpen($el);
    }
  }
});

// ----- scroll to top -----

$(document).ready(function(){
  $('body').append('<a href="#" class="btn-up" title="Вгору"></a>');
});

$(function() {
 $.fn.scrollToTop = function() {
  $(this).hide().removeAttr("href");
  if ($(window).scrollTop() >= "250") $(this).fadeIn("slow")
  var scrollDiv = $(this);
  $(window).scroll(function() {
   if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow")
   else $(scrollDiv).fadeIn("slow")
  });
  $(this).click(function() {
   $("html, body").animate({scrollTop: 0}, "slow")
  })
 }
});

$(function() {
 $(".btn-up").scrollToTop();
});
