boolr=0;
boolw=0;
boolt=0;
loadevents();

function loadevents()
{
 document.querySelector(".rain").addEventListener('click',prain);
document.querySelector(".wind").addEventListener('click',pwind);
document.querySelector(".thunderstorm").addEventListener('click',pthunderstorm);
}







 var raudio = new Audio('https://www.fesliyanstudios.com/play-mp3/5244');
var waudio = new Audio('https://www.fesliyanstudios.com/play-mp3/5632');
var taudio = new Audio('thunderstorm.mp3');
function rcolour()
{
    if(boolr==0){
    document.querySelector(".rain").style.backgroundColor="orange";
        boolr=1;
    }
    else{
        
    document.querySelector(".rain").style.backgroundColor="lightgray";
        boolr=0;
    }
}

function prain() {
   
    if(boolr==0)
  raudio.play() ;
    else
        raudio.pause();
  rcolour();
}

function pwind() {
 if(boolw==0)
  waudio.play() ;
    else
        waudio.pause();
    wcolour();
}

function pthunderstorm() {
  
 if(boolt==0)
  taudio.play() ;
    else
        taudio.pause();
    tcolour();
}


function wcolour()
{
    if(boolw==0){
    document.querySelector(".wind").style.backgroundColor="orange";
        boolw=1;
    }
    else{
        
    document.querySelector(".wind").style.backgroundColor="lightgray";
        boolw=0;
    }
}

function tcolour()
{
    if(boolt==0){
    document.querySelector(".thunderstorm").style.backgroundColor="orange";
        boolt=1;
    }
    else{
        
    document.querySelector(".thunderstorm").style.backgroundColor="lightgray";
        boolt=0;
    }
}

