

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
        
    }
}

//////////////////////////////////////////////////////
let display = document.querySelector('.display p');
let displayValue = '';
let isDecimal = false;

function clear(){
    displayValue = '';
    isDecimal = false;
    display.textContent = displayValue;
}

function clearData(){
    num1 = num2 = null;
    operator = '';
    displayValue = '';
    operating = false;
    hanging = false;
}

function update(){
    display.textContent = displayValue;
}

function calculate(){
    if(operator === 'divide' && num2 === 0){
        display.textContent = 'ERROR: cannot divide by 0';
        clearData();
        shouldClear = true;
        return;
    }
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
        }
        else {
            if(shouldClear) {
                clear();
                shouldClear = false;
            }
            displayValue += key.id;
        }
        update();
    });
});

let operators = document.querySelectorAll('.operator');

operators.forEach((key) => {
    key.addEventListener('click', () => {
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
        num1 = +displayValue;
        clear();
        operator = key.id;
    });
});

let enter = document.querySelector('.enter-key');

enter.addEventListener('click', () => {
    if(operating){
        num2 = +displayValue;
        if(num1){
            calculate();
            operating = false;
        }
}
})