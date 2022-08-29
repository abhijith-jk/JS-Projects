const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const calculatebtn = document.getElementById("calculate-btn");
const outputYears = document.getElementById("output-years");
const outputMonths = document.getElementById("output-months");
const outputDays = document.getElementById("output-days");

calculatebtn.addEventListener("click", ()=>{
    let today = new Date();
    const inputDate = new Date(document.getElementById("input-date").value);

    const birthDetails = {
        date: inputDate.getDate(),
        month: inputDate.getMonth() + 1,
        year: inputDate.getFullYear()
    }

    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth() + 1;
    let currentDate = today.getDate();

    leapChecker(currentYear);

    if (    (birthDetails.year > currentYear) ||
            (birthDetails.year == currentYear && birthDetails.month > currentMonth) ||
            (birthDetails.year == currentYear && birthDetails.month == currentMonth && birthDetails.date > currentDate)
        ) {
            alert("Dude! You ain't even born yet 😨?!");
            location.reload();
    }

    let birthYear, birthMonth, birthDate;

    birthYear = currentYear - birthDetails.year;

    if ( currentMonth >= birthDetails.month){
        birthMonth = currentMonth - birthDetails.month;
    }
    else {
        birthYear--;
        birthMonth = 12 + currentMonth - birthDetails.month;
    }

    if( currentDate >= birthDetails.date){
        birthDate = currentDate - birthDetails.date;
    }
    else{
        birthMonth--;
        let days = months[currentMonth - 2];
        birthDate =  days + currentDate - birthDetails.date;

        if (birthMonth < 0){
            birthMonth = 11;
            birthYear --;
        }
    }

    outputYears.innerText = birthYear;
    outputMonths.innerText = birthMonth;
    outputDays.innerText = birthDate;

})

function leapChecker(year){
    if ( year % 4 == 0 || (year % 100 == 0 && year % 400 == 0) ){
        months[1] = 29;
    }
    else 
        months[1] = 28;
    
    console.log(year, months[1]);
}