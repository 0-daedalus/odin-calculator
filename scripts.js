

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

<<<<<<< HEAD
function eraseData(){
    num1 = num2 = null;
    operator = '';    
    isChaining = false;
   operationFinished = false;
=======
function clearData(){
    num1 = num2 = null;
    operator = '';
    displayValue = '';
    operating = false;
<<<<<<< HEAD
>>>>>>> b6be693 (More stable version)
=======
    hanging = false;
>>>>>>> c77a6fc (Revert "Finish chaining, add / by 0 exception (for now)")
}

function update(){
    display.textContent = displayValue;
}

function calculate(){
    displayValue = operate(operator, num1, num2);
    update();
    num1 = num2 = null;
}

let num1 = null;
let num2 = null;
let operator = '';
let operating = false;
let shouldClear = false;
let hanging = false;

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
            clearData();
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
<<<<<<< HEAD
=======
        else {
            if(shouldClear) {
                clear();
                shouldClear = false;
            }
            displayValue += key.id;
        }
>>>>>>> b6be693 (More stable version)
        update();
    });
});

let operators = document.querySelectorAll('.operator');

operators.forEach((key) => {
    key.addEventListener('click', () => {
<<<<<<< HEAD
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
=======
        if(operating){
            if(displayValue != '') hanging = false;
            if(!hanging){
                num2 = +displayValue;
                calculate();
                num1 = +displayValue;
                displayValue = '';
                operator = key.id;
                shouldClear = true;
                hanging = true;
                return;
            }
            else {
                operator = key.id;
                return;
            }
        }
        operating = true;
>>>>>>> b6be693 (More stable version)
        num1 = +displayValue;
        clear();
        operator = key.id;
    });
});

let enter = document.querySelector('.enter-key');

enter.addEventListener('click', () => {
    if(operating){
        num2 = +displayValue;
        if(num2 === 0 && operator === 'divide') {display.textContent = "ERROR: can not divide by 0!"; eraseData();  return;}
        if(num1){
            calculate();
            operating = false;
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