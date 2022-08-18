let userCharactersEl = document.getElementById("input");
let totalCharatersEl = document.getElementById("text-char");
let remainingEl = document.getElementById("text-rem");

let count = 0;

userCharactersEl.addEventListener("keyup", countUserCharacters);

function countUserCharacters(){
    count = userCharactersEl.value.length;
    
    totalCharatersEl.innerText = `Total characters: ${count}`;
    remainingEl.innerText = `Remaining: ${100 - count}`;
    // console.log(count);
}
