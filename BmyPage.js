$(document).ready(function(){
   $(".navButton").mouseenter(function(){
      $(this).css("background-color","#73E8F6");
      var $children = $(this).children(".subMenu");
        $children.slideToggle("fast");
   });
   $(".navButton").mouseleave(function(){
      $(this).css("background-color","#A4CDD2");
      var $children = $(this).children(".subMenu");
        $children.slideToggle("fast");
   });

   $(".firstNavButton").mouseenter(function(){
      $(this).css("background-color","#73E8F6");
   });
   $(".firstNavButton").mouseleave(function(){
      $(this).css("background-color","#A4CDD2");
   });
});