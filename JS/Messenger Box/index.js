var text="";
function show(){
    text = document.getElementById('input').value;
    document.getElementById('display').innerHTML = text;
    document.getElementById('input').value = "";
}