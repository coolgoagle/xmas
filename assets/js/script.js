// particles.js
particlesJS.load('particles-js', 'assets/json/particle-config.json', function () {
    console.log('callback - particles.js config loaded');
});

// time left
function countdown() {
    var now = new Date();
    //get the next christmas date
    var eventDate = new Date(now.getFullYear(), 11, 25);

    var currentTime = now.getTime();
    var eventTime = eventDate.getTime();

    var remTime = eventTime - currentTime;

    var s = Math.floor(remTime / 1000);
    var m = Math.floor(s / 60);
    var h = Math.floor(m / 60);
    var d = Math.floor(h / 24);
    var year = Math.floor(d / 365);

    h %= 24;
    m %= 60;
    s %= 60;

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    document.getElementById("days").textContent = d;
    document.getElementById("days").innerText = d;

    document.getElementById("hours").textContent = h;
    document.getElementById("minutes").textContent = m;
    document.getElementById("seconds").textContent = s;
    document.getElementById("year").textContent = now.getFullYear() + " Christmas Countdown";


    setTimeout(countdown, 1000);
}

countdown();