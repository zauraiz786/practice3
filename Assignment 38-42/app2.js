function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}
const EnterYear = prompt(`Enter Year to check`);
const isLeap = isLeapYear(EnterYear);
if (isLeap) {
    console.log(`${EnterYear} is a leap year.`);
} else {
    console.log(`${EnterYear} is not a leap year.`);
}