const input=document.querySelector("#input");
const output=document.querySelector("#output")
input.addEventListener("keyup",function(){
   const text=input.value
   .toLowerCase()
   .trim()
   .replace(/ /g,"-")
   .replace(/[,!?+$]/g,"")
   .replace(/-+/g,"-")
   const slug=text
 
   console.log(text)
    output.textContent=slug
   
});
