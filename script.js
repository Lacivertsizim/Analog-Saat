const sec = document.querySelector(".secs")
const min = document.querySelector(".mins")
const hourss = document.querySelector(".hours")

function tiktak() {
    const newDate = new Date();
    let seconds = new Date().getSeconds();
    let minutes = new Date().getMinutes();
    let hours = new Date().getHours();

    sec.style.transform = `rotate(${180 + (seconds * 6)}deg)`
    min.style.transform = `rotate(${180 + (minutes * 6)}deg)`
    hourss.style.transform = `rotate(${180 + (hours * 6)}deg)`;
}

setInterval(tiktak, 1000);