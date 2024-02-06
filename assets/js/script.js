function main() {
    updateHTML();
    setTimeout(main, 1000);
}

function updateHTML() {
    document.getElementById("currentDayId").textContent = getCurrentDay();
    updateCurrentClass();
}

function updateCurrentClass() {
    var currentHour = getCurrentHour();
    var currentClassTime = currentHour - 8;
    var timetableId = document.getElementsByTagName("table");
    switch (getCurrentDay()) {
        case "Monday":
            document.getElementById("mondayId").style.backgroundColor = "rgb(0, 162, 255)";
            document.getElementById("mondayId").style.color = "white";
            if (isClassTimeValid()) {
                timetableId[0].rows[currentClassTime].cells[1].style.backgroundColor = "red";
                timetableId[0].rows[currentClassTime].cells[1].style.color = "white";
            }
            break;
        case "Tuesday":
            document.getElementById("tuesdayId").style.backgroundColor = "rgb(0, 162, 255)";
            document.getElementById("tuesdayId").style.color = "white";
            if (isClassTimeValid()) {
                timetableId[0].rows[currentClassTime].cells[2].style.backgroundColor = "red";
                timetableId[0].rows[currentClassTime].cells[2].style.color = "white";
            }
            break;
        case "Wednesday":
            document.getElementById("wednesdayId").style.backgroundColor = "rgb(0, 162, 255)";
            document.getElementById("wednesdayId").style.color = "white";
            if (isClassTimeValid()) {
                timetableId[0].rows[currentClassTime].cells[3].style.backgroundColor = "red";
                timetableId[0].rows[currentClassTime].cells[3].style.color = "white";
            }
            break;
        case "Thursday":
            document.getElementById("thursdayId").style.backgroundColor = "rgb(0, 162, 255)";
            document.getElementById("thursdayId").style.color = "white";
            if (isClassTimeValid()) {
                timetableId[0].rows[currentClassTime].cells[4].style.backgroundColor = "red";
                timetableId[0].rows[currentClassTime].cells[4].style.color = "white";

            }
            break;
        case "Friday":
            document.getElementById("fridayId").style.backgroundColor = "rgb(0, 162, 255)";
            document.getElementById("fridayId").style.color = "white";
            if (isClassTimeValid()) {
                timetableId[0].rows[currentClassTime].cells[5].style.backgroundColor = "red";
                timetableId[0].rows[currentClassTime].cells[5].style.color = "white";
            }
            break;
        default:
            break;
    }
}

function isClassTimeValid() {
    let returnType = false;
    if (getCurrentHour() >= 9 && getCurrentHour <= 16) {
        returnType = true;
    }
    else {
        returnType = false;
    }
    return returnType;
}

function getCurrentDay() {
    let currentDayValue = new Date().getDay();
    let currentDay = null;
    switch (currentDayValue) {
        case 1:
            currentDay = "Monday";
            break;
        case 2:
            currentDay = "Tuesday";
            break;
        case 3:
            currentDay = "Wednesday";
            break;
        case 4:
            currentDay = "Thursday";
            break;
        case 5:
            currentDay = "Friday";
            break;
        case 6:
            currentDay = "Saturday";
            break;
        case 7:
            currentDay = "Sunday";
            break;
    }
    return currentDay
}
function getCurrentHour() {
    let currentHour = new Date().getHours();
    return currentHour
}


var timeTable =
    [
        [1, 1, 2, 2, 0, 3, 4, 1],
        [2, 3, 2, 0, 4, 4, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 3, 3, 0, 0, 0, 0],
        [0, 0, 3, 3, 0, 0, 0, 0]
    ]
/*
    0 = No class 
    1 = Intro to 3d Digital Art
    2 = Ui Prototyping
    3 = Web Ui Design
    4 = Design Psycology
*/

window.onload = main();