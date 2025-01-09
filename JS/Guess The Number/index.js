var randomNumber=Math.floor(Math.random()*100)+1;
var attempts=5;
document.getElementById('btn').addEventListener('click',function(){
    var guess=  parseInt(document.getElementById('guessinput').value);
    for(i=0;i<5;i++){
    if(guess===randomNumber){
        display("Congratulations You Guessed The Number In "+ attempts +" ATTEMPTS!");
        document.getElementById('guessinput').value = "";
    }
    else if(guess<randomNumber){
        display("Number Is Too Low, Try Higher Number");
        document.getElementById('guessinput').value = "";

    }
    else{
        display("Number Is Too High, Try Lower Number");
        document.getElementById('guessinput').value = "";
    }
}
    attempts--;
    if(attempts==0){
        display("Game Over! Try Again...And The Random Number Is " + randomNumber);
        document.getElementById('guessinput').value = "";
    }
});
function display(msg){
    document.getElementById('msg').textContent=msg;
}