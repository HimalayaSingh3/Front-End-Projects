const input=document.getElementById("count")
counter=0;
const increment=(()=>{
    counter++;
    input.innerHTML=counter;
})
const decrement=(()=>{
    if(counter>0){
    counter--;
    input.innerHTML=counter;}
})