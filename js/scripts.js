function colourChange(myColour, id) {
  $("#colour").fadeTo(750, 0);
  if ($("#" + id).prop("checked")) {
    $('input[type="checkbox"]').prop("checked", false);
    setTimeout(function() {
      $("#colour").css("background-color", myColour);
      $('div .button').css("background-color", myColour);
      $('div .button').css("color", "#000");
      $("#" + id).prop("checked", true);
      $('input:checked').parent().parent().css("background-color", "#FFF");
      $('input:checked').parent().parent().css("color", myColour);
      $("#colour").fadeTo(800, 1);
    }, 1000);

    setTimeout(function() {
      $(document.body).css("background-color", myColour);
    }, 1800);
  } else {
    $('input[type="checkbox"]').prop("checked", false);
    setTimeout(function() {
      $('div .button').css("background-color", "#FFF");
      $('div .button').css("color", "#000");
      $("#colour").css("background-color", "#FFF");
      $("#colour").fadeTo(800, 1);
    }, 1000);
    setTimeout(function() {
      $(document.body).css("background-color", "#FFF");
    }, 1800);
  }
}

var navigate = (function() {
  $('.dd').toggle();
  $('.dd_btn').click(function() {
    var dataName = $(this).attr('data-name');
    $('.dd').hide();
    $('.' + dataName).toggle();
  });
})();
