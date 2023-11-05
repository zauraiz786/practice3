function removeVowels(sentence) {
    const vowels = "aeiouAEIOU";
    let result = "";
    for (let i = 0; i < sentence.length; i++) {
        const char = sentence[i];
        if (vowels.indexOf(char) === -1) {
            result += char;
        }
    }
    return result;
}
const inputSentence = "This is a sample sentence with vowels.";
const sentenceWithoutVowels = removeVowels(inputSentence);
console.log("Sentence without vowels: " + sentenceWithoutVowels);