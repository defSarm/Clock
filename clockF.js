function displayTime(){
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var mins = dateTime.getMinutes();
    var secs = dateTime.getSeconds();
    var ampm = document.getElementById('ampm');

    if (hrs >=12 ){
        ampm.innerHTML ="PM";
    }else{
        ampm.innerHTML="AM";
    }

    if (hrs>12){
        hrs = hrs-12
    }

    document.getElementById('hours').innerHTML= hrs;
    document.getElementById('minutes').innerHTML= mins;
    document.getElementById('seconds').innerHTML= secs;

}

setInterval(displayTime, 10);