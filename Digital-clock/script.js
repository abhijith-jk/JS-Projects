const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const ampmEl = document.getElementById("am-pm");
const dateEl = document.getElementById("date");
const dayEl = document.getElementById("day");
const yearEl = document.getElementById("year");


function updateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let date = new Date().getDate();
    let month = new Date().getMonth() + 1;
    let d = new Date().getDay();
    let y = new Date().getFullYear();
    let ampm = "AM";

    if (h>12) {
        h = h - 12;
        ampm = "PM";
    }
    switch (d) {
        case 0: d = "SUN";
            break;
        case 1: d = "MON";
            break;
        case 2: d = "TUE";
            break;
        case 3: d = "WED";
            break;
        case 4: d = "THU";
            break;
        case 5: d = "FRI";
            break;
        case 6: d = "SAT";
            break;

        default: d = "DAY"
            break;
    }
    h = h < 10 ? "0" + h : h ;
    m = m < 10 ? "0" + m : m ;
    s = s < 10 ? "0" + s : s ;
    month = month < 10 ? "0" + month : month ;

    hoursEl.innerText = h;
    minutesEl.innerText = m;
    secondsEl.innerText = s;
    dayEl.innerText = d;
    yearEl.innerText = y;
    ampmEl.innerText =  ampm;
    dateEl.innerText = date + ` / ` + month;

    setTimeout(()=>{updateClock()},1000);
}

updateClock();
