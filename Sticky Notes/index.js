const addNote=document.getElementById("add");
addNote.addEventListener("click",addNotes);

function addNotes(){
    const notes=document.getElementById("notes");
    const input=document.createElement("div");
    input.classList.add("sticky");
    input.contentEditable="true";
    input.setAttribute("role","text");
    input.innerHTML="NOTE -";
    notes.appendChild(input);

    const close=document.createElement("span");
    close.classList.add("close");
    close.contentEditable="false";
    close.innerHTML="X"
    input.appendChild(close);

    const stick=document.getElementsByClassName("sticky");
    const xClose=document.getElementsByClassName("close");

    for(let i=0; i<stick.length; i++){
        xClose[i].addEventListener("click",()=>{
            console.log(stick.length);
            stick[i].style.display="none";
        });
    }

    function randomNumber(min,max){
        return Math.random()*(max-min)+min;
    }
    const angle=randomNumber(-4,4);
    input.style.transform="rotate(" + angle + "deg)";

    const color=randomNumber(1 , 720);
    input.style.filter="hue-rotate(" + color + "deg)";

};

