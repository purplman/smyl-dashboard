$(() => {
  $("#sidebar").load("components/sidebar.html");
  $("#header").load("components/header.html");
  $("#footer").load("components/footer.html");

  $(document).on("click", ".sidebar__link", function (e) {
    e.preventDefault();
    $(".sidebar__link").not(this).removeClass("sidebar__link--active");
    $(this).toggleClass("sidebar__link--active");
    $(".sidebar__dropdown")
      .not($(this).siblings(".sidebar__dropdown"))
      .slideUp();
    $(this).siblings(".sidebar__dropdown").slideToggle();
  });

  // Hide any dropdowns when leaveing sidebar

  $(document).on("mouseleave", ".sidebar", () => {
    $(".sidebar__dropdown").hide();
  });

  // Entering sidebar show active dropdown

  $(document).on("mouseenter", ".sidebar", () => {
    $(".sidebar__link--active").siblings(".sidebar__dropdown").show();
  });

  $(".dropdown__toggle").on("click", function (e) {
    let $dropdown = $(this).parent();
    let $menu = $(this).siblings(".dropdown__menu");

    // Remove active indicators from other dropdowns
    $(".dropdown").not($dropdown).removeClass("dropdown--active");
    $(".dropdown__menu").not($menu).removeClass("dropdown__menu--active");

    // Toggle dropdown state
    $dropdown.toggleClass("dropdown--active");
    $menu.toggleClass("dropdown__menu--active");
    e.preventDefault();
  });

  $(document).on("click", (e) => {
    var $dropdown = $(".dropdown");
    if (!$dropdown.is(e.target) && !$dropdown.has(e.target).length) {
      $(".dropdown__menu").removeClass("dropdown__menu--active");
      $(".dropdown").removeClass("dropdown--active");
    }
  });
});
