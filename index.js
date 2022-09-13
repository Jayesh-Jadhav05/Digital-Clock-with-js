const h = document.getElementById('hours');
const m = document.getElementById('minutes');
const s = document.getElementById('seconds');
const ampm = document.getElementById('ap_pm');

function updateclock(){
let hor = new Date().getHours();
let min = new Date().getMinutes();
let sec = new Date().getSeconds();
let amp = "AM";

if(hor > 12){
    hor = hor-12;
    amp = "PM";
   
}

hor = hor < 10 ? "0" + hor : hor;
min = min < 10 ? "0" + min : min;
sec = sec < 10 ? "0" + sec : sec;


h.innerText = hor;
m.innerText = min;
s.innerText = sec;
ampm.innerText = amp;

}

setInterval(() =>{
    updateclock();
},1000);


