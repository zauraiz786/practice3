var pass = prompt(`Enter Password`);
var hasNumber = false;
for(var i = 0; i<pass.length; i++){
    var char = pass.at(i);
    if(!isNaN(char)){
        hasNumber = true;
    }
}
if(isNaN(pass[0]) && pass.length>=6){
    document.write(`Entered Password: ${pass}`)
    if(!hasNumber){
        alert(`Password must contain numbers`);
    }
}else if(!isNaN(pass[0])){
    alert(`Password can not begin with a number`);
}
else if(pass.length<6){
    alert(`Password length must be at least 6 characters long`);
}