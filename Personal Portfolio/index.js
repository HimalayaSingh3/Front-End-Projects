var links=document.getElementsByClassName("links");
var contents=document.getElementsByClassName("tab-contents");
function openTab(name){
    for(link of links){
        link.classList.remove("active-link");
    }
    for(content of contents){
        content.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(name).classList.add("active-tab")
}
var sideMe=document.getElementById("sideMenu");
function openMenu(){
    sideMe.style.right="0";
}
function closeMenu(){
    sideMe.style.right="-200px";
}