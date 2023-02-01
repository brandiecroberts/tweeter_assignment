$(document).ready(function() {
  console.log("Hello World");

  $(".new-tweet").keypress(function() {
    const textLength = $(this).find("textarea").val().length;
    $(this)
      .find(".counter")
      .val(140 - textLength);
      
    if (textLength > 140) {
      $(this).find(".counter").css({ color: "red" });
    }
  });
});