let mode="on"
function onOff(){
    if(mode==="on"){
        mode="of"
        document.getElementById("wing").style.animation="spin";
        console.log(mode);
    }
    else{
        mode="on"
        document.getElementById("wing").style.animation="";
        console.log(mode);
    }
}