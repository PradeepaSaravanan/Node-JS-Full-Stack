
var interval;
var seconds;
//console.log( "result",days,hrs,mins,secs);
function setTimers() {
    var days = document.getElementById("daysIn").value;
    var hrs = document.getElementById("hoursIn").value;
    var mins = document.getElementById("minsIn").value;
    var secs = document.getElementById("secsIn").value;
    
    seconds = (Number(days) * 24 * 3600) + (Number(hrs) *3600) + (Number(mins) * 60) + Number(secs);
    console.log("Total Seconds",seconds);
    var days1 = Math.floor(seconds / (24 *3600));
    var hrs1 = Math.floor(seconds %(24 *3600)/ (3600));
    var mins1 = Math.floor(seconds % 3600/ 60);
    var secs1=Math.floor(seconds%60);


//     var days1 = Math.floor(seconds / (24 *3600));
//     seconds -= days * 24 *3600;
//    // console.log("days:", days1);
//     var hrs1 = Math.floor(seconds / (3600));
//    // console.log("hrs1:",hrs1);
//     seconds -= hrs * 3600;
//     var mins1 = Math.floor(seconds / 60);
//    // console.log("mins1:", mins1);
//    seconds -= mins * 60;
//   //  console.log("secs:", seconds);
   

    console.log(days, hrs, mins, secs);
    document.getElementById("days").innerHTML = days1;
    document.getElementById("hours").innerHTML = hrs1;
    document.getElementById("mins").innerHTML = mins1;
    document.getElementById("secs").innerHTML = secs1;

    document.getElementById("daysIn").value = "0";
    document.getElementById("hoursIn").value = "0";
    document.getElementById("minsIn").value = "0";
    document.getElementById("secsIn").value = "0";
    console.log("result", days, hrs, mins, secs);
}



function start() {
    var days = document.getElementById("days").innerHTML;
    var hrs = document.getElementById("hours").innerHTML;
    var mins = document.getElementById("mins").innerHTML;
    var secs = document.getElementById("secs").innerHTML;

    interval = setInterval(display, 10);
    function display() {

        if (secs> 0) {
            secs--;
            document.getElementById("secs").innerHTML = secs;
        }
        else if (secs == 0 && mins> 0) {
            mins--;
            document.getElementById('mins').innerHTML = mins;
            secs = 60;
        }
        else if (secs == 0 && mins == 0 && hrs > 0) {
            hrs--;
            document.getElementById('hours').innerHTML = hrs;
            mins = 60;
        }
        else if (secs == 0 && mins== 0 && hrs == 0 && days > 0) {
            days--;
            document.getElementById('days')
            hrs = 24;
        }

    }

}

function reset() {
    stop();
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("mins").innerHTML = "00";
    document.getElementById("secs").innerHTML = "00"
}
function stop() {
    clearInterval(interval);
}

