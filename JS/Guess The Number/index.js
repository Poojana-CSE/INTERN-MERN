var randomNumber=Math.floor(Math.random()*100)+1;
var attempts=0;
document.getElementById('btn').addEventListener('click',function(){
    var guess=  parseInt(document.getElementById('guessinput').value);
    attempts++;
    if(guess===randomNumber){
        display("Congratulations You Guessed The Number In "+ attempts +" ATTEMPTS!");
    }
    else if(guess<randomNumber){
        display("Number Is Too Low, Try Higher Number");
    }
    else{
        display("Number Is Too High, Try Lower Number");
    }
});
function display(msg){
    document.getElementById('msg').textContent=msg;
}