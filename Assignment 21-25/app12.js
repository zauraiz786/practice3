var num = prompt(`Enter a number`);
if(isNaN(num)){
    alert(`Please Enter a valid number with point(.) in it`);
}else if(num.includes('.'))
{ for(var i = 0; i < num.length; i++){
    if(num.at(i) === '.'){
        document.write(num.replace('.',''));
    }
    }
}else {
    alert(`please Enter a number with point(.) in it`);
}