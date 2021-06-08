'use strict';

// Question Objects
const questions = [
  {
    // Question 1
    questionType: 'trivia',
    questionName: 'Capital of Canada',
    question: 'What is the capital of Canada?',
    answers: ['ottawa'],
    acceptableAnswers: ['ottowa', 'otawa', 'otowa'],
    preAnswer: ['Correct 😁', 'Incorrect 😞'],
    message: 'The capital of Canada is Ottawa 🍁',
    spellingError: 'But you spelled it wrong, idiot.',
  },
  {
    // Question 2
    questionType: 'open',
    questionName: 'Cheese',
    question: 'Name a cheese.',
    message: 'Thank you for naming a cheese 🧀: ',
  },
  {
    // Question 3
    questionType: 'open',
    questionName: 'Greatest Athlete',
    question: 'Who is the greatest athlete of all time?',
    message: 'Thank you for naming an athlete 🏅: ',
  },
  {
    // Question 4
    questionType: 'open',
    questionName: 'Serial Killer',
    question: 'Who is the most famous serial killer?',
    message: 'Thank you for naming a serial killer!🔪: ',
  },
  {
    // Question 5
    questionType: 'trivia',
    questionName: 'Ariana Grande',
    question: `Without looking it up: What is Ariana Grande's race/ethnicity?`,
    answers: ['white', 'caucasian'],
    preAnswer: [`That's right!`, `That's wrong ☹`],
    message: 'Ariana Grande is white 👩‍🦳',
  },
  {
    // Question 6
    questionType: 'open',
    questionName: 'Fall from grace',
    question: `Which athlete had the greatest fall from grace?`,
    message: `Thank you for submitting a disgraced athlete: `,
  },
  {
    questionType: 'open',
    questionName: 'Chinese Food',
    question: 'Name a Chinese food.',
    message: `Thank you for naming a Chinese food: `,
  },
];

// HTML elements and variables
let questionCounter = 0;
// question area
const questionPage = document.querySelector('.question_page');
const questionNumber = document.querySelector('.question_number');
const questionText = document.querySelector('.question');
const answerBox = document.querySelector('.input_box');
const answerMessage = document.querySelector('.answer_message');
// buttons
const startBtn = document.querySelector('.btn_start');
const submitForm = document.querySelector('.submit');
const submitBtn = document.querySelector('.submit_btn');
const nextQuestionBtn = document.querySelector('.next_question');
//results page
const resultsBtn = document.querySelector('.see_results');
const resultsPage = document.querySelector('.results_page');
const resultsContainer = document.querySelector('.container_results');
// menu area
const menuHeading = document.querySelector('.menu_column');
const menuOptions = document.querySelector('.menu_options');
// recap area
const recapHeading = document.querySelector('.recap_heading');
const recapAnswer = document.querySelector('.answers_recap');
// Functions

// Submit Button
const addSubmitListener = () =>
  submitForm.addEventListener('submit', checkAnswer);

// display question number
const displayQuestionNumber = number => {
  if (questionCounter <= questions.length)
    questionNumber.textContent = `Question ${number}`;
};

// evaluate trivia answer
const triviaQuestion = answer => {
  // check for correct answer and display appropriate message
  if (questions[questionCounter].answers.includes(answer)) {
    answerMessage.textContent = `${questions[questionCounter].preAnswer[0]} ${questions[questionCounter].message}`;
  } else if (questions[questionCounter].acceptableAnswers?.includes(answer)) {
    answerMessage.textContent = `${questions[questionCounter].preAnswer[0]} ${questions[questionCounter].message} ${questions[questionCounter].spellingError}`;
  } else {
    answerMessage.textContent = `${questions[questionCounter].preAnswer[1]} ${questions[questionCounter].message}`;
  }

  // send answer to results page
  // document.querySelector(`.question--${questionCounter}`).textContent = answer;
};

// acknowledge open answer
const openQuestion = answer => {
  answerMessage.textContent = questions[questionCounter].message + answer;
  // document.querySelector(`.question--${questionCounter}`).textContent = answer;
};

// display answer history
const answersRecap = function () {
  const shortAnswer = `${questions[questionCounter].questionName}: ${answerBox.value}`;
  recapAnswer.insertAdjacentHTML(
    'beforeend',
    `<div style="margin-bottom: 10px" class="recap_answer">${shortAnswer}</div>`
  );
};

// remove submit listener
const removeSubmit = () => {
  submitForm.removeEventListener('submit', checkAnswer);
  submitForm.addEventListener('submit', e => e.preventDefault());
};

// insert results to results page
const insertResults = answer => {
  resultsContainer.insertAdjacentHTML(
    'beforeend',
    `<div class="question--${questionCounter} center">${answer}</div>`
  );
};

// display Results button after all Qs answered
const displayResultsBtn = () => {
  if (questionCounter + 1 === questions.length)
    resultsBtn.style.display = 'block';
};

// general check answer function
const checkAnswer = e => {
  // prevent form reload
  e.preventDefault();

  // check for blank text
  if (answerBox.value === '') {
    answerMessage.textContent = `You didn't type anything. Please enter something.`;
    nextQuestionBtn.style.display = 'none';

    // process answer according to question type
  } else {
    switch (questions[questionCounter].questionType) {
      case 'trivia':
        triviaQuestion(answerBox.value.toLowerCase().trim());
        insertResults(answerBox.value);
        break;
      case 'open':
        openQuestion(answerBox.value);
        insertResults(answerBox.value);
        break;
      default:
        console.log(`something went wrong`);
    }

    // update UI
    removeSubmit();
    answersRecap();
    displayResultsBtn();
    submitBtn.style.display = 'none';
    nextQuestionBtn.style.display = 'block';
    answerBox.value = '';
    nextQuestionBtn.focus();
  }
};

// BUTTONS
// Start Button
startBtn.addEventListener('click', function (e) {
  // prevent form reload
  e.preventDefault();

  // display question number
  displayQuestionNumber(questionCounter + 1);

  // display question
  questionText.textContent = questions[questionCounter].question;

  // display text box and submit button
  answerBox.style.display = 'block';
  submitBtn.style.display = 'block';
  // resultsBtn.style.display = 'block';
  answerBox.focus();
  // hide 'Start' button
  startBtn.style.display = 'none';

  // add submit listener
  addSubmitListener();

  // Display menu area
  menuHeading.style.display = 'block';
  menuOptions.style.display = 'block';
  // display recap area
  recapHeading.style.display = 'block';
});

// Next Question Button
nextQuestionBtn.addEventListener('click', function () {
  // increment counter
  questionCounter++;

  // display question number
  displayQuestionNumber(questionCounter + 1);

  // display next quesiton
  questionText.textContent = questions[questionCounter].question;

  // clear prior message
  answerMessage.textContent = '';

  // hide next question btn
  nextQuestionBtn.style.display = 'none';

  // show submit btn
  submitBtn.style.display = 'block';

  // clear answer box and add focu
  answerBox.value = '';
  answerBox.focus();
  addSubmitListener();
});

// see results btn
resultsBtn.addEventListener('click', () => {
  questionPage.style.display = 'none';
  resultsPage.style.display = 'block';
});
