const currentDate = moment().format('dddd') + ' '+ moment().format('Do MMM YYYY');
const currentTime = moment().format('h:mm:ss a');
console.log(currentDate);
console.log(currentTime);

var nine = $('#9am');
var ten = $('#10am');
var eleven = $('#11am');
var twelve = $('#12pm');
var thirteen = $('#1pm');
var fourteen = $('#2pm');
var fifteen = $('#3pm');
var sixteen = $('#4pm');
var seventeen = $('#5pm');

var hour = moment().hours();
console.log(hour);

var now = moment();
$('#currentDay').text(now.format('dddd') + ' , ' + now.format('MMMM DD YYYY'));

