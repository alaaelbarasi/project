

function clock(){
    const fullDate= new Date();
    console.log(fullDate);
    var hr= fullDate.getHours();
    var min= fullDate.getMinutes();
    var sec= fullDate.getSeconds();
    if (hr<10){
        hr="0"+hr;
    }
    if (min<10){
        min="0"+min;
    }
    if (sec<10){
        sec="0"+sec;
    }
    document.getElementById("clock").innerHTML="Time "+hr+":"+min+":"+sec;
}

setInterval(clock,1000);


