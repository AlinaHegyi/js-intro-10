// /**
//  * // Calculate BMI of a user
//  Show result inside result div (you can use append())
//  Attach proper event listeners to inputs and button
//  BMI formula: https://www.inchcalculator.com/wp-content/uploads/2021/05/bmi-formula.png
//  */



   document.querySelector('button').addEventListener('click', (event) => {
    event.preventDefault(); 

    const heightInput = document.getElementById('height').value; 
    const weightInput = document.getElementById('weight').value;
    const resultsDiv = document.getElementById('results');


    resultsDiv.innerHTML = '';
   
    const height = parseFloat(heightInput);
    const weight = parseFloat(weightInput);

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        resultsDiv.append('Please enter valid positive numbers for height and weight.');
        return;
    }

    
    const bmi = weight / ((height / 100) * (height / 100));

  
    resultsDiv.innerHTML = `Your BMI is: ${bmi.toFixed(2)}`; 

    if (bmi < 18.6) {
        resultsDiv.append(' (Underweight)');
    } else if (bmi >= 18.6 && bmi < 24) {
        resultsDiv.append(' (Normal weight)');
    } else {
        resultsDiv.append(' (Overweight)');
    }
});

