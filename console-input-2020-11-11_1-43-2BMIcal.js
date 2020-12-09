var height = prompt("Input your height in metters");
var weight = prompt("Input your weight in Kilograms");
var BMIcal = weight / (height*height)
var BMI = alert("Your BMI is " + Math.round(BMIcal));