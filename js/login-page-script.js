/*=== Created by Chaitanya on 17th June, 2022 ===*/

/*Requires JQuery*/

$('.fa-eye-slash').click(function(){
    console.log("click on the eye");
    $(this).toggleClass("fa-eye fa-eye-slash");
      var input = $("#loginPwd");
      if (input.attr("type") === "password") {
        input.attr("type", "text");
      } else {
        input.attr("type", "password");
      }
});