const currentDate = moment().format('dddd') + ' '+ moment().format('Do MMM YYYY');
const currentTime = moment().format('h:mm:ss a');
console.log(currentDate);
console.log(currentTime);

var nine = $('#9am');
var ten = $('#10am');
var eleven = $('#11am');
var twelve = $('#12pm');
var thirteen = $('#13pm');
var fourteen = $('#14pm');
var fifteen = $('#15pm');
var sixteen = $('#16pm');
var seventeen = $('#17pm');

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
    $('#13pm').val(JSON.parse(localStorage.getItem('01:00 pm')));
    $('#14pm').val(JSON.parse(localStorage.getItem('02:00 pm')));
    $('#15pm').val(JSON.parse(localStorage.getItem('03:00 pm')));
    $('#16pm').val(JSON.parse(localStorage.getItem('04:00 pm')));
    $('#17pm').val(JSON.parse(localStorage.getItem('05:00 pm')));
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
        text = $(this).siblings('.form-control').val().trim();
        console.log(text);
        hour = $(this).siblings('.input-group-prepend').val();
        localStorage.setItem(hour, JSON.stringify(text));
    })
});