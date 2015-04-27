angular.module('calorific.controllers', [])

function addCal(plusMinus) {
      var plusMinus = parseInt(plusMinus);
      var currentLife = parseInt(document.getElementById("totCal").innerHTML) + plusMinus;
      //alert(currentLife);

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

    function reset() {
      document.getElementById("totCal").innerHTML = 0;

    }
