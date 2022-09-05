const colorInput = document.getElementById("color");
const bodyEl = document.querySelector("body");
const labelEl = document.querySelector("label");

colorInput.addEventListener("input", () => {
    const colorCode = colorInput.value;
    bodyEl.style.backgroundColor = colorCode;
    labelEl.style.backgroundColor = colorCode;
});