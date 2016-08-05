
$(document).ready(function(){
  console.log("DOM załadowany");

/*Sticky Menu*/
var $nav = $("nav");
var $menu = $("#large_menu");
var menuTop = $menu.position().top;

$(window).on("scroll", function(){
  var px = $(document).scrollTop();
  if (px >= menuTop){
    $menu.addClass("sticky");
  } else {
    $menu.removeClass("sticky");
  }
});

$(window).on("resize", function(){
  if($menu.hasClass("sticky")){
  menuTop=$nav.position().top;
  } else {
  menuTop = $menu.position().top;
  }
});

/*Sticky menu - Small menu*/
  var $smallMenu = $("#small_menu");
  var $dropDown = $("div.dropdown");

  $smallMenu.on("click", function(){
  $dropDown.fadeToggle("fast");
});


/*Slider*/

  var $currentIndex = 0;
  $items = $("#slider_container").find(".slider");
  console.log($items);
  $itemAmt = $items.length;

  function cycleItems() {
  var $item = $items.eq($currentIndex);
  $items.hide();
  $item.fadeToggle(1000);
  }

var $autoSlide = setInterval(function(){
  if ($currentIndex < $itemAmt-1){
      $currentIndex += 1;
  } else {
    return false;
  }
  cycleItems();
}, 3000);

/*Photo details with description on click*/

var $photo = $(".photo");
var $description = $(".description");

$photo.on("click", function(){
  var i = $photo.index(this);
  $(this).toggleClass("active");

  $photo.each(function(i, value){
    if ($(this).hasClass("active")){
      $description.eq(i).fadeIn("slow");
      $description.eq(i).css("display", "inline-block");
    } else {
      $description.eq(i).hide();
    }
  });
});


/* Contact Form */
var $form = $("form");
var $name = $form.find("#name");
var $email = $form.find("#email");
var $text = $form.find("textarea");
var $checkbox = $form.find(".checkbox");
var $formOK = $form.find(".form_ok");
var $error = $form.find(".error");
var isValid = true;

$checkbox.on("click", function(){
  if($(this).hasClass('checked')) {
    $formOK.hide();
  } else {$formOK.show()};
  $(this).toggleClass("checked");
  });

$form.on("submit", function(event) {
  event.preventDefault;

  if ($name.val().length>2 && $email.val().indexOf("@") !==-1 && $email.val().indexOf(".") !==-1 && $text.val().length>10 && $checkbox.hasClass("checked")){
  $(this).submit;
  } else {
  $error.text("Sprawdź pola formularza !").css("color","red");
  return false;
}
});


});
