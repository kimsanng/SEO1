//��硫붾돱 泥섎━
$("#header .etc-box .open_btn").on("click", function () {
  $("#header").toggleClass("open");
  $(this).toggleClass("open");
  $("#fullMenu").toggleClass("open");

  if ($("#fullMenu").hasClass("open") == true) {
    $("#fullMenu").fadeIn();
  } else {
    $("#fullMenu").fadeOut();
  }
});

if ($(window).width() < 767) {
  $("#fullMenu .snb .snb-item .depth01").on("click", function () {
    $(".depth02").stop().slideUp();

    $(this).siblings(".depth02").stop().slideToggle();
  });
}
