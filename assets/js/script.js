function main() {
    updateHTML();
    setTimeout(main, 1000);
}

function updateHTML() {
    document.getElementById("currentDayId").textContent = getCurrentDay();
    updateCurrentClass();
}

function updateCurrentClass() {
    let currentHour = getCurrentHour();
    let currentClassTime = currentHour - 8;
    let currentDay = new Date().getDay();
    let timetableId = document.getElementsByTagName("table");

    if (isClassTimeValid() == true) {
        let currentCell =  timetableId[0].rows[currentClassTime].cells[currentDay];
        currentCell.style.backgroundColor = "red";
        currentCell.style.color = "white";
    }
    switch (getCurrentDay()) {
        case "Monday":
            document.getElementById("mondayId").style.backgroundColor = "rgb(0, 162, 255)";
            document.getElementById("mondayId").style.color = "white";
            break;
        case "Tuesday":
            document.getElementById("tuesdayId").style.backgroundColor = "rgb(0, 162, 255)";
            document.getElementById("tuesdayId").style.color = "white";
            break;
        case "Wednesday":
            document.getElementById("wednesdayId").style.backgroundColor = "rgb(0, 162, 255)";
            document.getElementById("wednesdayId").style.color = "white";
            break;
        case "Thursday":
            document.getElementById("thursdayId").style.backgroundColor = "rgb(0, 162, 255)";
            document.getElementById("thursdayId").style.color = "white";
            break;
        case "Friday":
            document.getElementById("fridayId").style.backgroundColor = "rgb(0, 162, 255)";
            document.getElementById("fridayId").style.color = "white";
            break;
        default:
            break;
    }
}

function isClassTimeValid() {
    let returnType = false;
    if (getCurrentHour() >= 9 && getCurrentHour() <= 16 && getCurrentDay() != "Saturday" && getCurrentDay() != "Sunday") {
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

window.onload = main();