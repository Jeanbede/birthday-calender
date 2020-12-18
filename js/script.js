var males=  ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var females=  ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
var days=  ["Sunday", "Monday", "Tuesday", "Wednesday" ,"Thursday", "Friday", "Saturday" ];



function find(){
    var DD = parseInt(document.getElementById('day') .value);
    var MM= parseInt(document.getElementById('month').value);
    var year = document.getElementById('year') .value);
    var gender = document.getElementById('gender') .value;
    var CC =year. slice(0,2);
    var YY = year. slice(2,4);

    if (DD === ""  | |  DD <= 0  | | DD > 31  &&  MM === "" | |  MM <= 0  | |  MM  >  12  &&  year < 1900  | |  year  ===  ""  | |  year.length  > 4){
    alert("INVALID INPUT.")
}
         
         else { 
             var days = math.floor( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7);
         }
         
         if (gender === "male" ){
             document.getElementById("your.name") .innerHTML = ("You were called: " + males[days]  +  ".");
         }
             else if (gender === '"female" ) {
document.getElementById("your.name") .innerHTML =  ("You were called: " + females[days] + "."); 
}
else {
    alert("You need to select your gender.");
}
 }

         
