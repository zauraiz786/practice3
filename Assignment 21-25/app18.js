var text = 'The quick brown fox run over the lazy dog';
text = text.toLowerCase();
var occurrence = 0;
for(var i = 0; i<text.length; i++){
    if(text.slice(i,i+3) === 'the'){
        occurrence++
    }
}
document.write(`Text: ${text} <br> There are ${occurrence} of the word 'the'`);