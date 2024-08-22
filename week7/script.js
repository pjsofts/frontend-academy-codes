const questions = [
  {
    statement: "Javascript is slow",
    answer: false,
  },
  {
    statement: "Javascript was invented in 2020",
    answer: false,
  },
  {
    statement: "Javascript is the best ",
    answer: true,
  },
];

let currentIndex = -1;

const questionDiv = document.getElementById("question");
const rightSpan = document.getElementById("right");
const wrongSpan = document.getElementById("wrong");

function nextQuestion() {
  questionDiv.classList.remove("fail");
  questionDiv.classList.remove("success");
  currentIndex += 1;
  if (currentIndex >= questions.length) {
    currentIndex = 0;
  }
  const currentQuestion = questions[currentIndex];
  questionDiv.textContent = currentQuestion.statement;
}
let right = 0;
let wrong = 0;
function select(choice) {
  const currentQuestion = questions[currentIndex];
  if (currentQuestion.answer === choice) {
    right++;
    rightSpan.textContent = right;
    questionDiv.classList.remove("fail");
    questionDiv.classList.add("success");
  } else {
    wrong++;
    wrongSpan.textContent = wrong;
    questionDiv.classList.remove("success");
    questionDiv.classList.add("fail");
  }
}

nextQuestion();


streamVideo(api_dev_key, video_id, offset, codec, resolution)