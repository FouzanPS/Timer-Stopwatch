let [milisecond, second, minute, hour] = [0, 0, 0, 0];
let cont = document.getElementsByClassName("time_set")[0];
let int = null;

function display() {
    milisecond += 10;
    if (milisecond === 1000) {
        milisecond = 0;
        second++;
        if (second === 60) {
            second = 0;
            minute++;
            if (minute === 60) {
                minute = 0;
                hour++;
            }
        }
    }
    let h = hour < 10 ? "0" + hour : hour;
    let m = minute < 10 ? "0" + minute : minute;
    let s = second < 10 ? "0" + second : second;
    let ms = milisecond < 10 ? "00" + milisecond : milisecond < 100 ? "0" + milisecond : milisecond;
    cont.innerHTML = `${h}:${m}:${s}:${ms}`;
}

function toggleStartPause() {
    let btn = document.getElementById("start-pause");
    if (btn.innerHTML === "Start") {
        btn.innerHTML = "Pause";
        btn.style.color = "yellow";
        int = setInterval(display, 10);
    } else if (btn.innerHTML === "Pause") {
        btn.innerHTML = "Start";
        btn.style.color = "rgb(106, 230, 106)";
        clearInterval(int);
    }
}

document.getElementById("start-pause").addEventListener("click", toggleStartPause);

document.getElementById("reset").addEventListener("click", () => {
    clearInterval(int);
    [milisecond, second, minute, hour] = [0, 0, 0, 0];
    cont.innerHTML = "00:00:00:000";
});


function handleSpaceBar(event) {
    if (event.keyCode === 32) { 
        toggleStartPause();
        event.preventDefault(); 
    }
}


document.addEventListener('keydown', handleSpaceBar);
