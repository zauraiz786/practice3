var StartDate = new Date('jan 01, 2015');
var currentDate = new Date();
var timeDifference = currentDate - StartDate;
var daysPassed = Math.floor(timeDifference / (1000 * 60));
document.write(`On reference date ${currentDate} <br> ${timeDifference} seconds had passed since beginning of 2015`);