var number = prompt(`Enter positive integer`);
if(number<0){
    alert(`Enter a positive integer`);
}else{
    document.write(`number: ${number}<br> round off value: ${Math.round(number)}<br> floor value: ${Math.floor(number)} <br> ceil value: ${Math.ceil(number)}`)
}