
let timer_display = document.getElementById('timer_display');
let start = document.getElementById('Start');
let stop = document.getElementById('Stop');
let reset = document.getElementById('Reset');

let msec = 0;
let sec = 0;
let mins = 0;

let timerId = null;

start.addEventListener('click',function(){
    if(timerId != null)
    {
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer,10);
});

stop.addEventListener('click',function(){
    clearInterval(timerId);
});

reset.addEventListener('click',function(){
    clearInterval(timerId);
    timer_display.innerHTML= `00 : 00 : 00`;
    msec = sec = mins = 0;
});


function startTimer()
{
     msec++;
     if( msec == 100)
     {
        msec = 0;
        sec++;
        if(sec == 60)
        {
            sec = 0;
            mins++;
        }
     }


let msecString = msec < 10 ? `0${msec}` : msec ;
let secString = sec < 10 ? `0${sec}` : sec ;
let minString = mins < 10 ? `0${mins}` : mins ;

timer_display.innerHTML = `${minString} : ${secString} : ${msecString}`;
}