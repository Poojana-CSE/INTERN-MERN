var randomNumber = Math.floor(Math.random() * 100) + 1;
var boxcount = 1;
var maxAttempts = 10;
var attempts = maxAttempts;
console.log(randomNumber);
document.getElementById('btn').addEventListener('click', function () {
    var guess = parseInt(document.getElementById('guessinput').value);
    attempts--;
    if (guess === randomNumber){
        lock.src = 'open.jpg';
        levelUp();
    } else if (attempts > 0) {
        display(guess < randomNumber ? "Too low! Try higher." : "Too high! Try lower.");
    } else {
        gameOver();
    }
    updateInfo();
});
function levelUp() {
    boxcount++;
    randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(randomNumber);
    attempts = maxAttempts - boxcount;
    display("Correct! Welcome to Level " + boxcount + ".");
    lock.src = 'close.jpg'
    document.getElementById('guessinput').value = "";
}
function gameOver() {
    display("Game Over! The number was " + randomNumber + ".");
    document.getElementById('btn').disabled = true;
}
function updateInfo() {
    document.getElementById('level').textContent = "Level: " + boxcount;
    document.getElementById('attempts').textContent = "Attempts Remaining: " + attempts;
}
