const btnEl = document.querySelector(".btn");
const trailerContainerEl = document.querySelector(".trailer-container");
const closeIconEl = document.querySelector(".close-icon");

btnEl.addEventListener("click", ()=>{
    trailerContainerEl.classList.remove("inactive");
})
closeIconEl.addEventListener("click", ()=>{
    trailerContainerEl.classList.add("inactive");
})