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
