$(function() {
  $(".createBurger").on("submit", function(event) {
    event.preventDefault();

    var newBurger = {
      burger_name: $("#burgerText")
        .val()
        .trim()
    };

    $("#burgerText").text("");

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function() {
      location.reload();
    });
  });

  $(".devourBurger").on("click", function(event) {
    event.preventDefault();
    var id = $(this).data("id");
    var newDevoured = $(this).data("newdevoured");
    console.log(newDevoured);
    var devouredState = { devoured: "true" };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devouredState
    }).then(function() {
      console.log("Burger devoured", newDevoured);
      location.reload();
    });
  });

  // $.ajax("/api/burgers", {
  //   type: "GET"
  // }).then(function(res) {
  //   console.log(res);
  // });
});
