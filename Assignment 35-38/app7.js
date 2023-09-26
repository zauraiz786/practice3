function counting(){
    const StartNumber = +prompt(`Enter starting number`);
    const EndNumber = +prompt(`Enter ending number`);
    if(!isNaN(StartNumber) || !isNaN(EndNumber)){
        for(var i = StartNumber; i<= EndNumber ; i++){
            document.write(i + '<br>');
        }
    }else{
        alert(`Enter a valid number`);
    }
}
counting();