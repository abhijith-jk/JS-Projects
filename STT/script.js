const btnEl = document.querySelector(".btn");

btnEl.addEventListener("click", (ea)=>{
    btnEl.classList.add("fade");
    let recognition = new webkitSpeechRecognition();

    recognition.lang = 'en-GB';
    recognition.addEventListener("result", (e)=>{
        document.querySelector(".text").value =  e.results[0][0].transcript;
        console.log(e.results[0][0].transcript);
        btnEl.classList.remove("fade");
    })
    recognition.start();
})