function calculator(){
    const num1 = +prompt(`Enter First Number`);
    const operator = prompt(`Enter the operator (+ , - , * , /)`);
    const num2 = +prompt(`Enter Second Number`);
    if(isNaN(num1) || isNaN(num2)){
        alert(`Enter a valid number`);
    }else if(operator === '+'){
        document.write(num1+num2);
    }else if(operator === '-'){
        document.write(num1-num2);
    }else if(operator === '*'){
        document.write(num1+num2);
    }else if(operator === '/'){
        document.write(num1/num2);
    }else{
        alert(`Enter a valid operator`);
    }
}
calculator()