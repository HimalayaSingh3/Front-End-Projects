function calculate(){
    const from=document.getElementById("input-from").value;
    const results=document.getElementById("result")

const num = parseInt(from);


if (isNaN(num)) {
results.textContent = 'Please Enter a Valid Temp';
}
else{
    const C=(num - 32) * 5/9;
    results.innerHTML=C;
}
}
