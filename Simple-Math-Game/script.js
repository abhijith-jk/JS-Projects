const questionEl = document.getElementById("question");
const scoreEl = document.getElementById("score");
const formEl = document.getElementById("form");
const startbtn = document.getElementById("start-btn");
const inputEl = document.getElementById("input");

let num1, num2;
let score = 0;
scoreEl.innerText = "Score : 0";

const operators = ["Multiplied by", "Divided by", "Added to", "Subtracted by"];
let r = 0;
let correctAnswer = 0;

question();

startbtn.addEventListener("click", question);
formEl.addEventListener("submit", handleform);

function question(){
    let r = Math.floor(Math.random()*4);
    num1 = Math.floor(Math.random()*100);
    num2 = Math.floor(Math.random()*100);

    inputEl.value = "";
    scoreEl.innerText = `Score : ${score}`;
    questionEl.innerText = `How much is ${num1} ${operators[r]} ${num2}?`;

    if (operators[r] === "Multiplied by") {
        correctAnswer = num1 * num2;
        console.log("Multiplication");        
    } else if (operators[r] === "Divided by") {
        correctAnswer = Math.floor(num1 / num2);   
        console.log("Division");             
    } else if (operators[r] === "Added to") {
        correctAnswer = num1 + num2;
        console.log("Sum");                
    } else if (operators[r] === "Subtracted by") {
        correctAnswer = num1 - num2;
        console.log("Difference");               
    }
    else{
        console.log("Error in code");
    }
    console.log(correctAnswer);
}

function handleform(e) {
    e.preventDefault();
    
    let userAnswer = +inputEl.value;
    if (userAnswer === correctAnswer) {
        score++ ;
        console.log(score);
    } else{
        score --;
        console.log(score);
    }

    scoreEl.innerText = `Score : ${score}`;
    question();
}
