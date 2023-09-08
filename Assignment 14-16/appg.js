var color = [`Red`, `Pink`, `Blue`, `Green`, `Black`, `White`];
var userIndex = +prompt(`At which index you want to delete color or colors`);
var userdelete = +prompt(`How many colors you want to delete`);
if(isNaN(userIndex) || isNaN(userdelete)){
    document.write(`Please Enter a valid Index`)
}
else{
    color.splice(userIndex,userdelete + 1);
    document.write(`Colors Remaining:<br>`)
    document.write(color.join(`<br>`));
}