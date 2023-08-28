const second_arrow = document.querySelector('.second-hand');
const minute_arrow = document.querySelector('.min-hand');
const hour_arrow = document.querySelector('.hour-hand');
const anim = document.querySelector('.hand');
function setDate() {
    const now = new Date();
    const sec = now.getSeconds();

    const secDegree = ((sec/60)*360) + 90; 
    second_arrow.style.transform = `rotate(${secDegree}deg)`;

    const min = now.getMinutes();
    const minDegree = ((min/60)*360)+(secDegree/60) +90;
    minute_arrow.style.transform = `rotate(${minDegree}deg)`;


    const hour = now.getHours();
    const hourDegree = ((hour/12)*360)+(minDegree/360) +90;
    hour_arrow.style.transform = (`rotate(${hourDegree}deg)`);
}

setInterval(() => {
    setDate();
}, 1000);