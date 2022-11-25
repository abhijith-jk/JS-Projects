class Calculator {
    constructor(){
        this.previousOperandEl = previousOperandEl;
        this.currentOperandEl = currentOperandEl;
        this.clear();
    }

    clear() {
        this.previousOperand = '';
        this.currentOperand = '';
        this.operation = undefined;
    }

    delete() {

    }

    append(number) {
        this.currentOperand = number;
    }

    chooseOperation(operation){

    }

    compute() {

    }

    updateDisplay() {
        this.currentOperandEl.innerText = this.currentOperand;
    }
}

const acButton = document.querySelector("[data-all-clear]");
const delButton = document.querySelector("[data-delete]");
const operationButtons = document.querySelectorAll("[data-operation]");
const numberButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const previousOperandEl = document.querySelector("[data-previous-operand]");
const currentOperandEl = document.querySelector("[data-current-operand]");

const calculator = new Calculator(previousOperandEl,currentOperandEl);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        console.log("button clicked");
        calculator.append(button.innerText);
        calculator.updateDisplay();
    })
})
