let input=document.getElementById('evaluatedText');
input.addEventListener('keydown',updateCount);
input.addEventListener('keyup',updateCount);

let score=document.getElementById('wordCount');

function updateCount() {
    let s=input.value;
    score.innerHTML=s.length;
}