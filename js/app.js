//Sticky Menu
$(document).ready(function(){
  console.log("DOM załadowany");

var $nav = $("nav");
var $menu = $("#large_menu");
var menuTop = $menu.position().top;


//console.log($nav);
console.log($menu);
//console.log(menuTop);


$(window).on("scroll", function (){
//  console.log("działa");

  var px = $(document).scrollTop();
console.log(px);

  if (px >= menuTop){
    $menu.addClass("sticky");
  } else {
    $menu.removeClass("sticky");
  }
});

  $(window).on("resize", function () {
    //console.log("działa");
  //  menuTop = $menu.position().top;
    if($menu.hasClass("sticky")) {
      menuTop=$nav.position().top;
    } else {
      menuTop = $menu.position().top;
    }
  });

  //Small menu
    var $smallMenu = $("#small_menu");
    var $dropDown = $("div.dropdown");
    console.log($smallMenu);
    console.log($dropDown);

    $smallMenu.on("click", function(){
    //  console.log("działa to?");
    $dropDown.fadeToggle("fast");
  });


});
