
  

 setInterval(function(){
    const secondHand = document.querySelector('.second');
    const now = new Date();
    const seconds = now.getSeconds();
    const secondDeg = seconds * 6;                             
    secondHand.style.transform = `rotate(${secondDeg}deg ) translateY(-50%)`;


        const minuteHand = document.querySelector('.minute');
    const minutes = now.getMinutes();
    const minuteDeg = minutes * 6 + (seconds / 60) * 6;       
    minuteHand.style.transform = ` rotate(${minuteDeg}deg) translateY(-50%)`;



    const hourHand = document.querySelector('.hour');
    const hours = now.getHours();

    const hourDeg = (hours % 12) * 30 + (minutes / 60) * 30;  
    hourHand.style.transform = ` rotate(${hourDeg}deg) translateY(-50%)`;
    
 },1000)

 let dark = document.querySelector(".DarkMode")
 let body = document.querySelector("body")
 let clock = document.querySelector(".clock")
 let number = document.querySelector(".number")
 let center = document.querySelector(".center-point")
 let flag =0;
 dark.addEventListener("click",function(){
   if(flag ==0){
    body.style.backgroundColor = "black";
   
    clock.style.backgroundColor ="white";
    clock.style.border= "8px solid grey"
    number.style.color = "black"
    flag=1;
   }else{
     center.style.backgroundColor = "black"
    body.style.backgroundColor = "white";
    clock.style.backgroundColor ="grey";
    clock.style.border= "8px solid black"
    number.style.color = "black"
    flag=0;
   }

 })