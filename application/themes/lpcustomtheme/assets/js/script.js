'use strict';
$(function () {


  /*
  |--------------------------------------------------------------------------
  | Configure your website
  |--------------------------------------------------------------------------
  |
  | We provided several configuration variables for your ease of development.
  | Read their complete description and modify them based on your need.
  |
  */

  page.config({

    /*
    |--------------------------------------------------------------------------
    | Google API Key
    |--------------------------------------------------------------------------
    |
    | Here you may specify your Google API key if you need to use Google Maps
    | in your application
    |
    | https://developers.google.com/maps/documentation/javascript/get-api-key
    |
    */

    googleApiKey: 'AIzaSyDRBLFOTTh2NFM93HpUA4ZrA99yKnCAsto',

    /*
    |--------------------------------------------------------------------------
    | Google Analytics Tracking
    |--------------------------------------------------------------------------
    |
    | If you want to use Google Analytics, you can specify your Tracking ID in
    | this option. Your key would be a value like: UA-12345678-9
    |
    */

    googleAnalyticsId: '',

    /*
    |--------------------------------------------------------------------------
    | Google reCAPTCHA
    |--------------------------------------------------------------------------
    |
    | reCAPTCHA protects you against spam and other types of automated abuse.
    | Please signup for an API key pair and insert your `Site key` value to the
    | following variable.
    |
    | http://www.google.com/recaptcha/admin
    |
    */

    reCaptchaSiteKey: '6Ldaf0MUAAAAAHdsMv_7dND7BSTvdrE6VcQKpM-n',

    // See available languages: https://developers.google.com/recaptcha/docs/language
    reCaptchaLanguage: '',

    /*
    |--------------------------------------------------------------------------
    | Disable AOS on mobile
    |--------------------------------------------------------------------------
    |
    | If true, the Animate On Scroll animations don't run on mobile devices.
    |
    */

    disableAOSonMobile: true,

    /*
    |--------------------------------------------------------------------------
    | Smooth Scroll
    |--------------------------------------------------------------------------
    |
    | If true, the browser's scrollbar moves smoothly on scroll and gives your
    | visitor a better experience for scrolling.
    |
    */

    smoothScroll: false,

  });


  /*
  |--------------------------------------------------------------------------
  | Custom Javascript code
  |--------------------------------------------------------------------------
  |
  | Now that you configured your website, you can write additional Javascript
  | code below this comment. You might want to add more plugins and initialize
  | them in this file.
  |
  */

});

/* onClick smoothscroll to ID  */
window.smoothScroll = function (target) {
  let scrollContainer = target;
  do { //find scroll container
    scrollContainer = scrollContainer.parentNode;
    if (!scrollContainer) {
      return;
    }
    scrollContainer.scrollTop += 1;
  } while (scrollContainer.scrollTop === 0);

  let targetY = 0;
  do { //find the top of target relatively to the container
    if (target === scrollContainer) {
      break;
    }
    targetY += target.offsetTop;
  } while (target = target.offsetParent);

  scroll = function (c, a, b, i) {
    i++;
    if (i > 30) return;
    c.scrollTop = a + (b - a) / 30 * i;
    setTimeout(function () {
      scroll(c, a, b, i);
    }, 20);
  };
  // start scrolling
  scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
};
/* onClick smoothscroll to ID  */

$(document).ready(function () {
  let config = { attributes: true };
  $('#skz-offcanvas-menu').each(function () {
    let target = this;
    let observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        if ($('#' + target['id']).hasClass('show')) {
          $('body').addClass('overflow-hidden');
        } else {
          $('body').removeClass('overflow-hidden');
        }
      });
    });
    observer.observe(target, config);
  });

  const sections = $('section');
  $(window).on('scroll', function () {
    sections.each(function () {
      const {top, bottom} = this.getBoundingClientRect();
      // check if section is in view
      if (top >= 0 && bottom <= window.innerHeight) {
        // update URL with section id as hashtag without scrolling to top
        history.replaceState(null, null, `#${this.id}`);
      }
    });
  });

  $(window).on('scroll', function () {
    $('.fade-title').css('opacity', 1 - ($(window).scrollTop() / 350));
    $('.fade-title-2').css('opacity', $(window).scrollTop() / 650);
  });

  //Scroll back to top
  /*
  var progressPath = document.querySelector('.progress-wrap path');
  var pathLength = progressPath.getTotalLength();
  progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
  progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
  progressPath.style.strokeDashoffset = pathLength;
  progressPath.getBoundingClientRect();
  progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
  var updateProgress = function () {
      var scroll = $(window).scrollTop();
      var height = $(document).height() - $(window).height();
      var progress = pathLength - (scroll * pathLength / height);
      progressPath.style.strokeDashoffset = progress;
  }
  updateProgress();
  $(window).scroll(updateProgress);

  var offset = 50;
  $(window).on('scroll', function() {
      if ($(this).scrollTop() > offset) {
          $('.progress-wrap').addClass('active-progress');
      } else {
          $('.progress-wrap').removeClass('active-progress');
      }
  });

  var duration = 550;
  $('.progress-wrap').on('click', function(event) {
      event.preventDefault();
      $('html, body').animate({scrollTop: 0}, duration);
      return false;
  });
  */

  /* LOAD MORE FUNKTION - PROJEKTE  */
  $('.content-projekte').slice(0, 6).show();
  $('#loadMore').on('click', function (e) {
    e.preventDefault();

    let contentProjekte = $('.content-projekte:hidden');
    contentProjekte.slice(0, 4).slideDown();
    if (contentProjekte.length === 0) {
      $('#loadMore').text('starten sie das nächste projekt').addClass('noContent');
    }
  });
  /* LOAD MORE FUNKTION - PROJEKTE  */

  /* HORIZONTAL SCROLL */
  horizontalScroll('.side-scroll-list-wrapper', '.side-scroll-list', '.side-scroll', '.card-c', '.trigger');
  horizontalScroll('.side-scroll-list-wrapper-1', '.side-scroll-list-1', '.side-scroll-1', '.card-c-1', '.trigger-1');
  horizontalScroll('.side-scroll-list-wrapper-2', '.side-scroll-list-2', '.side-scroll-2', '.card-c2', '.trigger2');
  horizontalScroll('.side-scroll-list-wrapper-3', '.side-scroll-list-3', '.side-scroll-3', '.card-c3', '.trigger3');
  horizontalScroll('.side-scroll-list-wrapper-4', '.side-scroll-list-4', '.side-scroll-4', '.card-c4', '.trigger4');
  horizontalScroll('.side-scroll-list-wrapper-5', '.side-scroll-list-5', '.side-scroll-5', '.card-c5', '.trigger5');
  horizontalScroll('.side-scroll-list-wrapper-6', '.side-scroll-list-6', '.side-scroll-6', '.card-c6', '.trigger6');
  horizontalScroll('.side-scroll-list-wrapper-7', '.side-scroll-list-7', '.side-scroll-7', '.card-c7', '.trigger7');
  horizontalScroll('.side-scroll-list-wrapper-8', '.side-scroll-list-8', '.side-scroll-8', '.card-c8', '.trigger8');
  horizontalScroll('.side-scroll-list-wrapper-9', '.side-scroll-list-9', '.side-scroll-9', '.card-c9', '.trigger9');
  horizontalScroll('.side-scroll-list-wrapper-10', '.side-scroll-list-10', '.side-scroll-10', '.card-c10', '.trigger10');
  /* HORIZONTAL SCROLL */

  /* SKZ ANIMATED ROWS & ARROWS */
  rowAnimation('.skz-row-trigger', '.skz-animated-row');
  rowAnimation('.skz-row-trigger-1', '.skz-animated-row-1');
  rowAnimation('.skz-row-trigger-2', '.skz-animated-row-2');
  rowAnimation('.skz-row-trigger-3', '.skz-animated-row-3');
  rowAnimation('.skz-row-trigger-4', '.skz-animated-row-4');
  rowAnimation('.skz-row-trigger-5', '.skz-animated-row-5');
  /* SKZ ANIMATED ROWS & ARROWS */

  $('#bw').each(function () {
    gsap.config({ trialWarn: false });
    gsap.registerPlugin(ScrollTrigger);
    gsap.to("#bw", {
      "--target": "0%",
      ease: "none",
      scrollTrigger: {
        trigger: "#bw",
        start: "top top",
        end: "+=1000",
        pin: true,
        scrub: 0
      }
    });
  });

  /* SKZ ANIMATED HEADER TITLE */
  $('#pinned').each(function () {
    const animatedTitle = document.querySelector('.skz-animated-title');
    const animatedTitle2 = document.querySelector('.skz-animated-title-2');
    const animatedTitle3 = document.querySelector('.skz-animated-title-3');
    const animatedTitle4 = document.querySelector('.skz-animated-title-4');

    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#pinned',
        start: 'top',
        end: 'bottom -200%',
        pin: true,
        pinSpacing: false,
        scrub: 0,
        invalidateOnRefresh: true,
      },
      ease: 'none'
    });
    if (animatedTitle) {
      tl.fromTo(
          '.skz-animated-title',
          {
            y: 0,
            opacity: 1,
            ease: 'none'
          },
          {
            y: -200,
            opacity: 0,
            ease: 'none'
          }
      );
    }
    if (animatedTitle2) {
      tl.fromTo(
          '.skz-animated-title-2',
          {
            y: 200,
            opacity: 0,
            ease: 'none'
          },
          {
            y: 0,
            opacity: 1,
            ease: 'none'
          }
      );
      tl.to('.skz-animated-title-2', {
        y: -200,
        opacity: 0,
        ease: 'none'
      });
    }
    if (animatedTitle3) {
      tl.fromTo(
          '.skz-animated-title-3',
          {
            y: 200,
            opacity: 0,
            ease: 'none'
          },
          {
            y: 0,
            opacity: 1,
            ease: 'none'
          }
      );
      tl.to('.skz-animated-title-3', {
        y: -200,
        opacity: 0,
        ease: 'none'
      });
    }
    if (animatedTitle4) {
      tl.fromTo(
          '.skz-animated-title-4',
          {
            y: 200,
            opacity: 0,
            ease: 'none'
          },
          {
            y: 0,
            opacity: 1,
            ease: 'none'
          }
      );
      tl.to('.skz-animated-title-4', {
        y: -200,
        opacity: 0,
        ease: 'none'
      });
    }
  });
  /* SKZ ANIMATED HEADER TITLE */

  $("#hover-button").on('hover', function () {
    $("#titeldiv").addClass("active");
  }, function () {
    $("#titeldiv").removeClass("active");
  });

  /* Horizontal scroll on horizontal scroll */
  /*
  let startX;
  let endX;

  console.log('touch');

  document.addEventListener("touchstart", function(event) {
      console.log('touchstart');

      startX = event.touches[0].clientX;
  });

  document.addEventListener("touchmove", function(event) {
      //console.log('touchmove');

      //endX = event.changedTouches[0].clientX;

      if (startX > endX || endX > startX) {
          //window.scrollBy(0, endX - startX);
      }
  });

  document.addEventListener("touchend", function(event) {
      console.log('touchend');

      endX = event.changedTouches[0].clientX;

      if (startX > endX || endX > startX) {
          window.scrollBy(0, endX - startX);
      }
  });

  const hScrollDivs = $('.side-scroll-list-wrapper');
  hScrollDivs.each(function () {
      this.addEventListener("wheel", function(event) {
          console.log('wheel');
          if (event.deltaX < 0 || event.deltaX > 0) {
              window.scrollBy(0, event.deltaX);
          }
      });
  });
  */
});

function rowAnimation(rowTriggerSelector, animatedRowSelector) {
  $(rowTriggerSelector).waypoint(function () {
    let skz_row = $(animatedRowSelector);
    if (skz_row.hasClass('hover')) {
      skz_row.removeClass('hover');
    } else {
      skz_row.addClass('hover');
    }
  }, {offset: '75%'});
}

function horizontalScroll(listWrapperElSelector, listElSelector, sideScrollSelector, cardCSelector, triggerSelector) {
  const listWrapperEl = document.querySelector(listWrapperElSelector);
  const listEl = document.querySelector(listElSelector);
  if (listEl && listWrapperEl) {
    gsap.to(listEl, {
      // gsap.to - specify how you want to change the status of the element
      // with this example, I want to scroll the list horizontally till it reaches the end
      // so we are change the value of x, and to work out how much it needs to move,
      // get the difference of the widths of the list and the wrapper (the overflown bit)
      x: () => -(listEl.clientWidth - listWrapperEl.clientWidth),
      ease: 'none',
      // setting scroll trigger parameters
      scrollTrigger: {
        trigger: sideScrollSelector,
        start: 'top top',
        end: () => `+=${listEl.clientWidth - listWrapperEl.clientWidth}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        //markers: true, // adds markers to the start & the end of animation
      },
    });

    gsap.from(cardCSelector, {
      scrollTrigger: {
        trigger: triggerSelector,
        start: 'center bottom',
        end: 'center top',
        markers: false,
      },
      duration: 1.2,
      y: 15, // move up slightly
      opacity: 0,
      ease: 'power2.out',
      // properties for handling multiple elements
      stagger: {
        from: 'start', // L to R [ 'start' / 'center' / 'end' / 'random' or index]
        each: 0.1, //
        //amount: 0.8, //every 0.8 sec use either each or amount
      }
    });
  }
}

/* HORIZONTAL SCROLL V2 */
function toggleArrows(box, maxScrollWidth, nextArrow, prevArrow) {
  if (box.scrollLeft > maxScrollWidth - 50) {
    // disable next button when right end has reached
    prevArrow.classList.add('disabled');
  } else if (box.scrollLeft < 20) {
    // disable prev button when left end has reached
    nextArrow.classList.add('disabled');
  } else {
    // both are enabled
    nextArrow.classList.remove('disabled');
    prevArrow.classList.remove('disabled');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const wrappers = document.querySelectorAll('.hs__wrapper');
  wrappers.forEach(wrapper => {
    const arrows = wrapper.querySelectorAll('.arrow');
    const prevArrow = wrapper.querySelector('.arrow-prev');
    const nextArrow = wrapper.querySelector('.arrow-next');
    const box = wrapper.querySelector('.hs');
    const maxScrollWidth =
        box.scrollWidth - (box.clientWidth / 2) - (box.offsetWidth / 2);

    arrows.forEach(arrow => {
      arrow.addEventListener('click', function () {
        if (this.classList.contains('arrow-next')) {
          const x = ((box.offsetWidth / 4)) + box.scrollLeft - 10;
          box.scrollTo({
            left: x,
            behavior: 'smooth'
          });
        } else {
          const x = ((box.offsetWidth / 4)) - box.scrollLeft - 10;
          box.scrollTo({
            left: -x,
            behavior: 'smooth'
          });
        }
      });
    });

    box.addEventListener('scroll', function () {
      toggleArrows(box, maxScrollWidth, prevArrow, nextArrow);
    });
  });
});

function scrollToSlide(id) {
  const slide = document.getElementById(id);
  slide.scrollIntoView({
    behavior: 'smooth',
    block: 'nearest',
    inline: 'start'
  });
}
/* HORIZONTAL SCROLL V2 */