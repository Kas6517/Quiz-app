const quizData = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "Python",
    c: "JavaScript",
    d: "Ruby",
    correct: "c",
  },
  {
    question: "What does HTML stand for?",
    a: "Hot tub male lounging",
    b: "Hyper text markup language",
    c: "Hyper text makeup language",
    d: "Hydro text male luggage",
    correct: "b",
  },
  {
    question: "What does CSS stand for?",
    a: "Cascade Super System",
    b: "Cascading Style Sheet",
    c: "Cold Steel Supper",
    d: "Coding Sample System",
    correct: "b",
  },
  {
    question: "What browser sucks the most?",
    a: "Chrome",
    b: "Safari",
    c: "Microsoft Edge",
    d: "Firefox",
    correct: "c",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
      <h2>You answered ${score} /${quizData.length} questions correctly</h2>
      
      <button onclick="location.reload()">Reload</button>`;
    }
  }
});
