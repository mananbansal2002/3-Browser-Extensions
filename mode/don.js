console.log("working");
document.querySelector("html").style.filter="invert(1) hue-rotate(180deg)";
let m=document.querySelectorAll("img,picture,video");

m.forEach((mediaItem)=>
{
 mediaItem.style.filter="invert(1) hue-rotate(180deg)";
})