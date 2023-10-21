let [milisecond, second, minute, hour] = [0, 0, 0, 0];
let cont = document.getElementsByClassName("time_set")[0]; // Used [0] to get the first element from the html with this class name
let int = null;

function display() {
    milisecond += 10;
    if (milisecond == 1000) {
        milisecond = 0;
        second++;
        if (second == 60) {
            second = 0;
            minute++;
            if (minute == 60) {
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

document.getElementById("start").addEventListener("click", () => {
    if (int !== null) {
        clearInterval(int);
    }
    int = setInterval(display, 10);
});

document.getElementById("pause").addEventListener("click", () => {
    clearInterval(int);
});

document.getElementById("reset").addEventListener("click", () => {
    clearInterval(int);
    [milisecond, second, minute, hour] = [0, 0, 0, 0];
    cont.innerHTML = "00:00:00:000";
});
