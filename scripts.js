

function add(x,y){
    return +((+x+(+y)).toFixed(4));
}

function subtract(x,y){
    return +((+x-(+y)).toFixed(4));
}

function multiply(x,y){
    return +((+x*+y).toFixed(4));
}

function divide(x,y){
    return +((+x/+y).toFixed(4));
}

function sqrt(x){
    let j = 0;
    for(let i = 0; i*i < +x; i+=0.001){
        j = i;
        if(i*i === +x) return +(i.toFixed(4));
    }
    return +(j.toFixed(4));
}

function pow(x,y){
    return +(((+x)**(+y)).toFixed(4));
}

function factorial(x){
    let ans = 1;
    for(let i = +x; i > 1; i--){
        ans*=i;
    }
    return ans;
}

function operate(operator, x, y){
    switch(operator){
        case 'add': return add(x,y);
        
        case 'subtract': return subtract(x,y);
        
        case 'multiply': return multiply(x,y);
        
        case 'divide': return divide(x,y);
        
        case 'power': return pow(x,y);
        
        case 'sqrt': return sqrt(x);
        
        case 'factorial': return factorial(x);
        
        default : return null;
    }
}

//////////////////////////////////////////////////////
let display = document.querySelector('.display p');
let displayValue = '';
let isDecimal = false;
let isChaining = false;

function clear(){
    displayValue = '';
    isDecimal = false;
    display.textContent = displayValue;
}

function eraseData(){
    num1 = num2 = null;
    operator = '';    
    isChaining = false;
   operationFinished = false;
}

function update(){
    display.textContent = displayValue;
}

let num1 = null;
let num2 = null;
let operator = '';
let operationFinished = false;

let numbers = document.querySelectorAll('.number-key');

numbers.forEach((key) => {
    key.addEventListener('click', () => {
        if(key.id === 'decimal') {
            if(!isDecimal){
                displayValue += '.';
                isDecimal = true;
            }
        }
        else if(key.id === 'clear'){
            clear();
            eraseData()
        }
        else {
            if(isChaining){
                clear();
                isChaining = false;
            }
            displayValue += key.id;
        }
        update();
    });
});

let operators = document.querySelectorAll('.operator');

operators.forEach((key) => {
    key.addEventListener('click', () => {
        if(num1){
            num2 = +displayValue;
            if(num2 === 0 && operator === 'divide') {display.textContent = "ERROR: can not divide by 0!"; eraseData(); return;}
            displayValue = operate(operator, num1, num2);
            update();
            operator = key.id;
            num1 = displayValue;
            isChaining = true;
            num2 = null;
            return;
        }
        operationFinished = false;
        num1 = +displayValue;
        clear();
        operator = key.id;
    });
});

let enter = document.querySelector('.enter-key');

enter.addEventListener('click', () => {
    if(!operationFinished){
        num2 = +displayValue;
        if(num2 === 0 && operator === 'divide') {display.textContent = "ERROR: can not divide by 0!"; eraseData();  return;}
        if(num1){
            displayValue = operate(operator, num1, num2);
            update();
            operationFinished = true;
            num1 = null;
            num2 = null;
        }
}
})

///////////////////////////////////////////////////////////////
//Enter num1
//Choose an operator (save num1 and operator)
//Enter num2 
//Choose action:
//              Press Enter:                        Press operator:
//
//              Save num2                           Save num2
//              Compute the value                   Compute the value
//              Display the result                  Display the result
//              Make num1 equal to result           Make num1 equal to result and operator = operator
//              Nullify num2                        Nullify num2