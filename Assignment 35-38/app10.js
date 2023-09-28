function isPalindrome(str) {
    str = str.replace(/ /g, "").toLowerCase();
    for (let i = 0, j = str.length - 1; i < j; i++,j--){
      if (str[i] !== str[j]) {
        return false; 
      }
    }
    return true;
}
const inputString = prompt(`Enter a word`);
const result = isPalindrome(inputString);
if (result) {
    alert(`"${inputString}" is a palindrome.`);
} else {
    alert(`"${inputString}" is not a palindrome`);
}