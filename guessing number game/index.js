let y = Math.floor(Math.random() * 10 + 1);
let guess = 1;

document.getElementById('submit').onclick=function(){
    let x=document.getElementById('guess').value;
    if(x==y){
        alert("You Guessed It Right");
        document.querySelector("body").innerHTML="<h1>Congratulations You Won</h1>";
    }
    else if(x>y){
        alert("Guess Smaller Number");
    }
    else{
        alert("Guess Greater Number");
    }
}