let percentage = document.querySelector('.percentage');
let percent = document.querySelector('.percent');
let start = 0;
let rechargeBattery = '';    

//navigator.getBattery().then(function(battery){
//    percentage.style.width = battery.level = 100 + '%';
//    percent.innerHTML = battery.level = 100 + '%';
//})


let sec = document.querySelector('.sec');
let toggle = document.querySelector('.toggle');
toggle.onclick = function(){
    sec.classList.toggle('dark');
}

let change = document.querySelector('.change');
let close = document.querySelector('.close');
change.onclick = function(){
    change.style.opacity = 0;
    change.style.visibility = 'hidden';
    close.style.opacity = 1;
    close.style.visibility = 'visible';
    start = 0;
    rechargeBattery = setInterval(batteryChange, 1000);
}

close.onclick = function(){
    change.style.opacity = 1;
    change.style.visibility = 'visible';
    close.style.opacity = 0;
    close.style.visibility = 'hidden';
    clearInterval(rechargeBattery);
}

function batteryChange() {
    start = start + 1;
    percentage.style.width = start + '%';
    percent.innerHTML = start + '%';
    if (start == 100){
        clearInterval(rechargeBattery);
    }
}
 
