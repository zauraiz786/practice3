var a = ['cake','apple pie','cookie','chips','patties'];
var UserInput = prompt(`Welcome to Our Bakery what You want to order`);
var b = UserInput.toLowerCase();
var index = a.indexOf(b);
if(index === -1){
    alert(`We are sorry. ${UserInput} is not available in our bakery`);
}else{
    document.write(`${UserInput} is available at index ${index} in our bakery`);
}