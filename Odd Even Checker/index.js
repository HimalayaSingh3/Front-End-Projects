function checkNum(){
const number=document.getElementById("input").value;
const inputResult=document.getElementById("result");

if(number===""){
    inputResult.textContent="Please enter a number";
    return;
}
const num = parseInt(number);
if (isNaN(num)) {
    inputResult.textContent = 'Please enter a valid number.';
} else if (num % 2 === 0) {
    inputResult.textContent = num + ' is EVEN';
} else {
    inputResult.textContent = num + ' is ODD';
}
}