function calculate(){
    const from=document.getElementById("input-from").value;
    const results=document.getElementById("result")

const num = parseInt(from);


if (isNaN(num)) {
results.textContent = 'Please Enter a Valid Temp';
}
else{
    const C = num - 273.15;
    results.innerHTML=C;
}
}
