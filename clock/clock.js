let timer = document.getElementById('timer');
let start_time = new Date().getTime();

const reset = document.getElementById('reset-button');
reset.addEventListener('click',function(){
    start_time = new Date();
    updateTimer();
});



function secondToTime(time)
{
    time = 2000*60 - 240*time;

    let day = Math.floor(time/(3600*24));
    if (day<10) day="0"+day;
    time=time%(3600*24);

    let hour = Math.floor(time/3600);
    if (hour<10) hour="0"+hour; 
    time = time%3600;

    let min = Math.floor(time/60);
    if (min<10) min="0"+min;
    time = time%60;

    let sec = Math.floor(time);
    if (sec<10) sec="0"+sec;

    return day+" day. "+hour+":"+min+":"+sec;
}


function updateTimer()
{
    let d = new Date();
    let time = (d.getTime()-start_time)/1000; //time in seconds
    timer.innerHTML = secondToTime(time);
    setTimeout(updateTimer,10);
}
