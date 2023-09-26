function square(){
    const number = +prompt(`Enter a number`);
    if(isNaN(number)){
        alert(`Enter a valid number`);
    }else{
        alert(`The square is ${number*number}`);
    }
}
square();