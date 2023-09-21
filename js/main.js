const hp_logo_category = document.querySelector(".hp_logo_category");
const navHeight = 70;
// the point the scroll starts from (in px)
let lastScrollY = 0;
// how far to scroll (in px) before triggering
const delta = 10;

// function to run on scrolling
function scrolled() {
  let sy = window.scrollY;
  // only trigger if scrolled more than delta
  if (Math.abs(lastScrollY - sy) > delta) {
    // scroll down -> hide nav bar
    if (sy > lastScrollY && sy > navHeight) {
        hp_logo_category.classList.add("scroll-up");
    } 
    // scroll up -> show nav bar
    else if (sy < lastScrollY) {
        hp_logo_category.classList.remove("scroll-up");
    }
   // update current scroll point
   lastScrollY = sy 
  }
}

// Add event listener & debounce so not constantly checking for scroll
let didScroll = false;
window.addEventListener("scroll", function(e){
  didScroll = true;
});

setInterval(function() {
  if (didScroll) {
    scrolled();
    didScroll = false;
   }
}, 250)




//Product dropdown

/****drop_menu_bar for medium device  */
$(".nav_toggle").on("click", function () {
  $('.bar_1').toggleClass('active');
  $('.bar_2').toggleClass('active_2');
  $('.bar_3').toggleClass('active_3');
  $('.hp_nav').toggleClass('nav_show')
});


/**********clickbale menubar******/
$('.hp-list_item').on('click', function () {
  $(this).find('.drop_down').toggleClass('show');
  $(this).siblings().find('.drop_down.show').removeClass('show');

  $(this).find('.drop_down').addClass('min_show');
  $(this).siblings().find('.drop_down.min_show').removeClass('.min_show');
});


/*****close clickbale menu_bar on outside */
$(document).on('click', function (event) {
  if ($(event.target).closest('.hp_nav').length == 0) {
      $(this).find('.nav_item .list_item .drop_down.show').removeClass('show');
  }
});
