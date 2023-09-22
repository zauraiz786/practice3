var ramadanStartDate = new Date('June 18, 2015');
var currentDate = new Date();
var timeDifference = currentDate - ramadanStartDate;
var daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
document.write("Number of days passed since 1st Ramadan 2015: " + daysPassed);