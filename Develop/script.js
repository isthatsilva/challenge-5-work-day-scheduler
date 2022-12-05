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

var userInput;
var hourSpan;

var hour = moment().hours();
console.log(hour);

var now = moment();
$('#currentDay').text(now.format('dddd') + ' , ' + now.format('MMMM DD YYYY'));

function createPage() {
    $('#9am').val(JSON.parse(localStorage.getItem('09:00 am')));
    $('#10am').val(JSON.parse(localStorage.getItem('10:00 am')));
    $('#11am').val(JSON.parse(localStorage.getItem('11:00 am')));
    $('#12pm').val(JSON.parse(localStorage.getItem('12:00 pm')));
    $('#1pm').val(JSON.parse(localStorage.getItem('01:00 pm')));
    $('#2pm').val(JSON.parse(localStorage.getItem('02:00 pm')));
    $('#3pm').val(JSON.parse(localStorage.getItem('03:00 pm')));
    $('#4pm').val(JSON.parse(localStorage.getItem('04:00 pm')));
    $('#5pm').val(JSON.parse(localStorage.getItem('05:00 pm')));
}

function background() {
    $('.form-control').each(function () {
        const timeTest = parseInt($(this).attr('id'));
        hour = parseInt(hour);
        
        if (timeTest < hour) {
            $(this).removeClass('future');
            $(this).removeClass('present');
            $(this).addClass('past');

            $('.past').css('background-color', '#d3d3d3');
        } else if (timeTest > hour) {
            $(this).removeClass('past');
            $(this).removeClass('present');
            $(this).addClass('future');

            $('.future').css('background-color', '#77dd77');
        } else {
            $(this).removeClass('past');
            $(this).removeClass('future');
            $(this).addClass('present');

            $('.present').css('background-color', '#ff6961');
        }
    });
}

$(document).ready(function () {
    createPage()
    background()

    $('.savebtn').on('click', function () {
        userInput = $(this).siblings('.form-control').val().trim();
        console.log(userInput);
        hourSpan = $(this).siblings('.input-group-prepend').val();
        localStorage.setItem(hourSpan, JSON.stringify(userInput));
    })
});