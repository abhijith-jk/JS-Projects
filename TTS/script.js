const voiceList = document.getElementById("voices");
const speechbtn = document.querySelector(".submit");
const textAreaEl =  document.querySelector("#text");

let synth =  speechSynthesis;
let isSpeaking = true;

function voicespeech() {
    for (let voices of synth.getVoices()) {
        let optionEl = document.createElement("option");
        optionEl.text = voices.name;
        voiceList.add(optionEl);
    }
}
synth.addEventListener("voiceschanged", voicespeech);


function tts(text){
    let utterance = new SpeechSynthesisUtterance(text);
    for (let voice of synth.getVoices()) {
        if(voice.name === voiceList.value){
            utterance.voice = voice;
        }
    }
    synth.speak(utterance);
}

speechbtn.addEventListener("click", (e)=>{
    e.preventDefault();
    if (textAreaEl.value != '') {
        if (!synth.speaking) {
            tts(textAreaEl.value);
        }
        if (textAreaEl.value.length > 0) {
            if(isSpeaking){
                synth.resume();
                isSpeaking = false;
                speechbtn.innerHTML = `Pause Speech`;
            } else {
                synth.pause();
                isSpeaking = true;
                speechbtn.innerHTML =  `Resume Speech`;
            }
        setInterval (()=>{
            if (!synth.speaking && !isSpeaking) {
                isSpeaking = true;
                speechbtn.innerHTML = `Convert To Speech`;
            }
        })
        } else {
            speechbtn.innerHTML = `Convert To Speech`;
        }
    }
})