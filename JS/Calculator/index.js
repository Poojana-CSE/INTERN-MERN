var opt = "";
var fnum = "";
var snum = "";
function append(number){
    if (opt === ""){
        document.getElementById('output').innerHTML = "Enter Number 1";
        fnum += number;
        document.getElementById('result').value = fnum;
    } 
    else{
        snum += number;
        document.getElementById('result').value =fnum+" "+opt+" "+snum;
        document.getElementById('output').innerHTML = "Number 2 Entered, See The Result";
    }
}
function setopt(op){
    opt = op;
    document.getElementById('output').innerHTML = "Operator Choosed";
    document.getElementById('result').value = fnum+" "+opt;
}
function showres(){
    let result = 0;
    switch (opt){
        case '+':
            result = parseInt(fnum) + parseInt(snum);
            break;
        case '-':
            result = parseInt(fnum) - parseInt(snum);
            break;
        case '*':
            result = parseInt(fnum) * parseInt(snum);
            break;
        case '/':
            result = parseInt(fnum) / parseInt(snum);
            break;
        default:
            result = "Error";  
    }
    document.getElementById('result').value = result; 
    document.getElementById('output').innerHTML = "Result Is:  " + result;
}
function reset(){
    fnum = "";
    snum = "";
    opt = "";
    document.getElementById('result').value = "";
}
