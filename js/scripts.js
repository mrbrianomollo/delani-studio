//business interface logic

$(document).ready(function () {
  $("#design").hide();
  $("#development").hide();
  $("#product-management").hide();
  //design
  $("#design-image").click(function () {
    $("#design-image").show().hide();
    $("#design").show();
  });
  $("#design").click(function () {
    $("#design").show().hide();
    $("#design-image").show();
  });
  //development
  $("#development-image").click(function () {
    $("#development-image").show().hide();
    $("#development").show();
  });
  $("#development").click(function () {
    $("#development").show().hide();
    $("#development-image").show();
  });
  //product-management
  $("#product-management-image").click(function () {
    $("#product-management-image").show().hide();
    $("#product-management").show();
  });
  $("#product-management").click(function () {
    $("#product-management").show().hide();
    $("#product-management-image").show();
  });
});

//user interface logic
$(document).ready(function () {
  $("form#contact_us").submit(function (event) {
    //event.preventDefault();
    var name = $("input#MERGE1").val();
    var email = $("input#MERGE0").val();
    var message = $("textarea#comment").val();
    if ($("input#MERGE1").val() && $("input#MERGE0").val()) {
      alert(
        name +
          ", we have received your message. Thank you for reaching out to us."
      );
    } else {
      alert("Please ensure you have filled both name and email address!");
    }
  });
});
