var opt = "";
var fnum = "";
var snum = "";

function append(number){
    if (opt === ""){
        fnum += number;
        document.getElementById('result').value = fnum;
    } 
    else{
        snum += number;
        document.getElementById('result').value =fnum+" "+opt+" "+snum;
    }
}

function setopt(op){
    opt = op;
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
    document.getElementById('output').innerText = "Result Is:  " + result;
}

function reset(){
    fnum = "";
    snum = "";
    opt = "";
    document.getElementById('result').value = "";
}
