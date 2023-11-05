let distanceFromUser = parseInt(prompt('Enter the distance between two countries in km'));
function metersFun(){
    return (distanceFromUser * 1000);
}
function feetFun(){
    return (distanceFromUser * 3281);
}
function inchesFun(){
    return (distanceFromUser * 39370);
}
function centimeterFun(){
    return (distanceFromUser * 100000);
}
let meter = +metersFun();
let feet = +feetFun();
let inches =  +inchesFun();
let centimeter =  +centimeterFun();

console.log(`The distance between two countries is ${distanceFromUser}km`);
console.log(`The distance between two countries is ${(meter).toFixed(2)}   meters`);
console.log(`The distance between two countries is ${(feet).toFixed(2)} feet`)
console.log(`The distance between two countries is ${(inches).toFixed(2)} inches`)
console.log(`The distance between two countries is ${(centimeter).toFixed(2)} centimeter`)