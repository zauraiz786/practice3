var Age = prompt(`Enter Your Age`);
if(isNaN(Age)){
    alert(`Enter a valid age`)
}else{
    var Year = new Date().getFullYear()-Age;
    document.write(`Your age is ${Age}<br>Your birth year is ${Year}`);
}