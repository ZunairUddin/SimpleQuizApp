const questionsArray = [
  //Question Array
  {
    question: "What is the Full Form Of HTML",
    options: [
      "HyperText Makeup Language",
      "HyperText Markup Language",
      "HyperText Markup Lame",
      "HyperTate Markup Language",
    ],
    answer: "HyperText Markup Language",
  },
  {
    question: "What does CSS stands for?",
    answer: "Cascading Style Sheet",
    options: [
      "Common Style Sheet",
      "Colorful Style Sheet",
      "Computer Style Sheet",
      "Cascading Style Sheet",
    ],
  },
  {
    question: "What does PHP stands for?",
    answer: "Hypertext Preprocessor",
    options: [
      "Hypertext Preprocessor",
      "Hypertext Programming",
      "Hypertext Preprogramming",
      "Hometext Preprocessor",
    ],
  },
  {
    question: "What does SQL stands for?",
    answer: "Structured Query Language",
    options: [
      "Stylish Question Language",
      "Stylesheet Query Language",
      "Statement Question Language",
      "Structured Query Language",
    ],
  },
  {
    question: "What year was JavaScript launched?",
    answer: "1995",
    options: ["1996", "1995", "1994", "None of the Above"],
  },
]; //Question Array End

//important Variables
let index = 0; //index
let score = 0; //marks
let progressValue = 1;
//getting HTML Elements
const question = document.getElementById("question");
const questionSide = document.getElementById("questionSide");
const questionNumber = document.getElementById("questionNumber");
const options = document.getElementById("options");
const marks = document.getElementById("marks");
const percentage = document.getElementById("percentage");
const progress = document.getElementById("progress");

const renderQuestions = () => {
  questionNumber.innerHTML = `Question No. ${index + 1}/${
    questionsArray.length
  }`;
  progress.style.width = `${(progressValue / questionsArray.length) * 100}%`;
  question.innerHTML = questionsArray[index].question;
  options.innerHTML = "";
  questionsArray[index].options.map((e, i) => {
    options.innerHTML += `  <div class="col-md-6">
    <div class="p-2">
        <button onclick="checkAns('${e}','${questionsArray[index].answer}')" class="btn w-100 customBtn  fs-2 text-white">
            ${e}
        </button>
    </div>
</div>`;
  });
};

renderQuestions();

const nextQuestion = () => {
  progressValue++;
  index++;
  renderQuestions();
};

const checkAns = (selectedOption, answer) => {
  if (selectedOption == answer) {
    score++;
  }
  marks.innerHTML = score;
  percentage.innerHTML = (score / questionsArray.length) * 100;
  if (index + 1 == questionsArray.length) {
    questionSide.style.display = "none";
  } else {
    nextQuestion();
  }
};
