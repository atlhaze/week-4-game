$( document ).ready(function(){
 var Random=Math.floor(Math.random()*101+19)
 
 $('#randomNumber').text(Random);

 var amber= Math.floor(Math.random()*11+1)
 var blood= Math.floor(Math.random()*11+1)
 var cosmic= Math.floor(Math.random()*11+1)
 var lunar= Math.floor(Math.random()*11+1)
 var venom= Math.floor(Math.random()*11+1)

 var userTotal= 0;
 var wins= 0;
 var losses = 0;
 
$('#numberWins').text(wins);
$('#numberLosses').text(losses);

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

function win(){
alert("You won!");
 wins++;
 $('#numberWins').text(wins);
 reset();
}

function lose(){
alert ("You lose!");
 losses++;
 $('#numberLosses').text(losses);
 reset()
}

 $('#amber').on ('click', function(){
   userTotal = userTotal + amber;
   console.log("New userTotal= " + userTotal);
   $('#finalTotal').text(userTotal);
         
       if (userTotal == Random){
         win();
       }
       else if ( userTotal > Random){
         lose();
       }  
 })  
 $('#blood').on ('click', function(){
   userTotal = userTotal + blood;
   console.log("New userTotal= " + userTotal);
   $('#finalTotal').text(userTotal);
       if (userTotal == Random){
         win();
       }
       else if ( userTotal > Random){
         lose();
       }
 })  
 $('#cosmic').on ('click', function(){
   userTotal = userTotal + cosmic;
   console.log("New userTotal= " + userTotal);
   $('#finalTotal').text(userTotal);

         if (userTotal == Random){
         win();
       }
       else if ( userTotal > Random){
         lose();
       }
 })  
 $('#lunar').on ('click', function(){
   userTotal = userTotal + lunar;
   console.log("New userTotal= " + userTotal);
   $('#finalTotal').text(userTotal);
     
         if (userTotal == Random){
         win();
       }
       else if ( userTotal > Random){
         lose();
       }
 })
 $('#venom').on ('click', function(){
   userTotal = userTotal + venom;
   console.log("New userTotal= " + userTotal);
   $('#finalTotal').text(userTotal);

         if (userTotal == Random){
         win();
       }
       else if ( userTotal > Random){
         lose();
       }
 });  
});