document.write(`Counting:`)
for(count1 = 0; count1 <=15; count1++){
    document.write(`${count1},`);
}
document.write(`<br>Reverse counting:`);
for(count2 = 10; count2 >=1; count2--){
    document.write(`${count2},`);
}
document.write(`<br>Even:`);
for(count3 = 0; count3 <=20; count3++){
    if((count3 % 2)===0){
    document.write(`${count3},`);
    }
}
document.write(`<br>Odd:`);
for(count4 = 0; count4 <=20; count4++){
    if((count4 % 2)!==0){
    document.write(`${count4},`);
    }
}
document.write(`<br>Series:`);
for(count5 = 0; count5 <=20; count5++){
    if((count5 % 2)===0){
    document.write(`${count5}k,`);
    }
}