// ===============================
// DMA QUIZ
// script.js
// Part 1
// ===============================

// ------------ DOM ------------

const home = document.getElementById("home");
const quiz = document.getElementById("quiz");
const result = document.getElementById("result");

const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");

const progressBar = document.getElementById("progressBar");

const currentQuestionText = document.getElementById("currentQuestion");
const totalQuestionText = document.getElementById("totalQuestion");

const beautyScoreText = document.getElementById("beautyScore");

const finalBeauty = document.getElementById("finalBeauty");
const beautyText = document.getElementById("beautyText");

const correctCount = document.getElementById("correctCount");
const wrongCount = document.getElementById("wrongCount");
const accuracy = document.getElementById("accuracy");
const rank = document.getElementById("rank");

const playAgain = document.getElementById("playAgain");
const backHome = document.getElementById("backHome");

// -----------------------------

let quizData = [];

let currentIndex = 0;

let correct = 0;

let wrong = 0;

let answered = false;

// -----------------------------

startBtn.onclick = startGame;

playAgain.onclick = startGame;

backHome.onclick = () => {

result.classList.remove("active");

quiz.classList.remove("active");

home.classList.add("active");

};

// -----------------------------

function startGame(){

home.classList.remove("active");

result.classList.remove("active");

quiz.classList.add("active");

currentIndex = 0;

correct = 0;

wrong = 0;

answered = false;

// copy toàn bộ câu hỏi

quizData = [...questions];

// random câu hỏi

shuffleArray(quizData);

totalQuestionText.textContent = quizData.length;

updateBeauty();

loadQuestion();

}

// -----------------------------

function loadQuestion(){

answered = false;

nextBtn.disabled = true;

answersElement.innerHTML = "";

let q = quizData[currentIndex];

currentQuestionText.textContent = currentIndex + 1;

questionElement.textContent = q.question;

// random đáp án

let options = [

{text:q.A,correct:q.answer==="A"},

{text:q.B,correct:q.answer==="B"},

{text:q.C,correct:q.answer==="C"},

{text:q.D,correct:q.answer==="D"}

];

shuffleArray(options);

options.forEach(option=>{

const button=document.createElement("button");

button.className="answer";

button.innerHTML=option.text;

button.onclick=()=>selectAnswer(button,option.correct);

answersElement.appendChild(button);

});

progressBar.style.width=((currentIndex)/quizData.length)*100+"%";

}

// -----------------------------

function shuffleArray(array){

for(let i=array.length-1;i>0;i--){

const j=Math.floor(Math.random()*(i+1));

[array[i],array[j]]=[array[j],array[i]];

}

}
// ===============================
// PART 2
// Kiểm tra đáp án
// ===============================

function selectAnswer(button, isCorrect){

    if(answered) return;

    answered = true;

    nextBtn.disabled = false;

    const allAnswers = document.querySelectorAll(".answer");

    if(isCorrect){

        button.classList.add("correct");
        button.classList.add("pop");

        correct++;

    }else{

        button.classList.add("wrong");
        button.classList.add("shake");

        wrong++;

        // tô đáp án đúng

        allAnswers.forEach(btn=>{

            const text = btn.innerHTML;

            const q = quizData[currentIndex];

            if(
                text===q.A && q.answer==="A" ||
                text===q.B && q.answer==="B" ||
                text===q.C && q.answer==="C" ||
                text===q.D && q.answer==="D"
            ){
                btn.classList.add("correct");
            }

        });

    }

    // khóa tất cả nút

    allAnswers.forEach(btn=>{

        btn.classList.add("disabled");

    });

    updateBeauty();

}

// ===============================
// NEXT
// ===============================

nextBtn.onclick = ()=>{

    currentIndex++;

    if(currentIndex>=quizData.length){

        showResult();

        return;

    }

    loadQuestion();

}

// ===============================
// Beauty Score
// ===============================

function updateBeauty(){

    let beauty = Math.round((correct/Math.max(1,quizData.length))*100);

    beautyScoreText.innerHTML = beauty;

}

// ===============================
// RESULT
// ===============================

function showResult(){

    quiz.classList.remove("active");

    result.classList.add("active");

    let beauty = Math.round((correct/quizData.length)*100);

    finalBeauty.innerHTML = beauty;

    correctCount.innerHTML = correct;

    wrongCount.innerHTML = wrong;

    accuracy.innerHTML = beauty + "%";

    let title="";

    let rankName="";

    if(beauty>=95){

        title="👑 Tuyệt sắc";

        rankName="SSS";

    }

    else if(beauty>=90){

        title="✨ Cực kỳ xinh đẹp";

        rankName="SS";

    }

    else if(beauty>=80){

        title="😍 Rất đẹp";

        rankName="S";

    }

    else if(beauty>=70){

        title="😊 Đẹp";

        rankName="A";

    }

    else if(beauty>=60){

        title="🙂 Khá ổn";

        rankName="B";

    }

    else if(beauty>=50){

        title="😐 Bình thường";

        rankName="C";

    }

    else if(beauty>=30){

        title="🙃 Hơi xấu";

        rankName="D";

    }

    else{

        title="👹 Quá xấu";

        rankName="F";

    }

    beautyText.innerHTML = title;

    rank.innerHTML = rankName;

}
