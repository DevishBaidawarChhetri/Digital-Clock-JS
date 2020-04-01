function time(){

    const fullDate = new Date(); // Get Current Date and Time

    // assigned to corresponding variables
    var day = fullDate.getDay();
    var month = fullDate.getMonth();
    var date = fullDate.getDate();
    var year = fullDate.getFullYear();
    var hours = fullDate.getHours();
    var minutes = fullDate.getMinutes();
    var seconds = fullDate.getSeconds();
    var period = "AM";

    // AM / PM format editor
    if(hours == 0){
        hours = 12;
    }if(hours > 12){
        hours = hours - 12;
        period = "PM";
    }
    
    // To keep 0 in front of single digit number
    if(hours < 10){
        hours = "0"+ hours;
    }
    if(minutes < 10){
        minutes = "0"+ minutes;
    }
    if(seconds < 10){
        seconds = "0"+ seconds;
    }

    // Array number to days
    switch(day){
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
    }
    
    // Array number to month
    switch(month){
        case 0:
            month = "January";
            break;
        case 1:
            month = "February";
            break;
        case 2:
            month = "March";
            break;
        case 3:
            month = "April";
            break;
        case 4:
            month = "May";
            break;
        case 5:
            month = "June";
            break;
        case 6:
            month = "July";
            break;
        case 7:
            month = "August";
            break;
        case 8:
            month = "September";
            break;
        case 9:
            month = "October";
            break;
        case 10:
            month = "November";
            break;
        case 11:
            month = "December";
            break;
    }
    
    
    // Assigning value to corresponding IDs
    document.getElementById("years").innerHTML = year;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    document.getElementById("period").innerHTML = period;
    document.getElementById("days").innerHTML = day;
    document.getElementById("months").innerHTML = month;
    document.getElementById("dates").innerHTML = date;
}

setInterval(time, 1000);