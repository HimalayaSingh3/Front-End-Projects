function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
  
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
      alert('Please enter valid values for weight and height.');
      return;
    }
  
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    const resultElement = document.getElementById('result');
  
    let bmiCategory;
    if (bmi < 18.5) {
      bmiCategory = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
      bmiCategory = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
      bmiCategory = 'Overweight';
    } else {
      bmiCategory = 'Obesity';
    }
  
    resultElement.innerHTML = `Your BMI is ${bmi.toFixed(2)} (${bmiCategory}).`;
  }