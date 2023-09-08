var studentScore = [320,230,480,120];
document.write(`Scores of Students : ${studentScore}<br>`);
var sorted = studentScore.sort((a,b)=>a-b);
document.write(`Ordered Score of Students : ${sorted}`)