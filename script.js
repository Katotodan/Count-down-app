const timer = document.querySelectorAll("small");

let Onesecond = 1000; // 1s = 1000ms
let oneMinute = 60 * Onesecond; // 1m = 60 * 1000ms
let oneOur = 60 * oneMinute; // 1h = 60 * 60 * 1000ms
let oneDay = 24 * oneOur ; // 1d = 24 * 60 * 60 * 1000ms
called()

setInterval( called , 1000);

function called (){
    let date = new Date();
    let futer_month = new Date(date.getFullYear(), date.getMonth() +1 );
    let remaining = futer_month - date;
    let r_day = Math.floor(remaining / oneDay )
    let r_hour = Math.floor((remaining % oneDay) / oneOur)
    let r_minute = Math.floor(((remaining % oneDay) % oneOur) / oneMinute)
    let r_second = Math.floor((((remaining % oneDay) % oneOur) % oneMinute) / Onesecond)
    r_day < 10 ? r_day = "0" + r_day : r_day = r_day ;
    r_hour < 10 ? r_hour = "0" + r_hour : r_hour = r_hour ;
    r_minute < 10 ? r_minute = "0" + r_minute : r_minute = r_minute ;
    r_second < 10 ? r_second = "0" + r_second : r_second = r_second ;
    timer[0].innerHTML = r_day  ;
    timer[1].innerHTML = r_hour ;
    timer[2].innerHTML = r_minute ;
    timer[3].innerHTML = r_second ;
    
}
