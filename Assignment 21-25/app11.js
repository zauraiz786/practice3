var UserInput = prompt(`Enter a word`);
var TitleCase = UserInput[0].toUpperCase();
document.write(`User Input: ${UserInput}<br>Title case: ${TitleCase + UserInput.slice(1)}`)