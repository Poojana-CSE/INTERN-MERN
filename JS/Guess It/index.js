var randomNumber=Math.floor(Math.random()*100)+1;
console.log(randomNumber);
var attempts=50;
var boxnum = 1;
document.getElementById('btn').addEventListener('click',function(){
    var guess=  parseInt(document.getElementById('guessinput').value);
    for(i=0;i<attempts;i++){
    if(guess===randomNumber){
        lock.src = 'open.jpg';
        display("Box Opened!"+ attempts +" ATTEMPTS!");
        display("Level " + boxnum + " completed");
        document.getElementById('guessinput').value = ""; 
        lock.src = 'close.jpg';
        boxnum++;
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