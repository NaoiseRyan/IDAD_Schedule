function main() {
    if(getCurrentHour() != pageLoadedHour){
        location.reload();
    }
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
        let currentClassCell =  timetableId[0].rows[currentClassTime].cells[currentDay];
        currentClassCell.style.backgroundColor = "rgb(0, 162, 255)";
        currentClassCell.style.color = "white";

        let currentTimeCell =  timetableId[0].rows[currentClassTime].cells[0]; 
        currentTimeCell.style.backgroundColor = "rgb(0, 162, 255)";
        currentTimeCell.style.color = "white";

        let currentDayCell =  timetableId[0].rows[0].cells[currentDay]; 
        currentDayCell.style.backgroundColor = "rgb(0, 162, 255)";
        currentDayCell.style.color = "white";   
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

var pageLoadedHour = getCurrentHour();

window.onload = main();