var randomNumber=Math.floor(Math.random()*100)+1;
var attempt=0;
document.getElementById('btn').addEventListener('click',function(){

var guess=parseInt(document.getElementById('guessInput').value);
attempt++;

if(guess===randomNumber){
    displayMessage("Congratulations! You gueesd the Number in "+attempt+"attempts");
    document.getElementById('btn').disabled=true;
}
else if (guess<randomNumber){
    displayMessage("Too low! please try a Higher Number");
}
else{
    displayMessage("Too High! please try a Lower number.");
}


});

function displayMessage(msg){
    document.getElementById('msg').textContent=msg;

}