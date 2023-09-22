var currentTime = new Date();
var currentHour = currentTime.getHours();
if (currentHour < 12) {
  alert("It's AM");
} else {
  alert("It's PM");
}