const time = document.querySelector("#time")
const timeleft = document.querySelector("#timeleft")
const stop = document.querySelector("#stop")
const start = document.querySelector("#start")
const pomodorotime = 25*60 
let total= pomodorotime
let interval = null;

setInterval(()=>{
  time.textContent=new Date().toLocaleTimeString()
 },1000 );

      minutes = Math.floor(total / 60);
      seconds = total % 60;
      value=`${minutes}:${String(seconds).padStart(2, "0")}`;
      timeleft.textContent=value
  
const startinterval=()=>{
   
if (interval !== null) {
    return;
}
   
 interval = setInterval(()=>{
   while(total>0){
      total-=1
      minutes = Math.floor(total / 60);
      seconds = total % 60;
      value=`${minutes}:${String(seconds).padStart(2, "0")}`;
      timeleft.textContent=value;
      document.title=value;
      console.log(document.title)
      return;
   }
   clearInterval(interval);
   interval=null;
   
},1000);
}

const stopinterval=()=>{
   clearInterval(interval);
   interval=null;
   setTimeout(()=>{
   total = pomodorotime;
   minutes = Math.floor(total / 60);
      seconds = total % 60;
      value=`${minutes}:${String(seconds).padStart(2, "0")}`;
      timeleft.textContent=value;
},3000);
};


start.addEventListener("click",startinterval)
stop.addEventListener("click",stopinterval)
