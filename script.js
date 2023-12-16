let [hour,minute,second,milisecond] = [0,0,0,0];
let TimerDisplay = document.getElementById('displayTime');
let interval = null;

//start button
let startButton = document.getElementById('startBtn');
startButton.addEventListener('click',()=>{
    if (interval != null){
        clearInterval(interval);
    }
    interval = setInterval(startTimer,10);
});

//Stop button
let stopButton =document.getElementById('stopBtn');
stopButton.addEventListener('click',()=>{  
    startBtn.innerHTML='RESUME';
    clearInterval(interval);   
});
//reset button

let resetButton = document.getElementById('resetBtn');
resetButton.addEventListener('click',()=>{
    startBtn.innerHTML='START';
    clearInterval(interval);
    [hour,minute,second,milisecond] = [0,0,0,0];
    TimerDisplay.innerHTML = '00 : 00 : 00 : 000'
});

function startTimer (){
    //intially increase milisecond by 10
    milisecond += 10;
    //resetting and increasing the count 
    if (milisecond == 1000){
        milisecond = 0;
        second++;
        if (second == 60){
            second = 0;
            minute++;

            if (minute == 60){
                minute = 0;
                hour++;
            }

        }
    } 

    //logic for if timer is single digit then attach 0 infront of it, similarly for 3 digit number (milisecond)
    let h = hour <10 ? "0" + hour : hour;
    let m = minute < 10 ? "0" + minute : minute;
    let s = second < 10 ? "0" + second : second;
    let ms = milisecond < 10 ? "00" + milisecond : milisecond < 100 ? "0" + milisecond : milisecond;

    TimerDisplay.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;
}