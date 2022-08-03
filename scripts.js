

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
        case '+': return add(x,y);
        
        case '-': return subtract(x,y);
        
        case '*': return multiply(x,y);
        
        case '/': return divide(x,y);
        
        case '^': return pow(x,y);
        
        case 'sqrt': return sqrt(x);
        
        case '!': return factorial(x);
        
    }
}