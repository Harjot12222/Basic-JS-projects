const time = document.querySelector("#time")
const btc=document.querySelector("#btc")
const eth=document.querySelector("#eth")
setInterval(()=>{
   getresponse();
},1000);

setInterval(()=>{
  time.textContent=new Date().toLocaleTimeString()
 },1000 );


async function getresponse() {
  const data=await fetch("//api endpoint or key here ");
  const value = await data.json();
  console.log(value)
  btc.textContent=value.data["btcDominance"]
  eth.textContent=value.data["ethDominance"]
  
   
};
