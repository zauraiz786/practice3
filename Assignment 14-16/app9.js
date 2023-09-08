var color = [`Red`, `Pink`, `Blue`, `Green`, `Black`, `White`];
var userColor = prompt(`What color you want to add at the bigining of the list:`);
if (+userColor) {
    document.write(`Please Enter a valid color.`)
}
else {
    color.unshift(userColor);
    document.write(color.join('<br>'))
}
var userColor = prompt(`What color you want to add at the end of the list:`);
if (+userColor) {
    document.write(`Please Enter a valid color.`)
}
else {
    color.push(userColor);
    document.write(color.join('<br>'))
}