function sum(){
    const FirstNumber = +prompt(`Enter First Number`);
    const SecondNumber = +prompt(`Enter Second Number`);
    if(isNaN(FirstNumber) || isNaN(SecondNumber)){
        alert(`Enter a valid number`)
    }else{
    const add = FirstNumber +  SecondNumber;
    alert(`Addition ${add}`);
      }
}
sum()