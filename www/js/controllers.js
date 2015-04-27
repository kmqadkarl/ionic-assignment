angular.module('calorific.controllers', [])//controller linking to app.js and main html pages

//function adding up the calories called addCal
function addCal(plus) {
      var plus = parseInt(plus);
      var currentLife = parseInt(document.getElementById("totCal").innerHTML) + plus;
      //alert(currentLife);
      //condition so that if the calories go above 2000 an alert box is called
     if(currentLife < 0)
     {
       currentLife = 0;
     }
     else if(currentLife > 2000)
     {
       currentLife = 2000;
	   alert("You have reached your optimum Calorie Count for the Day");
     alert("Go for a run");

     }
     else
     {
       document.getElementById("totCal").innerHTML = currentLife;
     }
   }
//Reset the button to 0
    function reset() {
      document.getElementById("totCal").innerHTML = 0;

    }
