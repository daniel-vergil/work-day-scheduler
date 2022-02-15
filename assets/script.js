const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const today = new Date()
$('#currentDay').html(days[today.getDay()] + ", " + months[today.getMonth()] + " " + today.getDate())

const businessHours = ['09:00AM', '10:00AM', '11:00AM', '12:00PM', '01:00PM', '02:00PM', '03:00PM', '04:00PM', '05:00PM'];

for (var i = 1; i <= 9; i++) {
    var tData = "<td class='row'></td>";
    $('.time-block').append(tData);
}

businessHours.forEach(hours => {
    var row1 = "<tr class='hour'></tr>"
    var rowHours = hours;
    var row1Close = "";
    var row2 = "<tr class='scheduleText'></tr>";
    var row3 = "<tr class='submitSchedule'></tr>";
    var trSelector = ".row:nth-child(" + (businessHours.indexOf(hours) + 1) + ")";
    $(trSelector).append(row1, row1Close, row2, row3);
    var hourRowSelector = ".row:nth-child(" + (businessHours.indexOf(hours) + 1) + ") " + "tr:nth-child(1)";
    $(hourRowSelector).html(rowHours);
})
var textArea = "<textarea class='description'></textarea>";
$('.scheduleText').append(textArea);
for (var i=1; i<=9; i++){
var submitBtn = "<button class='submitBtn"+i+" saveBtn'></button>";
var submitScheduleSelector = ".row:nth-child("+i+") .submitSchedule";
$(submitScheduleSelector).append(submitBtn);
}
var submitBtnIcon = "<img src='./assets/images/submit-btn-icon.png'></img>";
$('.saveBtn').append(submitBtnIcon);

if (today.getHours() < 9) {
    $('.row').attr('class', 'row future');
} else if (today.getHours() > 17) {
    $('.row').attr('class', 'row past');
} else {
    switch (today.getHours()) {
        case 9:
            $('.row:nth-child(1)').attr('class', 'row present');
            $('.row:nth-child(2)').attr('class', 'row future');
            $('.row:nth-child(3)').attr('class', 'row future');
            $('.row:nth-child(4)').attr('class', 'row future');
            $('.row:nth-child(5)').attr('class', 'row future');
            $('.row:nth-child(6)').attr('class', 'row future');
            $('.row:nth-child(7)').attr('class', 'row future');
            $('.row:nth-child(8)').attr('class', 'row future');
            $('.row:nth-child(9)').attr('class', 'row future');
            break;
        case 10:
            $('.row:nth-child(1)').attr('class', 'row past');
            $('.row:nth-child(2)').attr('class', 'row present');
            $('.row:nth-child(3)').attr('class', 'row future');
            $('.row:nth-child(4)').attr('class', 'row future');
            $('.row:nth-child(5)').attr('class', 'row future');
            $('.row:nth-child(6)').attr('class', 'row future');
            $('.row:nth-child(7)').attr('class', 'row future');
            $('.row:nth-child(8)').attr('class', 'row future');
            $('.row:nth-child(9)').attr('class', 'row future');
            break;
        case 11:
            $('.row:nth-child(1)').attr('class', 'row past');
            $('.row:nth-child(2)').attr('class', 'row past');
            $('.row:nth-child(3)').attr('class', 'row present');
            $('.row:nth-child(4)').attr('class', 'row future');
            $('.row:nth-child(5)').attr('class', 'row future');
            $('.row:nth-child(6)').attr('class', 'row future');
            $('.row:nth-child(7)').attr('class', 'row future');
            $('.row:nth-child(8)').attr('class', 'row future');
            $('.row:nth-child(9)').attr('class', 'row future');
            break;
        case 12:
            $('.row:nth-child(1)').attr('class', 'row past');
            $('.row:nth-child(2)').attr('class', 'row past');
            $('.row:nth-child(3)').attr('class', 'row past');
            $('.row:nth-child(4)').attr('class', 'row present');
            $('.row:nth-child(5)').attr('class', 'row future');
            $('.row:nth-child(6)').attr('class', 'row future');
            $('.row:nth-child(7)').attr('class', 'row future');
            $('.row:nth-child(8)').attr('class', 'row future');
            $('.row:nth-child(9)').attr('class', 'row future');
            break;
        case 13:
            $('.row:nth-child(1)').attr('class', 'row past');
            $('.row:nth-child(2)').attr('class', 'row past');
            $('.row:nth-child(3)').attr('class', 'row past');
            $('.row:nth-child(4)').attr('class', 'row past');
            $('.row:nth-child(5)').attr('class', 'row present');
            $('.row:nth-child(6)').attr('class', 'row future');
            $('.row:nth-child(7)').attr('class', 'row future');
            $('.row:nth-child(8)').attr('class', 'row future');
            $('.row:nth-child(9)').attr('class', 'row future');
            break;
        case 14:
            $('.row:nth-child(1)').attr('class', 'row past');
            $('.row:nth-child(2)').attr('class', 'row past');
            $('.row:nth-child(3)').attr('class', 'row past');
            $('.row:nth-child(4)').attr('class', 'row past');
            $('.row:nth-child(5)').attr('class', 'row past');
            $('.row:nth-child(6)').attr('class', 'row present');
            $('.row:nth-child(7)').attr('class', 'row future');
            $('.row:nth-child(8)').attr('class', 'row future');
            $('.row:nth-child(9)').attr('class', 'row future');
            break;
        case 15:
            $('.row:nth-child(1)').attr('class', 'row past');
            $('.row:nth-child(2)').attr('class', 'row past');
            $('.row:nth-child(3)').attr('class', 'row past');
            $('.row:nth-child(4)').attr('class', 'row past');
            $('.row:nth-child(5)').attr('class', 'row past');
            $('.row:nth-child(6)').attr('class', 'row past');
            $('.row:nth-child(7)').attr('class', 'row present');
            $('.row:nth-child(8)').attr('class', 'row future');
            $('.row:nth-child(9)').attr('class', 'row future');
            break;
        case 16:
            $('.row:nth-child(1)').attr('class', 'row past');
            $('.row:nth-child(2)').attr('class', 'row past');
            $('.row:nth-child(3)').attr('class', 'row past');
            $('.row:nth-child(4)').attr('class', 'row past');
            $('.row:nth-child(5)').attr('class', 'row past');
            $('.row:nth-child(6)').attr('class', 'row past');
            $('.row:nth-child(7)').attr('class', 'row past');
            $('.row:nth-child(8)').attr('class', 'row present');
            $('.row:nth-child(9)').attr('class', 'row future');
            break;
        case 17:
            $('.row:nth-child(1)').attr('class', 'row past');
            $('.row:nth-child(2)').attr('class', 'row past');
            $('.row:nth-child(3)').attr('class', 'row past');
            $('.row:nth-child(4)').attr('class', 'row past');
            $('.row:nth-child(5)').attr('class', 'row past');
            $('.row:nth-child(6)').attr('class', 'row past');
            $('.row:nth-child(7)').attr('class', 'row past');
            $('.row:nth-child(8)').attr('class', 'row past');
            $('.row:last-child').attr('class', 'row present');
            break;
    }
}
if (localStorage.getItem('schedule')) {
   var schedule = JSON.parse(localStorage.getItem('schedule'));
   if (schedule.schedule.createdAtDate != today.getDate()) {localStorage.clear();}
} 

if (!localStorage.getItem('schedule'))
{
    const schedule = `{
       "schedule":{
          "nineam":{
             "message":""
          },
          "tenam":{
             "message":""
          },
          "elevenam":{
             "message":""
          },
          "twelvepm":{
             "message":""
          },
          "onepm":{
             "message":""
          },
          "twopm":{
             "message":""
          },
          "threepm":{
             "message":""
          },
          "fourpm":{
             "message":""
          },
          "fivepm":{
             "message":""
          },
          "createdAtDate":""
       }
    }`
    var jsonSchedule = JSON.parse(schedule);
    jsonSchedule.schedule.createdAtDate = today.getDate();
    localStorage.setItem('schedule', JSON.stringify(jsonSchedule));
  }

var saveScheduleToLocalStorage = (locator) => {
    var scheduleList = JSON.parse(localStorage.getItem('schedule'));
   if (locator.includes('submitBtn1')){
     var message = $('.row:nth-child(1) .scheduleText textarea').val();
     scheduleList.schedule.nineam.message = message;
   } else if (locator.includes('submitBtn2')){
    var message = $('.row:nth-child(2) .scheduleText textarea').val();
    scheduleList.schedule.tenam.message = message;
   }
   else if (locator.includes('submitBtn3')){
    var message = $('.row:nth-child(3) .scheduleText textarea').val();
    scheduleList.schedule.elevenam.message = message;
   }
   else if (locator.includes('submitBtn4')){
    var message = $('.row:nth-child(4) .scheduleText textarea').val();
    scheduleList.schedule.twelvepm.message = message;
   }
   else if (locator.includes('submitBtn5')){
    var message = $('.row:nth-child(5) .scheduleText textarea').val();
    scheduleList.schedule.onepm.message = message;
   }
   else if (locator.includes('submitBtn6')){
    var message = $('.row:nth-child(6) .scheduleText textarea').val();
    scheduleList.schedule.twopm.message = message;
   }
   else if (locator.includes('submitBtn7')){
    var message = $('.row:nth-child(7) .scheduleText textarea').val();
    scheduleList.schedule.threepm.message = message;
   }
   else if (locator.includes('submitBtn8')){
    var message = $('.row:nth-child(8) .scheduleText textarea').val();
    scheduleList.schedule.fourpm.message = message;
   }
   else if (locator.includes('submitBtn9')){
    var message = $('.row:nth-child(9) .scheduleText textarea').val();
    scheduleList.schedule.fivepm.message = message;
   }
   localStorage.setItem('schedule', JSON.stringify(scheduleList));
}

$('.saveBtn').on("click", function(event){
   var className = event.currentTarget.className;
   saveScheduleToLocalStorage(className);
});

var scheduleJson = JSON.parse(localStorage.getItem('schedule'));
$('.row:nth-child(1) .scheduleText textarea').val(scheduleJson.schedule.nineam.message);
$('.row:nth-child(2) .scheduleText textarea').val(scheduleJson.schedule.tenam.message);
$('.row:nth-child(3) .scheduleText textarea').val(scheduleJson.schedule.elevenam.message);
$('.row:nth-child(4) .scheduleText textarea').val(scheduleJson.schedule.twelvepm.message);
$('.row:nth-child(5) .scheduleText textarea').val(scheduleJson.schedule.onepm.message);
$('.row:nth-child(6) .scheduleText textarea').val(scheduleJson.schedule.twopm.message);
$('.row:nth-child(7) .scheduleText textarea').val(scheduleJson.schedule.threepm.message);
$('.row:nth-child(8) .scheduleText textarea').val(scheduleJson.schedule.fourpm.message);
$('.row:nth-child(9) .scheduleText textarea').val(scheduleJson.schedule.fivepm.message);
