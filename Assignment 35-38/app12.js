function LongestWord(text){
    let arr = text.split(' ');
    let word = '';
    for(let i = 0; i < arr.length; i++){
        if(arr[i].length > word.length){
            word = arr[i];
        }
    }
    return word;
}
const inputString = prompt(`Enter String`);
const Longest = LongestWord(inputString);
alert(`Longest Word in the given string is '${Longest}'`)