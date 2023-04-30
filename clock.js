//Clock function & variables

const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand')


function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees =((seconds / 60) * 360 + 90);
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`; 
    
        if(secondsDegrees === 90){
        const originalTransition = secondHand.style.transition;
        secondHand.style.transition = 'none';

        setTimeout (() =>{
            secondHand.style.transition = originalTransition;
            }, 1000);
    
        } 
        

    


    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360 + 90);
    minHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360 + 90);
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

    // console.log(hour);

    
}
setInterval(setDate, 1000);