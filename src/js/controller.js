import * as model from './model.js';
import questionAreaView from './views/questionAreaView.js';
import menuView from './views/menuView.js';
import aboutView from './views/aboutView.js';
import createMicroPollView from './views/createMicroPollView.js';

// Controls left Menu
const controlMenuBtns = function (activeMenuItem) {
  console.log(activeMenuItem);
  switch (activeMenuItem) {
    case 1:
      aboutView.render();
      break;
    case 2:
      questionAreaView.render(
        model.state.questions[model.state.questionCounter]
      );
      questionAreaView.addHandlerSubmitForm(controlAnswerSubmit);
      break;
    case 5:
      createMicroPollView.render();
      break;
    default:
      console.log('something went wrong');
  }
};

// Checks answer and displays answer message
const controlAnswerSubmit = function () {
  const answer = questionAreaView.getAnswer();
  if (!answer) return;
  if (answer) {
    model.submitAnswer(answer);
    questionAreaView.displayAnswerMessage(
      model.state.questions[model.state.questionCounter].correctAnswerMessage
    );
  }
};

const controlNextAndSkipBtns = function () {
  console.log('btn');
};

const init = function () {
  menuView.addHandlerMenuBtns(controlMenuBtns);
  questionAreaView.addHandlerNextAndSkipBtns(controlNextAndSkipBtns);
};
init();
