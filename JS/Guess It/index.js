var randomNumber=Math.floor(Math.random()*100)+1;
console.log(randomNumber);
var attempts=10;
var boxcount=0;

document.getElementById('btn').addEventListener('click',function(){
     const guess=parseInt(document.getElementById('guessInput').value);
     const lock=document.getElementById('lock');
      if(guess===randomNumber){
        boxcount++;
        lock.src='uk.avif';
        lock.width = 249; 
        lock.height = 209;
        display("Congratulations!!!.You opened the box "+boxcount);
        randomNumber=Math.floor(Math.random()*100)+1;
        console.log(randomNumber);
        attempts=10;
        setTimeout(()=>{
          lock.src='lock.jpg';
          display("Guess the number to open the Box "+(boxcount + 1));
          document.getElementById('guessInput').value='';
        },5000);
        if(boxcount===5){
          display("Congratulations! You won the game!");
          document.getElementById('btn').disabled=true;
          document.getElementById('guessInput').disabled=true;
        }       
      }
      else if(guess<randomNumber){
        display("Your Number is too low..Try Again.");
      }
      else{
        display("Your Number is too high..Try Again.");
      }
    attempts--;
    if(attempts===0){
      display('Game Over! Try Again Later');
  }
});

function display(msg){
document.getElementById('msg').textContent=msg;
 }