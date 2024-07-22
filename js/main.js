//메인비주얼 타이핑 효과
$("#titEffect").typed({
  strings: ["기업^500", "식당^500", "카페^500", "펜션^500", "병원^500"],
  startDelay: 1400,
  typeSpeed: 120,
  backSpeed: 60,
  loop: true,
  smartBackspace: false,
});

$("#titEffect2").typed({
  strings: ["#브랜딩 #순위상승 #매출 #NO어뷰징"],
  startDelay: 200,
  typeSpeed: 60,
  backSpeed: 80,
  loop: false,
  smartBackspace: false,
});

//서비스소개 슬라이더
var serviceThumb = new Swiper("#sec02 .serviceThumb", {
  loop: true,
  slidesPerView: 1,
  watchSlidesProgress: true,
  touchRatio: 0,
});
var serviceContent = new Swiper("#sec02 .serviceContent", {
  loop: true,
  spaceBetween: 10,
  thumbs: {
    swiper: serviceThumb,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    240: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    767: {
      slidesPerView: 1.2,
      spaceBetween: 10,
    },
    // when window width is >= 1100px
    1100: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
});

//리뷰섹션 슬라이더
var reviewSlider = new Swiper("#sec03 .reviewSlider", {
  loop: true,
  effect: "fade",
  autoplay: {
    delay: 300,
    disableOnInteraction: false,
  },
});

//문의폼 호버, 포커스 효과

$("#contact__form fieldset > ul > li > input").focus(function () {
  $(this).parent("li").stop().addClass("active");
});

$("#contact__form fieldset > ul > li > input").blur(function () {
  $("#contact__form fieldset > ul > li").stop().removeClass("active");
});

if ($(window).width() < 1100) {
  $("#sec04 .recommend-box").addClass("swiper recommendSlider");
  $("#sec04 .recommend-list").addClass("swiper-wrapper");
  $("#sec04 .recommend_item").addClass("swiper-slide");

  var recommendSlider = new Swiper("#sec04 .recommendSlider", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 1.5,
    thumbs: {
      swiper: serviceThumb,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      320: {
        slidesPerView: 1.2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 1.5,
        spaceBetween: 10,
      },
    },
  });

  $("#sec05 .left-box .step-box").hide();

  $(window).scroll(function () {
    var scrollTop = $(this).scrollTop();

    if (scrollTop > $("#contact__form .funnels-box").offset().top - 200) {
      $("#sec05 .left-box .step-box ul li").eq(0).addClass("done");

      $("#sec05 .left-box .step-box ul li").eq(1).addClass("active");
    } else {
      $("#sec05 .left-box .step-box ul li").eq(0).removeClass("done");

      $("#sec05 .left-box .step-box ul li").eq(1).removeClass("active");
    }

    if (scrollTop > $("#contact__form .contact-item-box").offset().top - 150) {
      $("#sec05 .left-box .step-box ul li").eq(1).addClass("done");

      $("#sec05 .left-box .step-box ul li").eq(2).addClass("active");
    } else {
      $("#sec05 .left-box .step-box ul li").eq(1).removeClass("done");

      $("#sec05 .left-box .step-box ul li").eq(2).removeClass("active");
    }

    if (
      scrollTop >
      $("#contact__form .contact-content-box").offset().top - 250
    ) {
      $("#sec05 .left-box .step-box ul li").eq(2).addClass("done");

      $("#sec05 .left-box .step-box ul li").eq(3).addClass("active");
    } else {
      $("#sec05 .left-box .step-box ul li").eq(2).removeClass("done");

      $("#sec05 .left-box .step-box ul li").eq(3).removeClass("active");
    }

    if (scrollTop > $("#contact__form .btn_submit").offset().top - 400) {
      $("#sec05 .left-box .step-box ul li").eq(3).addClass("done");
    } else {
      $("#sec05 .left-box .step-box ul li").eq(3).removeClass("done");
    }

    if (scrollTop > $("#contact__form").offset().top - 200) {
      $("#sec05 .left-box .step-box").stop().fadeIn(300);

      if (scrollTop > $("#footer").offset().top - 600) {
        $("#sec05 .left-box .step-box").stop().fadeOut(300);
      } else {
        $("#sec05 .left-box .step-box").stop().fadeIn(300);
      }
    } else {
      $("#sec05 .left-box .step-box").stop().fadeOut(300);
    }
  });
} else {
  //문의 폼
  $(window).scroll(function () {
    var scrollTop = $(this).scrollTop();

    if (scrollTop > $("#contact__form").offset().top - 350) {
      $("#sec05 .left-box .step-box ul li").eq(0).addClass("active");
    } else {
      $("#sec05 .left-box .step-box ul li").removeClass("active");
    }

    if (scrollTop > $("#contact__form .funnels-box").offset().top - 300) {
      $("#sec05 .left-box .step-box ul li").eq(0).addClass("done");

      $("#sec05 .left-box .step-box ul li").eq(1).addClass("active");
    } else {
      $("#sec05 .left-box .step-box ul li").eq(0).removeClass("done");

      $("#sec05 .left-box .step-box ul li").eq(1).removeClass("active");
    }

    if (scrollTop > $("#contact__form .contact-item-box").offset().top - 450) {
      $("#sec05 .left-box .step-box ul li").eq(1).addClass("done");

      $("#sec05 .left-box .step-box ul li").eq(2).addClass("active");
    } else {
      $("#sec05 .left-box .step-box ul li").eq(1).removeClass("done");

      $("#sec05 .left-box .step-box ul li").eq(2).removeClass("active");
    }

    if (
      scrollTop >
      $("#contact__form .contact-content-box").offset().top - 350
    ) {
      $("#sec05 .left-box .step-box ul li").eq(2).addClass("done");

      $("#sec05 .left-box .step-box ul li").eq(3).addClass("active");
    } else {
      $("#sec05 .left-box .step-box ul li").eq(2).removeClass("done");

      $("#sec05 .left-box .step-box ul li").eq(3).removeClass("active");
    }

    if (scrollTop > $("#contact__form .btn_submit").offset().top - 650) {
      $("#sec05 .left-box .step-box ul li").eq(3).addClass("done");
    } else {
      $("#sec05 .left-box .step-box ul li").eq(3).removeClass("done");
    }
  });
}

//메인 퀵메뉴
$(".fix-btn").hide();

$(window).scroll(function () {
  var scrollTop = $(this).scrollTop();

  if (scrollTop > $("#sec02").offset().top - 500) {
    $(".fix-btn").stop().fadeIn();
  } else {
    $(".fix-btn").stop().fadeOut();
  }

  if (scrollTop > $("#sec05").offset().top - 600) {
    $(".fix-btn li.btn_contact").addClass("hide");
  } else {
    $(".fix-btn li.btn_contact").removeClass("hide");
  }

  if (scrollTop > $("#footer").offset().top - 1000) {
    $(".fix-btn").stop().fadeOut();
  }
});

$(".fix-btn li.btn_top").on("click", function (e) {
  e.preventDefault();
  var top00 = $("body").offset().top;

  $("html, body").animate({ scrollTop: top00 }, 800);
});
