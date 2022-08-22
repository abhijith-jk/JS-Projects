const btnEl = document.querySelector(".btn");
const trailerContainerEl = document.querySelector(".trailer-container");
const closeIconEl = document.querySelector(".close-icon");
const videoEl = document.getElementById("video-el");

btnEl.addEventListener("click", ()=>{
    trailerContainerEl.classList.remove("inactive");
    setTimeout(()=>{
        videoEl = videoEl.play();
    }, 500);
})
closeIconEl.addEventListener("click", ()=>{
    trailerContainerEl.classList.add("inactive");
    videoEl = videoEl.load();
})