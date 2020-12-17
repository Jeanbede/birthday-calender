let yearEntered=document.getElementById("years").value
if( yearEntered<1900){
    alert("Not Apllicable")
}



function ShowArray(n) {
    this.length = n;
    for (var i = 1; i <= n; i++) {
        this[i] = 0;
    }

}
day = new ShowArray(7);
days[0] = "Saturday"
days[1] = "Sunday"
days[2] = "Monday"
days[3] = "Tuesday"
days[4] = "Wednesday"
days[5] = "Thursday"
days[6] = "Friday"
months = new ShowArray(12);
months[1] = "January"
months[2] = "February"
months[3] = "March"
months[4] = "April"
months[5] = "May"
months[6] = "June"
months[7] = "July"
months[8] = "August"
months[9] = "September"
months[10] = "October"
months[11] = "November"
months[12] = "December"
function compute() {
let dateEntered=document.getElementById("date").value
let monthsEntered=document.getElementById("months").value
let yearEntered=document.getElementById("years").value
if( yearEntered<1900){
    alert("Not Apllicable")
    else{      
    form.result1.value = yearEntered 
    }

    function myFunction() {  
var newMale= ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var newFemale= ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];   

newMale.forEach(function(newmale) {
    alert('newmale');
});



document.getElementById("male").innerHTML = newMale;
document.getElementById("female").innerHTML = newFale;

if (gender === "male") {
    alert("Your Akan Name is " + newMale[d])

} else
 if (gender === "female") {
    alert("Your Ghanian akan Name is " + newFemale[d])
        






// function myFunction() {
//     var x=document.getElementById("male") .value();
//     var y=document.getElementById("female") .value();
//     document.getElementById("gender") .innerHTML= x, y;
// }

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Document</title>
</head>
<body>
   <div id="result"></div>
   <button onclick="embedElements()">Show Data</button>
<script>
{
   const myArray = ["stone","paper","scissors"];
   function embedElements(){
      myArray.forEach(el => {
         document.getElementById('result').innerHTML +=`<div>${el}</div><br />`;
         // here result is the id of the div present in the dom
      });
   };
}
</script>
</body>
</html>




















