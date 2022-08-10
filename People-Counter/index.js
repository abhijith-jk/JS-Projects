let count = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

function reset() {
    saveEl.textContent = "Previous Entries : ";
}
function resetIncrement() {
    countEl.textContent = 0;
    count = 0;
}
function increment() {
    count += 1;
    countEl.textContent = count;
}

function save() {
    let previousEntry = count + " - ";
    saveEl.textContent += previousEntry;
    resetIncrement();
}
