const numberButtons = document.querySelectorAll("[data-number]");
const screen = document.querySelector("[data-screen]");

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

numberButtons.forEach((button) =>
  button.addEventListener("click", () => appendNumber(button.textContent))
);

function appendNumber(number) {
    if (screen.textContent === "0")
    screen.textContent += number;
  }