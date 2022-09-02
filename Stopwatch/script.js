let [hours, minutes, seconds, milliseconds] = [0,0,0,0];
const startbtn = document.getElementById("start");
const pausebtn = document.getElementById("pause");
const resetbtn = document.getElementById("reset");
const stopwatchDisplay = document.querySelector(".stopwatch");
let interval = null;

startbtn.addEventListener("click", ()=>{
    if(interval != null){
        clearInterval(interval);
    } else
        interval = setInterval(timer, 10);
})

pausebtn.addEventListener("click", ()=>{
    clearInterval(interval);
})

resetbtn.addEventListener("click", ()=>{
    clearInterval(interval);
    stopwatchDisplay.textContent = `00 : 00 : 00 : 000`;
})

function timer() {
    milliseconds += 10;
    if (milliseconds == 1000) {
        milliseconds = 0;
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
            if (minutes == 60){
                minutes = 0;
                hours++;
            }
        }     
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

    stopwatchDisplay.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
}

