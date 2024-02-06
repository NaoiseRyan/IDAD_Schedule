function main() {
    updateHTML();
    setTimeout(main, 1000);
}

function updateHTML() {
    document.getElementById("currentDayId").textContent = getCurrentDay();
    let inClassTimeRange = isClassTimeRange();
    console.log(inClassTimeRange)
}

function isClassTimeRange() {
    let currentHour = getCurrentHour();
    let isWithinRange = false;
    switch (getCurrentDay()) {
        case "Monday":
            if (currentHour >= 9 && currentHour <= 16) {
                isWithinRange = true;
            }
            break;
        case "Tuesday":
            if (currentHour >= 9 && currentHour <= 14) {
                isWithinRange = true;
            }
            break;
        case "Wednesday":
                isWithinRange = false;
            break;
        case "Thursday":
            if (currentHour >= 9 && currentHour <= 12) {
                isWithinRange = true;
            }
            break;
        case "Friday":
            if (currentHour >= 11 && currentHour <= 12) {
                isWithinRange = true;
            }
            break;
        default:
            isWithinRange = false;
            break;
    }
    return isWithinRange;
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