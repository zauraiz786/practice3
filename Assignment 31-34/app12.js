var OldDate = new Date();
var currentYears = OldDate.getFullYear();
OldDate.setFullYear(currentYears-100);
alert(`100 years back, it was ${OldDate}`);