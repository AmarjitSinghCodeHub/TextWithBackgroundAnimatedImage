var _mouseCursor=document.querySelector(".customCursor");
var _textContainer=document.querySelector(".divTextContainer");

document.addEventListener("mousemove",function(e){
    _mouseCursor.style.left=e.pageX + "px";
    _mouseCursor.style.top=e.pageY + "px";
})

var _divImage1=document.querySelector("#divImage1");
var divTransOverlay1=document.querySelector("#divTransOverlay1");
divTransOverlay1.addEventListener("mousemove",function(e){
    _divImage1.style.left=(e.pageX/100) + "px";
    _divImage1.style.top=(e.pageX/100) + "px";
    _divImage1.style.opacity=1;
    _divImage1.style.transform="scale(1)";
});
divTransOverlay1.addEventListener("mouseleave",function(e){
    _divImage1.style.left=(e.pageX-300) + "px";
    _divImage1.style.top=(e.pageY-200) + "px";
    _divImage1.style.opacity=0;
    _divImage1.style.transform="scale(0)";
});



var _divImage2=document.querySelector("#divImage2");
var divTransOverlay2=document.querySelector("#divTransOverlay2");
divTransOverlay2.addEventListener("mousemove",function(e){
    _divImage2.style.left=(e.pageX/100) + "px";
    _divImage2.style.top=(e.pageX/100) + "px";
    _divImage2.style.opacity=1;
    _divImage2.style.transform="scale(1)";
});
divTransOverlay2.addEventListener("mouseleave",function(e){
    _divImage2.style.left=(e.pageX/200) + "px";
    _divImage2.style.top=(e.pageX/400) + "px";
    _divImage2.style.opacity=0;
    _divImage2.style.transform="scale(0)";
});




var _divImage3=document.querySelector("#divImage3");
var divTransOverlay3=document.querySelector("#divTransOverlay3");
divTransOverlay3.addEventListener("mousemove",function(e){
    _divImage3.style.left=(e.pageX/200) + "px";
    _divImage3.style.top=(e.pageX/400) + "px";
    _divImage3.style.opacity=1;
    _divImage3.style.transform="scale(1)";
});
divTransOverlay3.addEventListener("mouseleave",function(e){
    _divImage3.style.left=(e.pageX/500) + "px";
    _divImage3.style.top=(e.pageX/500) + "px";
    _divImage3.style.opacity=0;
    _divImage3.style.transform="scale(0)";
});