const voiceList = document.getElementById("voices");

let synth =  speechSynthesis;

function voicespeech() {
    for (let voices of synth.getVoices()) {
        let optionEl = document.createElement("option");
        optionEl.text = voices.name;
        voiceList.add(optionEl);
    }
}

synth.addEventListener("voiceschanged", voicespeech);