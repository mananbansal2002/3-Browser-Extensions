
loadevents();

function loadevents(){ document.querySelector('.dmode').addEventListener('click',dmode);
 document.querySelector('.lmode').addEventListener('click',lmode);
}
function dmode(e){
console.log("pressed");
  chrome.tabs.executeScript({
    file:"don.js"
  })
loadevents();
}

function lmode(e){
console.log("pressed");
  chrome.tabs.executeScript({
    file:"lon.js"
  })
loadevents();
}