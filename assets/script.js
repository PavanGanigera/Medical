// // ===== REVIEW SWITCHER =====
// const users = document.querySelectorAll(".user");
// const reviews = document.querySelectorAll(".review-text");

// users.forEach(user => {
//     user.addEventListener("click", () => {
//         // remove active
//         users.forEach(u => u.classList.remove("active"));
//         reviews.forEach(r => r.classList.remove("active"));

//         // add active
//         user.classList.add("active");
//         document
//             .getElementById("review-" + user.dataset.review)
//             .classList.add("active");
//     });
// });

// // FAQ Toggle
// document.querySelectorAll(".faq-item").forEach(item => {
//     item.addEventListener("click", () => {
//         item.classList.toggle("active");
//     });
// });


// jQuery(document).ready(function () {
//     jQuery('.to-top>div>div>a').prop("href", "javascript:void(0)");
//     jQuery(".to-top").hide();
//     jQuery(window).scroll(function () {
//         if (jQuery(document).scrollTop() > jQuery('header').height()) {
//             jQuery(".header").addClass("sticky");
//             jQuery(".to-top").show();
//         } else {
//             jQuery(".header").removeClass("sticky");
//             jQuery(".to-top").hide();
//         }
//     });
//     jQuery(".to-top").click(function () {
//         jQuery("html, body").animate(
//             {
//                 scrollTop: 0,
//             },
//             400
//         );
//         return false;
//     });
//     jQuery(".hfe-nav-menu-icon").click(function () {
//         jQuery("html").toggleClass("no-scroll");
//     });

//     // setInterval(function () {
//     //     if (jQuery(window).width() < 1024) {
//     //         jQuery('.sub-menu.sub-menu-open').css('transform', 'translateX(' + jQuery(window).width() + 'px)');
//     //         jQuery('.sub-menu.sub-menu-open').css('background-color', 'transparent');
//     //         jQuery('.sub-menu.sub-menu-open').each(function () {
//     //             this.style.setProperty('left', 'auto', 'important');
//     //         });
//     //     }
//     // }, 100);
//     // jQuery('.hfe-nav-menu-icon').click(function () {
//     //     jQuery('html, body').toggleClass('no-scroll');
//     // });
// });

$(document).ready(function () {
  $('.blog-carousel').owlCarousel({
    loop: true,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots: true,
    nav: false,

    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 1
      },
      768: {
        items: 2
      },
      992: {
        items: 3
      },
      1200: {
        items: 4
      }
    }
  });
});


