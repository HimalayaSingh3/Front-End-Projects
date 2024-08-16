const mtr=document.getElementById("meter");
const counter=document.getElementById("count");

let x=0;
counter.innerHTML=x;
function increase(){
    
    if(x>=10){
        return false;
    }
    if(x>=7){
        mtr.style.background="red";
    }
    if(x<7){
        mtr.style.background="green"
    }
    if(x<=3){
        mtr.style.background="yellow";
    }
    counter.innerHTML=++x;
    mtr.style.height=x*10+ "%";
}

function decrease(){
    
        
    
    if(x>0){
        counter.innerHTML=--x;
        mtr.style.height=x*10+ "%";
    }
    if(x<7){
        mtr.style.background="green"
    }
    if(x<=3){
        mtr.style.background="yellow";
    }
    
    
}