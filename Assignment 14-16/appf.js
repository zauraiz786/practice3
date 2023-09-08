var color = [`Red`, `Pink`, `Blue`, `Green`, `Black`, `White`];
var userIndex = +prompt(`At which index you want to Add the color`);
var userColor = prompt(`Enter a clolor`);
if(isNaN(userIndex) || !isNaN(userColor)){
    document.write(`Please Enter a valid Index or Color`)
}
else{
    color.splice(userIndex,0, userColor);
    document.write(color.join(`<br>`));
}