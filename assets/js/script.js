$("article h2").click(function(){
  if($(this).parent().hasClass("active")){
    hideAnswer($(this).parent())
  } else {
    showAnswer($(this).parent())
  }
});
function showAnswer(element){
  element.find(".answer").slideDown("slow", function(){
    element.addClass("active");
    element.find("h2 img").attr("src", "./assets/images/icon-minus.svg");
  })
}
function hideAnswer(element){
  element.find(".answer").slideUp("slow", function(){
    element.removeClass("active");
    element.find("h2 img").attr("src", "./assets/images/icon-plus.svg");
  })
}