// ============================
// DMA BEAUTY QUIZ
// script.js
// ============================

let quiz = [];
let current = 0;

let correct = 0;
let wrong = 0;

let beauty = 50;

let selected = [];

const home = document.getElementById("home");
const quizScreen = document.getElementById("quiz");
const result = document.getElementById("result");

const totalQuestion = document.getElementById("totalQuestion");

const progressText = document.getElementById("progressText");
const progressBar = document.getElementById("progressBar");

const beautyText = document.getElementById("beautyText");

const questionBox = document.getElementById("questionBox");
const answers = document.getElementById("answers");

const submitBtn = document.getElementById("submitBtn");
const nextBtn = document.getElementById("nextBtn");

const startBtn = document.getElementById("startBtn");

const playAgain = document.getElementById("playAgain");
const goHome = document.getElementById("goHome");

const finalBeauty = document.getElementById("finalBeauty");
const beautyRank = document.getElementById("beautyRank");
const correctCount = document.getElementById("correctCount");
const wrongCount = document.getElementById("wrongCount");
function shuffle(array){

for(let i=array.length-1;i>0;i--){

const j=Math.floor(Math.random()*(i+1));

[array[i],array[j]]=[array[j],array[i]];

}

return array;

}
startBtn.onclick=()=>{

quiz=JSON.parse(JSON.stringify(questions));

shuffle(quiz);

quiz.forEach(q=>{

shuffle(q.options);

});

home.classList.add("hide");

quizScreen.classList.remove("hide");

correct=0;
wrong=0;

beauty=50;

current=0;

loadQuestion();

}
function loadQuestion(){

selected=[];

submitBtn.classList.remove("hide");

nextBtn.classList.add("hide");

answers.innerHTML="";

let q=quiz[current];

progressText.innerHTML=
`Question ${current+1} / ${quiz.length}`;

beautyText.innerHTML=
`Beauty ${beauty}`;

progressBar.style.width=
((current)/quiz.length)*100+"%";

questionBox.innerHTML=q.question;
  q.options.forEach((op,index)=>{

let div=document.createElement("div");

div.className="answer";

if(q.multi){

div.innerHTML=
`
<label>

<input type="checkbox">

${op.text}

</label>

`;

}else{

div.innerHTML=
`
<label>

<input type="radio" name="ans">

${op.text}

</label>

`;

}

div.onclick=()=>select(div,index);

answers.appendChild(div);

});
}
function select(div,index){

let q=quiz[current];

if(q.multi){

if(selected.includes(index)){

selected=selected.filter(x=>x!=index);

div.classList.remove("selected");

}else{

selected.push(index);

div.classList.add("selected");

}

}else{

selected=[index];

document.querySelectorAll(".answer").forEach(a=>{

a.classList.remove("selected");

});

div.classList.add("selected");

}

}
submitBtn.onclick=()=>{

checkAnswer();

}
function checkAnswer(){

let q=quiz[current];

let right=[];

q.options.forEach((o,i)=>{

if(o.correct){

right.push(i);

}

});

let ok=true;

if(selected.length!=right.length){

ok=false;

}

right.forEach(r=>{

if(!selected.includes(r)){

ok=false;

}

});
  document.querySelectorAll(".answer").forEach((box,i)=>{

if(right.includes(i)){

box.classList.add("correct");

}

if(selected.includes(i)&&!right.includes(i)){

box.classList.add("wrong");

}

});
  if(ok){

correct++;

beauty+=3;

}else{

wrong++;

beauty-=2;

}

if(beauty>100) beauty=100;

if(beauty<0) beauty=0;

beautyText.innerHTML=
`Beauty ${beauty}`;

submitBtn.classList.add("hide");

nextBtn.classList.remove("hide");

}
nextBtn.onclick = () => {

    current++;

    if(current >= quiz.length){

        finishGame();

        return;

    }

    loadQuestion();

};
function getRank(score){

    if(score >= 95){
        return "👑 GODDESS";
    }

    if(score >= 80){
        return "✨ GORGEOUS";
    }

    if(score >= 65){
        return "😊 PRETTY";
    }

    if(score >= 50){
        return "🙂 CUTE";
    }

    if(score >= 35){
        return "😐 AVERAGE";
    }

    if(score >= 20){
        return "🥔 POTATO";
    }

    return "👹 GOBLIN";

}
function finishGame(){

    quizScreen.classList.add("hide");

    result.classList.remove("hide");

    finalBeauty.innerHTML =
    "Beauty Score : " + beauty + "/100";

    beautyRank.innerHTML =
    getRank(beauty);

    correctCount.innerHTML =
    "✅ Correct : " + correct;

    wrongCount.innerHTML =
    "❌ Wrong : " + wrong;

}
playAgain.onclick = () => {

    quiz = JSON.parse(JSON.stringify(questions));

    shuffle(quiz);

    quiz.forEach(q=>{

        shuffle(q.options);

    });

    correct = 0;
    wrong = 0;
    beauty = 50;
    current = 0;

    result.classList.add("hide");

    quizScreen.classList.remove("hide");

    loadQuestion();

};
goHome.onclick = () => {

    result.classList.add("hide");

    home.classList.remove("hide");

};
window.onload = () => {

    totalQuestion.innerHTML =
    questions.length + " Questions";

};
