// Select the Sec Min and Hour elements
const secondsHand = document.querySelector('.second-hand');
const minutesHand = document.querySelector('.min-hand');
const hoursHand = document.querySelector('.hour-hand');

// Save the original transition
const secOriginalTransition = secondsHand.style.transition;
const minOriginalTransition = minutesHand.style.transition;
const hourOriginalTransition = hoursHand.style.transition;

function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360 + 90);
    secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360 + 90);
    minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;
    
    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360 + 90);
    minutesHand.style.transform = `rotate(${hoursDegrees}deg)`;

    // Remove & re-insert the transition

    if(secondsDegrees === 90){
        secondsHand.style.transition ='none';

        setTimeout(()=>{
            secondsHand.style.transition = secOriginalTransition;
        }, 900);
    }

    if(minutesDegrees === 90){
        minutesHand.style.transition ='none';

        setTimeout(()=>{
            minutesHand.style.transition = minOriginalTransition;
        }, 900);
    }

    if(hoursDegrees === 90){
        hoursHand.style.transition ='none';

        setTimeout(()=>{
            hoursHand.style.transition = hourOriginalTransition;
        }, 900);
    }
}
setInterval(setDate, 1000);


