function countSuccessiveVowels(text) {
    text = text.toLowerCase();
    const vowels = 'aeiou';
    let count = '';
    for (let i = 0; i < text.length - 1; i++) {
        const currentChar = text[i];
        const nextChar = text[i + 1];
        if (vowels.includes(currentChar) && vowels.includes(nextChar)) {
            count += currentChar + nextChar + ' ';
        }
    }
    return count;
}
const inputText = "Pleases read this application and give me gratuity";
const occurrences = countSuccessiveVowels(inputText);
console.log(`Number of occurrences of two vowels in succession: ${occurrences}`);