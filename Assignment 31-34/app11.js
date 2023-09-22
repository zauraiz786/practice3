var OldDate = new Date();
var currentHours = OldDate.getHours();
OldDate.setHours(currentHours-1);
document.write(`current date: ${new Date()}<br> 1 Hour ago, it was: ${OldDate}`);