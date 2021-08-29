import { GS_API_URL } from './config.js';
import { getJSON } from './helpers.js';
// import { async } from 'regenerator-runtime';

export const state = {
  questions: [],
  answers: [],
  questionCounter: 0,
};

export const loadQuestionsData = async function () {
  try {
    const data = await getJSON(GS_API_URL);
    data.forEach(question => {
      if (question.answers) {
        question.answers = question.answers.split(',');
      }
      state.questions.push(question);
    });
    console.log(state.questions);
  } catch (err) {
    console.log(err);
  }
};

export const loadAnswerData = async function () {
  try {
  } catch (err) {
    console.log(err);
  }
};

export const postToDatabase = function (data) {
  fetch(GS_API_URL, {
    method: 'POST',
    mode: 'no-cors',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow',
    body: JSON.stringify(data),
  });
};
