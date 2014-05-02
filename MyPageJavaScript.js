$(document).ready(function(){
   $(".navLi").mouseenter(function(){
      $(this).css('background-color',#3a3a3a);
      var $children = $(this).children('.subNav');
      $(this).children('.subNav').slideToggle('fast');
      
   });
   $('.navLi').mouseleave(function() {
      $(this).css('background-color','none');
      var $children = $(this).children('.subNav');
      $children.slideToggle('fast');
   });
   $('.popUpMenuItem').mouseenter(function() {
      $(this).css('background-color','#6e6e6e');
   });
   $('.popUpMenuItem').mouseleave(function() {
      $(this).css('background','#4b4b4b');
   });
});