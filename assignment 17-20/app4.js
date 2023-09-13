var userNumb =+ prompt(`Enter a number to show its multiplication table`);
var userLength =+ prompt(`Enter length multiplication table`);
if(isNaN(userNumb) || isNaN(userLength)){
    alert(`Please Enter a valid number or length`)
}else{
    document.write(`Multiplication table of ${userNumb} Length ${userLength}<br> `);
    for(var i =+ 1; i<=userLength; i++){
        document.write(`${userNumb} x ${i} = ${userNumb*i}<br>`);
    }
}   