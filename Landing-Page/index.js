const image1=document.getElementById("image1")
const image2=document.getElementById("image2")
const image3=document.getElementById("image3")
const image4=document.getElementById("image4")

function imageSel(){
    image1.style.visibility="visible";
    image2.style.visibility="hidden";
    image3.style.visibility="hidden";
    image4.style.visibility="hidden";
}
function imageSel1(){
    image2.style.visibility="visible";
    image1.style.visibility="hidden";
    image3.style.visibility="hidden";
    image4.style.visibility="hidden";
}
function imageSel2(){
    image3.style.visibility="visible";
    image1.style.visibility="hidden";
    image2.style.visibility="hidden";
    image4.style.visibility="hidden";
}
function imageSel3(){
    image4.style.visibility="visible";
    image2.style.visibility="hidden";
    image3.style.visibility="hidden";
    image1.style.visibility="hidden";
}

var sideMe=document.getElementById("sideMenu");
function openMenu(){
    sideMe.style.right="0";
}
function closeMenu(){
    sideMe.style.right="-200px";
}