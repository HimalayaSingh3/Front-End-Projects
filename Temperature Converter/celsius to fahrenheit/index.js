function calculate(){
    const from=document.getElementById("input-from").value;
    const results=document.getElementById("result")

const num = parseInt(from);


if (isNaN(num)) {
results.textContent = 'Please Enter a Valid Temp';
}
else{
    const F = (9/5)*num + 32;
    results.innerHTML=F;
}
}
