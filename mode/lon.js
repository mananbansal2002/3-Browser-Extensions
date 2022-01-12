
console.log("working");
document.querySelector("html").style.filter="invert(0) hue-rotate(0deg)";

let me=document.querySelectorAll("img,picture,video");

me.forEach((mediaItem)=>
{
 mediaItem.style.filter="invert(0) hue-rotate(0deg)";
})
