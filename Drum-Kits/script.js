const kitData = [ 
    ["crash","url('https://github.com/sahandghavidel/HTML-CSS-JavaScript-projects-for-beginners/blob/main/projects/drum-kits/images/crash.png?raw=true')","crash.mp3"], 
    ["kick","url('https://github.com/sahandghavidel/HTML-CSS-JavaScript-projects-for-beginners/blob/main/projects/drum-kits/images/kick.png?raw=true')","kick.mp3"], 
    ["snare","url('https://github.com/sahandghavidel/HTML-CSS-JavaScript-projects-for-beginners/blob/main/projects/drum-kits/images/snare.png?raw=true')","snare.mp3"], 
    ["tom","url('https://github.com/sahandghavidel/HTML-CSS-JavaScript-projects-for-beginners/blob/main/projects/drum-kits/images/tom.png?raw=true')","tom.mp3"] 
];
const drumKitEl = document.querySelector(".drum-kit");

kitData.forEach((kit)=>{
    const btnEl = document.createElement("button");
    btnEl.classList.add("btn");
    drumKitEl.appendChild(btnEl);
    btnEl.innerText = kit[0];
    btnEl.style.backgroundImage = kit[1];
    const audioEl = document.createElement("audio");
    audioEl.src = kit[2];
    drumKitEl.appendChild(audioEl);

    btnEl.addEventListener("click", ()=>{
        audioEl.play();
    })
    window.addEventListener("keydown", (e)=>{
        if (e.key === kit[0].slice(0,1)) {
            audioEl.play();
        }
    })
})