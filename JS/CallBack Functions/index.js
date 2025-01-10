function print(msg){
    document.getElementById('demo').innerHTML="Sum Of 4 and 7 Is: " + msg;
}
function add(a,b){
    let sum = a + b;
    print(sum);
}
add(4,7,print());