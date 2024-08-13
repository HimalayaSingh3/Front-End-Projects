function calculate(){
    const from=document.getElementById("input-from").value;
    const results=document.getElementById("result")

const num = parseInt(from);


if (isNaN(num)) {
results.textContent = 'Please Enter a Valid Temp';
}
else{
    const K=(num - 32) * 5/9 + 273.15;
    results.innerHTML=K;
}
}
