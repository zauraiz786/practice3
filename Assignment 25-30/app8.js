var UserNum = prompt(`Enter a number between 1 and 10`);
var ran = Math.ceil(Math.random()*10);
if(isNaN(UserNum)){
    alert(`Enter a valid number between 1 to 10`);
}else if(UserNum == ran){
    alert(`Congratulations You win`);
}else{
    alert(`Try again!`);
}