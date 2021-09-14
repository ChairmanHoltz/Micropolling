import { GS_API_URL } from './config.js';
import { AJAX, getJSON } from './helpers.js';
// import { async } from 'regenerator-runtime';

export const state = {
  questions: [],
  answers: [],
  questionCounter: 0,
};

export const loadQuestionsData = async function () {
  try {
    const questionData = await AJAX(GS_API_URL);
    questionData.forEach((question, i) => {
      if (question.answers) {
        question.answers = question.answers.split(',');
      }
      question.questionNumber = i + 1;
      state.questions.push(question);
    });
    console.log(state.questions);
  } catch (err) {
    console.log(err);
  }
};

export const loadAnswerData = async function () {
  const answerData = await AJAX(GS_API_URL);
};

export const uploadAnswer = async function (uploadData) {
  try {
    await AJAX(GS_API_URL, uploadData);
    console.log('success');
  } catch (err) {
    console.log(err);
  }
};

export const submitAnswer = function (answer) {
  if (state.questions[state.questionCounter].questionType === 'trivia')
    state.questions[state.questionCounter].answers.includes(answer)
      ? true
      : false;

  if (state.questions[state.questionCounter].questionType === 'open')
    console.log('open');
};

// export const getActiveMenuItem = function () {};

// const init = async function () {
//   try {
//     await loadQuestionsData();
//     console.log('success');
//   } catch (err) {
//     console.log(err);
//   }
// };
// init();
