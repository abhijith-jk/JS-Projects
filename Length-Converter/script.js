const input = document.getElementById("input-length");
const result = document.getElementById("result-length");
const inputType = document.getElementById("input-type");
const resultType = document.getElementById("result-type");
let inputTypeValue, resultTypeValue;

input.addEventListener("keyup", convert);
inputType.addEventListener("change", convert);
resultType.addEventListener("change", convert);

inputTypeValue = inputType.value;
resultTypeValue = resultType.value;

function convert() {
    inputTypeValue = inputType.value;
    resultTypeValue = resultType.value;

    // Kilometer Conversion
    if (inputTypeValue === "Kilometer" && resultTypeValue === "Kilometer") {
        result.value = input.value;
    } else if (inputTypeValue === "Kilometer" && resultTypeValue === "Meter") {
        result.value = Number(input.value) * 1000;
    } else if (inputTypeValue === "Kilometer" && resultTypeValue === "Centimeter") {
        result.value = Number(input.value) * 100000;
    }

    // Meter Conversion
    if (inputTypeValue === "Meter" && resultTypeValue === "Meter") {
        result.value = input.value;
    } else if (inputTypeValue === "Meter" && resultTypeValue === "Kilometer") {
        result.value = Number(input.value) / 1000;
    } else if (inputTypeValue === "Meter" && resultTypeValue === "Centimeter") {
        result.value = Number(input.value) * 100;
    }

    // Centimeter Conversion
    if (inputTypeValue === "Centimeter" && resultTypeValue === "Kilometer") {
        result.value = Number(input.value) / 100000;
    } else if (inputTypeValue === "Centimeter" && resultTypeValue === "Meter") {
        result.value = Number(input.value) / 100;
    } else if (inputTypeValue === "Centimeter" && resultTypeValue === "Centimeter") {
        result.value = input.value;
    }
}