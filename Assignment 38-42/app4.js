function average(eng, urdu, math) {
    return ((eng + urdu + math) / 3);
}
function percentage(eng, urdu, math) {
    return (((eng + urdu + math) / 300) * 100);
}
function Marks(eng, urdu, math) {
    const avg = average(eng, urdu, math);
    const per = percentage(eng, urdu, math);
    console.log(`Marks in English: ${eng}`);
    console.log(`Marks in Urdu: ${urdu}`);
    console.log(`Marks in Math: ${math}`);
    console.log(`Average Marks: ${avg}`);
    console.log(`Percentage: ${per}%`);
}
const English = +prompt("Enter English marks");
const Urdu = +prompt("Enter Urdu marks");
const Mathematics = +prompt("Enter Maths marks");
Marks(English, Urdu, Mathematics);