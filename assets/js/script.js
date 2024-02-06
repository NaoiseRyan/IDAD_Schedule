function main() {
    updateHTML();

    setTimeout(main, 1000);
}

function updateHTML(){
    document.getElementById("currentDayId").textContent = getCurrentDay();
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


window.onload = main();