/* slider */
var slide =document.querySelectorAll(".slide");
var point1 =document.querySelector(".point");
var point2 =document.querySelector(".point2");
var n=0;
  function slideshow(){
  for(var i=0 ; i<slide.length;i++){
    slide[i].classList.remove("display");
  }
   if(n == 0){
   if(slide[n].classList.contains("active")){
     slide[n].classList.remove("active");
     slide[n].classList.add("display");
     slide[n+1].classList.add("active");
     point1.classList.remove("Active");
     point2.classList.add("Active");
  }
}
else {
  slide[n].classList.remove("active");
  slide[n].classList.add("display");
  slide[0].classList.add("active");
  point2.classList.remove("Active");
  point1.classList.add("Active");
}

  n++;
  if(n==2){
    n=0;
  }
}
point1.onclick=function(){
  slide[0].classList.remove("display");
  slide[1].classList.remove("active");
  slide[1].classList.add("display");
  slide[0].classList.add("active");
  point2.classList.remove("Active");
  point1.classList.add("Active");
};
point2.onclick=function(){
 slide[1].classList.remove("display");
 slide[1].classList.add("active");
 slide[0].classList.remove("active");
 slide[0].classList.add("display");
 point1.classList.remove("Active");
 point2.classList.add("Active");
 slide[1].classList.remove("active");
 slide[0].classList.add("active");
}
setInterval( slideshow, 3000);
/* scroll*/
var nav = document.querySelector(".navbar");
var spa = document.querySelector(".navbar h3 span");
var ul = document.querySelector(".ul1");
var h3 = document.querySelector(".navbar h3");
    window.onscroll = function(){
      if(window.innerWidth > 1200) {
    if(document.documentElement.scrollTop >500){
    nav.classList.add("down");
    ul.style.color="black";
    spa.style.color="black";
    h3.classList.add("downh3");
  }
  else {
    nav.classList.remove("down");
    h3.classList.remove("downh3");
    ul.style.color="white";
    spa.style.color="white";
  }
}
};

/* start Testimony */
var span=$(".contorls span");
var item= $(".item");
var items= Array.from(item);
var start;
  function remove(){
 for (var i = 0; i < items.length; i++) {
  var z =$(items[i]);
  if(!z.hasClass("display")){
    z.addClass("display");
  }
  z.removeClass("animate__fadeInRight");
}
  }
span.click(function(){
  remove();
  $(this).css("background","#E52C35").siblings().css("background","#9A9A9A");
  var x =$(this).data("filter");
  $(x).removeClass("display");
  $(x).addClass("animate__fadeInRight");
})
var h=document.querySelector("#h5");
var list=document.querySelector(".navbar ul");
h.onclick=function(){
list.classList.toggle("display");
};
