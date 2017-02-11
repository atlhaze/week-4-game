$( document ).ready(function(){
 var Random=Math.floor(Math.random()*101+19)
 // Selects a random number to be shown at the start of the game
 // Number should be should be between 19 - 120
 //
 $('#randomNumber').text(Random);
 // Appending random number to the randomNumber id in the html doc
 //
 var amber= Math.floor(Math.random()*11+1)
 var blood= Math.floor(Math.random()*11+1)
 var cosmic= Math.floor(Math.random()*11+1)
 var lunar= Math.floor(Math.random()*11+1)
 var venom= Math.floor(Math.random()*11+1)
 // Setting up random numbers for each jewel
 // Random number has to be between 1 - 12
 //
 var userTotal= 0;
 var wins= 0;
 var losses = 0;
 //  Declaring variables for tallies
$('#numberWins').text(wins);
$('#numberLosses').text(losses);
//resets the game
function reset(){
     Random=Math.floor(Math.random()*101+19);
     console.log(Random)
     $('#randomNumber').text(Random);
    amber= Math.floor(Math.random()*11+1);
    blood= Math.floor(Math.random()*11+1);
    cosmic= Math.floor(Math.random()*11+1);
    lunar= Math.floor(Math.random()*11+1);
    venom= Math.floor(Math.random()*11+1);
     userTotal= 0;
     $('#finalTotal').text(userTotal);
     }
//adds the wins to the userTotal
function yay(){
alert("You won!");
 wins++;
 $('#numberWins').text(wins);
 reset();
}
//addes the losses to the userTotal
function loser(){
alert ("You lose!");
 losses++;
 $('#numberLosses').text(losses);
 reset()
}
//sets up click for jewels
 $('#amber').on ('click', function(){
   userTotal = userTotal + amber;
   console.log("New userTotal= " + userTotal);
   $('#finalTotal').text(userTotal);
         //sets win/lose conditions
       if (userTotal == Random){
         yay();
       }
       else if ( userTotal > Random){
         loser();
       }  
 })  
 $('#blood').on ('click', function(){
   userTotal = userTotal + blood;
   console.log("New userTotal= " + userTotal);
   $('#finalTotal').text(userTotal);
       if (userTotal == Random){
         yay();
       }
       else if ( userTotal > Random){
         loser();
       }
 })  
 $('#cosmic').on ('click', function(){
   userTotal = userTotal + cosmic;
   console.log("New userTotal= " + userTotal);
   $('#finalTotal').text(userTotal);
//sets win/lose conditions
         if (userTotal == Random){
         yay();
       }
       else if ( userTotal > Random){
         loser();
       }
 })  
 $('#lunar').on ('click', function(){
   userTotal = userTotal + lunar;
   console.log("New userTotal= " + userTotal);
   $('#finalTotal').text(userTotal);
     
         if (userTotal == Random){
         yay();
       }
       else if ( userTotal > Random){
         loser();
       }
 })
 $('#venom').on ('click', function(){
   userTotal = userTotal + venom;
   console.log("New userTotal= " + userTotal);
   $('#finalTotal').text(userTotal);
//sets win/lose conditions
         if (userTotal == Random){
         yay();
       }
       else if ( userTotal > Random){
         loser();
       }
 });  
});