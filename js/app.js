$(() => {
  $("#sidebar").load("components/sidebar.html");
  $("#header").load("components/header.html");
  $("#footer").load("components/footer.html");

  $(document).on("keyup", (e) => {
    $(".sidebar").toggleClass("sidebar--collapsed");
  });
});
