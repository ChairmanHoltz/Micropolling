'use strict';

// Question Objects
const questions = [
  {
    // Question 1
    questionType: 'trivia',
    questionName: 'Capital of Canada',
    question: 'What is the capital of Canada?',
    answers: ['ottawa', 'ottowa', 'otawa', 'otowa'],
    correctAnswerMessage: 'Correct 😁 That IS the capital of Canada 🍁',
    wrongAnswerMessage: 'Incorrect 😞 The capital of Canada is Ottawa 🍁',
  },
  {
    // Question 2
    questionType: 'open',
    questionName: 'Cheese',
    question: 'Name a cheese.',
    message: 'Thank you for naming a cheese 🧀',
  },
  {
    // Question 3
    questionType: 'open',
    questionName: 'Greatest Athlete',
    question: 'Who is the greatest athlete of all time?',
    message: 'Thank you for naming an athlete 🏅',
  },
  {
    // Question 4
    questionType: 'open',
    questionName: 'Serial Killer',
    question: 'Who is the most famous serial killer?',
    message: 'Thank you for naming a serial killer!🔪 ',
  },
  {
    // Question 5
    questionType: 'trivia',
    questionName: 'Ariana Grande',
    question: `Without looking it up: What is Ariana Grande's race/ethnicity?`,
    answers: ['white', 'caucasian'],
    correctAnswerMessage: `That's right! Who knew?`,
    wrongAnswerMessage: `That's wrong ☹ Ariana Grande is white 👩‍🦳`,
  },
  {
    // Question 6
    questionType: 'open',
    questionName: 'Fall from grace',
    question: `Which athlete had the greatest fall from grace?`,
    message: `Thank you for submitting a disgraced athlete`,
  },
  {
    // Question 7
    questionType: 'open',
    questionName: 'Chinese Food',
    question: 'Name a Chinese food.',
    message: `Thank you for naming a Chinese food`,
  },
];

/////////////////////////////////////////////////////////////////////////////
// Variables and HTML selectors
let questionCounter = 0;
// main section
const mainSections = document.querySelectorAll('.section');
// question area
const questionArea = document.querySelector('.question_area');
const questionNumber = document.querySelector('.question_number');
const questionText = document.querySelector('.question');
const answerBox = document.querySelector('.input_box');
const answerMessage = document.querySelector('.answer_message');
// buttons
const startBtn = document.querySelector('.btn_start');
const submitForm = document.querySelector('.submit');
const submitBtn = document.querySelector('.submit_btn');
const skipBtn = document.querySelector('.skip_btn');
const nextQuestionBtn = document.querySelector('.next_question');
const startPollingBtn = document.querySelector('#start_polling');

//results page
const resultsBtn = document.querySelector('.see_results');
const resultsPage = document.querySelector('.results_page');
const resultsContainer = document.querySelector('.container_results');
// menu area
const menu = document.querySelector('.menu');
const menuBtns = document.querySelectorAll('.menu_btn');
// sumary area
const answersSummary = document.querySelector('.answers_summary');
// create poll
const createPollBtn = document.querySelector('.create_poll_btn');
const createPollArea = document.querySelector('.create_poll');
const questionType = document.getElementById('q_type');
const selectQuestionType = document.querySelector('.select_question_type');
const triviaQuestionFields = document.querySelector('.trivia_question_fields');
const openQuestionFields = document.querySelector('.open_question_fields');
const submitPollBtn = document.querySelectorAll('.submit_poll_btn');
const questionData = Array.from(
  document.getElementsByClassName('question_data')
);
const triviaQuestionData = Array.from(
  document.getElementsByClassName('trivia')
);
const openQuestionData = Array.from(document.getElementsByClassName('open'));
// question list area
const questionListArea = document.querySelector('.question_list');
const questionListBtn = document.querySelector('.question_list_btn');
const questionLinks = document.getElementById('question_list_links');
const questionBtn = document.querySelector('.question_list_btn');

// about section
const about = document.querySelector('.about');

/////////////////////////////////////////////////////////////////////////////////
// Functions

// hide element
const hideElement = el => el.classList.add('hide');

// show element
const showElement = el => el.classList.remove('hide');

// hide main Sections
const hideSections = () => mainSections.forEach(s => hideElement(s));

// Submit Button
const addSubmitListener = () =>
  submitForm.addEventListener('submit', checkAnswer);

// display question number
const displayQuestionNumber = number => {
  if (number <= questions.length) {
    questionNumber.textContent = `Question ${number}`;
  } else {
    hideElement(nextQuestionBtn);
  }
};

// evaluate trivia answer
const triviaQuestion = answer => {
  // check for correct answer and display appropriate message
  if (questions[questionCounter].answers.includes(answer)) {
    answerMessage.textContent = `${questions[questionCounter].correctAnswerMessage}`;
  } else {
    answerMessage.textContent = `${questions[questionCounter].wrongAnswerMessage}`;
  }
};

// Capitalize answer text
const answerToUpper = answer => {
  const answerWords = [];
  answer.split(' ').forEach(word => {
    answerWords.push(word.charAt(0).toUpperCase() + word.substr(1));
  });
  return answerWords.join(' ');
};

// acknowledge open answer submission
const openQuestion = answer => {
  answerMessage.textContent = `${answerToUpper(answer)}: ${
    questions[questionCounter].message
  }`;
};

// display answers summary
// const displayAnswersSummary = function (answer) {
//   let currentQuestion = questions[questionCounter].questionName;
//   const shortAnswer = `${currentQuestion}: ${answerToUpper(answer)}`;
//   answersSummary.insertAdjacentHTML(
//     'beforeend',
//     `<div style="margin-bottom: 10px" class="summary_answer">${shortAnswer}</div>`
//   );
// };

// remove submit listener
const removeSubmit = () => {
  submitForm.removeEventListener('submit', checkAnswer);
  submitForm.addEventListener('submit', e => e.preventDefault());
};

const activateMenuBtn = function (type) {
  menuBtns.forEach(btn => {
    if (btn.classList.contains(type)) {
      btn.classList.add('btn-activate');
    } else {
      btn.classList.remove('btn-activate');
      btn.classList.add('btn-deactivate');
    }
  });
};

// create question list menu area
const createQuestionList = function (question, index) {
  questionLinks.insertAdjacentHTML(
    'beforeend',
    `<li><button type="button" class="question_btn btn generic_btn_size space" data-q="${index}">${question.questionName}</button></li>`
  );
};

// insert results to results page
const insertResults = answer => {
  resultsContainer.insertAdjacentHTML(
    'beforeend',
    `<div class="question--${questionCounter} center">${answer}</div>`
  );
};

// display Results button after all Qs answered
const displayResultsBtn = question => {
  if (+question + 1 === questions.length) showElement(resultsBtn);
};

// general check answer function
const checkAnswer = e => {
  // prevent form reload
  e.preventDefault();

  // check for blank text
  if (answerBox.value === '') {
    answerMessage.textContent = `You didn't type anything. Please enter something.`;

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
    console.log(questionCounter);
    // update UI
    if (questionCounter <= questions.length - 2) {
      showElement(nextQuestionBtn);
      nextQuestionBtn.focus();
    }
    displayResultsBtn(questionCounter);
    hideElement(submitBtn);
    answerBox.value = '';
    hideElement(skipBtn);
    removeSubmit();
  }
};

// define new micropoll type
const questionTypeSelection = e => {
  const qName = document.querySelector(`#q_name-${questionType.value}`);
  switch (e.target.value) {
    case 'trivia':
      // display trivia question fields
      showElement(triviaQuestionFields);
      hideElement(openQuestionFields);
      qName.focus();
      break;
    case 'open':
      // display open question fields
      showElement(openQuestionFields);
      hideElement(triviaQuestionFields);
      qName.focus();
      break;
    case 'prompt':
      // clear question fields if user returns to prompt
      hideElement(openQuestionFields);
      hideElement(triviaQuestionFields);
      break;
    default:
      `something went wrong`;
  }
};
questionType.onchange = questionTypeSelection;

const deactivateSiblings = function (target, sibs, act, deact) {
  sibs.forEach(el => {
    if (el !== target) {
      el.classList.remove(act);
      el.classList.add(deact);
    }
  });
};

const activateQuestionBtn = function (number) {
  const questionBtns = document.querySelectorAll('.question_btn');
  const activeQuestionBtn = document.querySelector(
    `.question_btn[data-q="${number}"]`
  );
  activeQuestionBtn.classList.add('q_btn-activate');
  deactivateSiblings(
    activeQuestionBtn,
    questionBtns,
    'q_btn-activate',
    'q_btn-deactivate'
  );
};

// submit new poll
submitPollBtn.forEach(btn =>
  btn.addEventListener('click', function (e) {
    console.log(submitPollBtn);
    e.preventDefault();
    console.log('test');
    const newQuestion = { questionType: questionType.value };
    for (const key of questionData.filter(
      data => data.value !== '' && data.name !== 'answers'
    )) {
      newQuestion[key.name] = key.value;
    }
    for (const key of questionData.filter(data => data.name === 'answers')) {
      newQuestion[key.name] = key.value.split(',').map(el => el.trim());
    }
    // add new question to question array
    questions.push(newQuestion);

    // add new question to question list
    createQuestionList(newQuestion, questions.indexOf(newQuestion));
    // update UI
    questionData.forEach(field => (field.value = ''));
    showElement(questionArea);
    hideElement(createPollArea);
    activateMenuBtn('question_list_btn');
  })
);

// BUTTONS
// Start Button
startBtn.addEventListener('click', function (e) {
  // prevent form reload
  e.preventDefault();

  // show About menu item as active on start
  activateMenuBtn('about_btn');

  // display text box and submit button
  showElement(about);

  // hide 'Start' button
  hideElement(startBtn);

  // add submit listener
  addSubmitListener();

  // Display menu area
  showElement(menu);
  // display question list area
  showElement(questionListArea);
});

const startPolling = function () {
  questionArea.classList.remove('hide');
  hideElement(about);
  activateMenuBtn('question_list_btn');
  activateQuestionBtn(questionCounter);
  answerBox.focus();
};

startPollingBtn.addEventListener('click', startPolling);

const nextQuestion = () => {
  // increment counter
  questionCounter++;

  // display question number
  displayQuestionNumber(questionCounter + 1);

  // display next quesiton

  questionText.textContent = questions[questionCounter].question;

  // clear prior message
  answerMessage.textContent = '';

  // hide next question btn
  hideElement(nextQuestionBtn);

  // show submit btn
  showElement(submitBtn);

  // clear answer box and add focus
  answerBox.value = '';
  answerBox.focus();
  addSubmitListener();
  showElement(skipBtn);
  activateQuestionBtn(questionCounter);
};

// Next Question Button
nextQuestionBtn.addEventListener('click', nextQuestion);

const skipFunction = function () {
  if (questionCounter < questions.length - 1) {
    nextQuestion();
  } else {
    hideElement(skipBtn);
    showElement(resultsBtn);
    hideElement(submitBtn);
  }
};

skipBtn.addEventListener('click', skipFunction);

const displayQuestion = function (qNumber) {
  showElement(questionArea);
  displayQuestionNumber(+qNumber + 1);
  questionText.textContent = questions[qNumber].question;
  answerBox.focus();
  questionCounter = +qNumber;
  showElement(submitBtn);
  showElement(skipBtn);
  hideElement(nextQuestionBtn);
  answerMessage.textContent = '';
};

const gotToQuestion = function (e) {
  const clicked = e.target;
  if (clicked.classList.contains('question_btn')) {
    hideSections();
    displayQuestion(clicked.dataset.q);
    clicked.classList.add('q_btn-activate');
  }
  const siblings = clicked.closest('section').querySelectorAll('.question_btn');
  deactivateSiblings(clicked, siblings, 'q_btn-activate', 'q_btn-deactivate');

  activateMenuBtn('question_list_btn');
  addSubmitListener();
};

// question list buttons
questionListArea.addEventListener('click', gotToQuestion);

////////////////////////////////////////////////
// Menu Buttons

// active menu button
menu.addEventListener('click', function (e) {
  // activate clicked button
  const clicked = e.target;
  if (clicked.classList.contains('menu_btn')) {
    clicked.classList.add('btn-activate');
  }

  // deactivate any previously active buttons
  const siblings = clicked.closest('nav').querySelectorAll('.menu_btn');
  deactivateSiblings(clicked, siblings, 'btn-activate', 'btn-deactivate');

  // hide all main sections
  hideSections();

  // display current active section
  document
    .querySelector(`.menu_active--${clicked.dataset.menu}`)
    .classList.remove('hide');

  // focus on answer box
  if (+clicked.dataset.menu === 2) {
    answerBox.focus();
    activateQuestionBtn(questionCounter);
  }
});

const init = function () {
  questions.forEach((q, i) => createQuestionList(q, i));
  displayQuestion(questionCounter);
  displayQuestionNumber(questionCounter + 1);
  hideSections();
};

init();
