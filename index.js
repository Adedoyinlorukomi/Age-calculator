// const btnEl = document.getElementById('btn');
// const birthdayEl = document.getElementById('birthday');

// function calculateAge() {
//     const birthdayValue = birthdayEl.value;
//     if (birthdayValue === "") {
//         alert("Please enter your birthday")
//     } else {
//         const age = getAge(birthdayValue);
//     }
    
// }
// function getAge(birthdayValue) {
//     const currentDate = new Date();
//     const birthdayDate= new Date(birthdayValue)
//     const age = currentDate.getFullYear() - birthdayDate.getFullYear();
//     document.getElementById('result').innerHTML = `You are ${age} years old`;
// }

// btnEl.addEventListener("click", calculateAge)

// let hoursOfCode = prompt('How many hours have you coded today?');
// if (hoursOfCode == 0) {
//     alert('Do something!')
// } else if (hoursOfCode > 0 && hoursOfCode<=4) {
//     alert('Keep going Doyin')
// } else {
//     alert("What about you rest today or go out to see a friend?")
// }


const btn1El = document.getElementById('btn1');
const weightEl = document.getElementById('weight');
const heightEl = document.getElementById('height');

function calculateBMI() {
    const heightValue = heightEl.value;
    const weightValue = weightEl.value;
    const BMI = (weightValue / heightValue) / heightValue;
    document.getElementById('bmiResult').innerHTML = `Your BMI is ${BMI}`;

    if (heightValue == '' && weightValue == '') {
        alert("Input your values")
    } else if (heightValue == ' ' || weightValue == '') {
        alert("Input the weight")
    } else if (heightValue == '' || weightValue == ' ') {
        alert("Input the height")
    } else ("Lol")

    if (BMI < 18.5) {
        document.getElementById('condition').innerHTML = `Weight Condition: Underweight`;
    } else if (BMI >= 18.5 && BMI <= 24.9) {
        document.getElementById('condition').innerHTML = `Weight Condition: Healthy Weight`
    } else if (BMI > 24.9 && BMI <= 29.9) {
        document.getElementById('condition').innerHTML = `Weight Condition: Overweight`
    } else if (BMI > 30.0 && BMI <= 34.9) {
        document.getElementById('condition').innerHTML = `Weight Condition: Obesity Class I`
    } else if (BMI > 34.9 && BMI <= 39.9) {
        document.getElementById('condition').innerHTML = `Weight Condition: Obesity Class I`
    } else if (BMI > 40) {
        document.getElementById('condition').innerHTML = `Weight Condition: Obesity Class III`
    }
    }


btn1El.addEventListener('click', calculateBMI)




