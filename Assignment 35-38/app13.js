function OccurrencesOfLetter(letter,str){
    let occr = 0;
    for(let i = 0; i<str.length; i++){
        if(str.at(i) === letter){
            occr++;
        }
    }
    return occr;
}
let InputStr = prompt(`Enter String`);
let InputLetter = prompt(`Enter Letter`);
let result = OccurrencesOfLetter(InputLetter,InputStr);
alert(`The Occurrence of ${InputLetter} in the string ${InputStr} is ${result} times`);