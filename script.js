let input=document.getElementById('evaluatedText');
input.addEventListener('keydown',updateCount);
input.addEventListener('keyup',updateCount);

let score=document.getElementById('wordCount');

function updateCount() {
    let s=input.value;
    s=s.trim();
    let arr=s.split(' ');
    score.innerHTML=s.length==0 ? '0': arr.length;
}