var a = [`cake`,`apple pie`,`cookie`,`chips`,`patties`];
var b = prompt(`Welcome to Khan's Bakers. What do you want to order sir/ma'am?`);
if(b.toLowerCase()===a[0]){
    document.write(`Yes ${b} is available at index 0 in our bakery`)
}else if(b.toLowerCase()===a[1]){
    document.write(`Yes ${b} is available at index 1 in our bakery`)
}else if(b.toLowerCase()===a[2]){
    document.write(`Yes ${b} is available at index 2 in our bakery`)
}else if(b.toLowerCase()===a[3]){
    document.write(`Yes ${b} is available at index 3 in our bakery`)
}else if(b.toLowerCase()===a[4]){
    document.write(`Yes ${b} is available at index 4 in our bakery`)
}else {
    document.write(`We are sorry. ${b} is not available in our bakery`)
}
// var found = false;
// for(i=0; i<a.length;i++){
//     if(a[i].toLowerCase()===b){
//         found = true;
//         break;
//     }
// }
// if(found){
//     alert(`Found`)
// }