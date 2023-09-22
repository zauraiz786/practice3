var month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
var day = [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ];
var CurMonth = month[new Date().getMonth()];
var CurDay = day[new Date().getDay()];
if(CurDay === 'Sat' || CurDay === 'Sun'){
    document.write(`Its Fun day`);
}else{
document.write(`${Date()} <br> Current month: ${CurMonth} <br> Today is ${CurDay}`);
}