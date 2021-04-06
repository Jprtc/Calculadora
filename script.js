const numberButtons = document.querySelectorAll("[data-number]");
const screen = document.querySelector("[data-screen]");
const clearButton = document.querySelector("[data-clear]")
const deleteButton = document.querySelector("[data-delete]")
const operatorButtons = document.querySelectorAll("[data-operator]")
const equalsButton = document.querySelector("[data-equals]")

let shouldResetScreen = false

let firstOperand = ""
let secondOperand = ""
let currentOperation = null

function somar (a,b){   
    return a+b
}

function subtrair(a,b){
    return a-b
}

function multiplicar(a,b){
    return a*b
}

function dividir(a,b){
    return a/b
}

//EVENT FOR THE BUTTONS
numberButtons.forEach((button) =>
  button.addEventListener("click", () => appendNumber(button.textContent))
);

operatorButtons.forEach((button) =>
  button.addEventListener("click", () => setOperator(button.textContent))
)

clearButton.addEventListener("click",clear)
deleteButton.addEventListener("click",deleteNumber)
equalsButton.addEventListener("click",validate)


function appendNumber(number) {
    if (screen.textContent === "0" || shouldResetScreen) resetScreen()
    screen.textContent += number;
}

function setOperator(operator){
    if (currentOperation !== null) evaluate()
    firstOperand = screen.textContent;
    currentOperation = operator
    shouldResetScreen = true
}

function validate(){
    if (currentOperation === null || shouldResetScreen) return;
    if (currentOperation === "÷" && screen.textContent === "0"){
        alert("Não é possivel dividir por 0!")
        clear()
        return
    } 
    secondOperand = screen.textContent
    screen.textContent = operate(currentOperation,firstOperand,secondOperand)
    currentOperation = null;
}

function operate(operator,a,b){
    a = Number(a)
    b = Number(b)
    switch(operator){
        case "+":
            return somar(a,b);
        case "-":
            return subtrair(a,b);
        case "x":
            return multiplicar(a,b);
        case "÷":
            if (b === 0) return null;
            else return dividir(a,b);
        default:
            return null
    }
}

function resetScreen(){
    screen.textContent = ""
    shouldResetScreen = false    
}

function clear(){
    screen.textContent = "0"
    firstOperand = ""
    secondOperand = ""
    curretOperation = null
}

function deleteNumber(){
    screen.textContent = screen.textContent.toString().slice(0,-1)
}

