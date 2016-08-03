//Sticky Menu
$(document).ready(function(){
  console.log("DOM załadowany");

var $nav = $("nav");
var $menu = $("#large_menu");
var menuTop = $menu.position().top;


//console.log($nav);
//console.log($menu);
//console.log(menuTop);


$(window).on("scroll", function (){
//  console.log("działa");

  var px = $(document).scrollTop();
//console.log(px);

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
//    console.log($smallMenu);
//    console.log($dropDown);

    $smallMenu.on("click", function(){
    //  console.log("działa to?");
    $dropDown.fadeToggle("fast");
  });


//Slider

//moja wersja - niedokończona

var $items = $(".slider_container").find(".slider");
//console.log($items);
var $firstPicture = 0;
var $item = $items.eq($firstPicture);

/*
function pictureOnLoad() {

$items.on("click", function(){
  $firstPicture++;

if ($firstPicture<$items.length){

  $item = $item.next();
  $items.hide();
  $item.fadeToggle(1000);
  console.log("klik w pierwszej rundzie");
  };

  if($firstPicture > $items.length-1) {
  $item.hide();
  console.log("klik w drugiej rundzie");
  $items.first().fadeIn();
  $firstPicture = 0;
  };
});
}
pictureOnLoad();
*/

//cycleItems();

  var $currentIndex = 0;
  $items = $(".slider_container").find(".slider");
//  console.log($items);
  $itemAmt = $items.length;

  function cycleItems() {
  var $item = $items.eq($currentIndex);
  $items.hide();
  $item.fadeToggle(1000);
}

var $autoSlide = setInterval(function() {
  $currentIndex += 1;
  if ($currentIndex > $itemAmt - 3) {
    clearInterval();
    $items.show();
  }
  cycleItems();
}, 3000);




/*
var $autoSlide = setInterval(function() {
  $currentIndex += 1;
  if ($currentIndex > $itemAmt - 1) {
    $currentIndex = 0;
  }
  cycleItems(1);
}, 3000);
*/


/*
$('.next').click(function() {
  clearInterval(autoSlide);
  currentIndex += 1;
  if (currentIndex > itemAmt - 1) {
    currentIndex = 0;
  }
  cycleItems();
});

$('.prev').click(function() {
  clearInterval(autoSlide);
  currentIndex -= 1;
  if (currentIndex < 0) {
    currentIndex = itemAmt - 1;
  }
  cycleItems();
});

*/

//Photo details with description on click

var $photo = $(".photo");
console.log($photo);

var $description = $(".description");

$photo.on("click", function(){

  var i = $photo.index(this);
  //znajdujemy index kliknietego taba
  $description.eq(i).fadeIn("slow");

  //usuwamy klase active ALL
//  $photo.removeClass("active");
  //aktywujemy kliknietego taba
// $(this).addClass("active");
  $(this).toggleClass("active");

  $photo.each(function(index, value){
    if ($(this).hasClass("active")){
      $description.eq(index).show("1000");
      $description.eq(index).css("display", "inline-block");

//      $(this).css("transform", "scale(2)");
//      $(this).css({"z-index": "1000"});
      //  $photo.eq(index).css("opacity", "1");

    } else {
      $description.eq(index).hide();
//      $(this).css("transform", "scale(1)");
//      $(this).css({"z-index": "1"});
    //  $photo.eq(index).css("opacity", "1");
    }
  });
});

/*
  albo:
  $( "#button" ).on('click', function() {
    $( "#item" ).toggleClass('hidden');
});

/*
***

$photos.on("click", function(){

  var i = $tabs.index(this);
  //znajdujemy index kliknietego taba
  $divs.eq(i).fadeIn("slow");

  //usuwamy klase aktive ALL
  $tabs.removeClass("active");
  //aktywujemy kliknietego taba
  $(this).addClass("active");

  $tabs.each(function(index, value){
    if ($(this).hasClass("active")){
      $divs.eq(index).show(1000);
    } else {
      $divs.eq(index).hide(1000);
    }
  })


  albo:
  $( "#button" ).on('click', function() {
    $( "#item" ).toggleClass('hidden');
});
*/

/* Contact Form */
var $form = $("form");
var $name = $form.find("#name");
var $email = $form.find("#email");
var $text = $form.find("textarea");
var $checkbox = $form.find(".checkbox");
var $formOK = $form.find(".form_ok");
var $error = $form.find(".error");
var isValid = true;
console.log($form);
console.log($name);
console.log($email);
console.log($text);
console.log($error);
console.log($checkbox);
console.log($formOK);

$checkbox.on("click", function(){
  if($(this).hasClass('checked')) {
    $formOK.hide();
  } else {$formOK.show( )};
  $(this).toggleClass("checked");
  });
/*
  $checkbox.on("click", function(){
      $formOK.fadeToggle();
    });
*/
$form.on("submit", function(event) {
  event.preventDefault;

  if ($name.val().length>1 && $email.val().indexOf("@") !==-1 && $email.val().indexOf(".") !== -1 && $text.val().length>1 && $checkbox.hasClass("checked")) {
  $(this).submit;
  } else {
  $error.text("Sprawdź pola formularza !").css("color","red");
  return false;
}
});
/*


  var isValid = true;

  if(name.length<3) {
    isValid = false;
  };

  if(surname.length<5) {
    isValid = false;
  };

  if(isValid = true) {
   form.on("submit", function(){
     $.ajax ({
       url: "api.coderslab.pl/register",
       method: POST,
       data: JSON.stringify
         name: name,
         surname: surname,
         address: address,

     })  .fail(alert("error"));
        return false;
      });



     var titleData = $(this).find(".get_title").val();
     var descData = $(this).find(".get_description").val();
  $.ajax ({
    url: "api.coderslab.pl/register",
    method: POST,
    data: JSON.stringify
      name: titleData,
      description: descData;
      screening: [];
  })  .fail(alert("error"));
     return false;
   });


  }



  {

    $.ajax({
              url: "api.coderslab.pl/register"
          }).done(function(response) {
              for(var i=0; i<response.results.length; i++) {
                  var $p = $("<p>")
                      .text(response.results[i].title);
                  $("#ajax-result").append($p);
              }
              $("#ajax-result").slideDown("fast");


          }).fail(function(error) {
              console.log(error);
              $("#ajax-result").text(error.statusText).slideDown("fast");
          });
      });

  }
*/
});
