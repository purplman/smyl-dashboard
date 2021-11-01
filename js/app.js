$(() => {
  $("#sidebar").load("components/sidebar.html");
  $("#header").load("components/header.html");
  $("#footer").load("components/footer.html");

  $(document).on("keyup", (e) => {
    $(".sidebar").toggleClass("sidebar--collapsed");
  });

  $(document).on("click", ".sidebar__link", function (e) {
    e.preventDefault();
    $(".sidebar").removeClass("sidebar--collapsed");
    $(".sidebar__link").not(this).removeClass("sidebar__link--active");
    $(this).toggleClass("sidebar__link--active");
    $(".sidebar__dropdown")
      .not($(this).siblings(".sidebar__dropdown"))
      .slideUp();
    $(this).siblings(".sidebar__dropdown").slideToggle();
  });

  $(document).on("click", ".sidebar__toggle", function (e) {
    e.preventDefault();
    $(this).toggleClass("sidebar__toggle--active");
    $(".sidebar").toggleClass("sidebar--collapsed");
  });
});
