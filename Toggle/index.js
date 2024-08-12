let color=document.querySelector("#mode");
let mode="light";
color.addEventListener("click",() =>{
    if(mode==="light"){
        mode="dark";
        document.querySelector("body").style.backgroundColor="black";
        color.style.backgroundColor="white"
        color.style.color="black";
    }
    else{
        mode="light";
        document.querySelector("body").style.backgroundColor="white";
        color.style.backgroundColor="black";
        color.style.color="white";
    }
    console.log(mode);
})