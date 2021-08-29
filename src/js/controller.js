import * as model from './model.js';
import questionAreaView from './views/questionAreaView.js';

const controlQuestionArea = async function () {
  try {
    await model.loadQuestionsData();
    questionAreaView.render(model.state.questions[model.state.questionCounter]);
  } catch (err) {
    console.log(err);
  }
};
controlQuestionArea();
