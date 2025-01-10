const btn = document.getElementById('btn');
const ques = document.getElementById('ques');
const ans = document.getElementById('ans');

btn.onclick =()=>{
    axios.get('https://official-joke-api.appspot.com/random_joke')
    .then(function(response){
        btn.textContent = "Try Next!";
        ques.textContent = response.data.setup;
        ans.textContent = "";
        setTimeout(()=>{
            ans.textContent = response.data.punchline;
        },5000);
    })
    .catch(function(error){
        console.log(error);
    });
}

