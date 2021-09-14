import * as model from './model.js';
import questionAreaView from './views/questionAreaView.js';
import menuView from './views/menuView.js';
import aboutView from './views/aboutView.js';
import createMicroPollView from './views/createMicroPollView.js';

const controlContentArea = function () {
  questionAreaView.displayQuestion(
    model.state.questions[model.state.questionCounter]
  );
};

// Controls left Menu
const controlMenuBtns = function (activeMenuHTML) {
  console.log(activeMenuHTML);
  activeMenuHTML.classList.toggle('hide');

  // switch (activeMenuItem) {
  //   case 1:
  //     aboutView.render();
  //     break;
  //   case 2:
  //     questionAreaView.render(
  //       model.state.questions[model.state.questionCounter]
  //     );
  //     questionAreaView.grabBtnElements();
  //     questionAreaView.addHandlerNextAndSkipBtns(controlNextAndSkipBtns);
  //     questionAreaView.addHandlerSubmitForm(controlAnswerSubmit);
  //     break;
  //   case 5:
  //     createMicroPollView.render();
  //     break;
  //   default:
  //     console.log('something went wrong');
  // }
};

// Checks answer and displays answer message
const controlAnswerSubmit = function () {
  const answer = questionAreaView.getAnswer();
  console.log(answer);
  if (!answer) return;
  console.log(model.submitAnswer(answer));
  model.submitAnswer(answer)
    ? questionAreaView.displayAnswerMessage(
        model.state.questions[model.state.questionCounter].correctAnswerMessage
      )
    : questionAreaView.displayAnswerMessage(
        model.state.questions[model.state.questionCounter].wrongAnswerMessage
      );
};

const controlNextAndSkipBtns = function () {
  model.state.questionCounter++;
  questionAreaView.displayQuestion(
    model.state.questions[model.state.questionCounter]
  );
};

const init = async function () {
  try {
    await model.loadQuestionsData();
    menuView.addHandlerMenuBtns();
    questionAreaView.addHandlerNextAndSkipBtns(controlNextAndSkipBtns);
    questionAreaView.addHandlerSubmitForm(controlAnswerSubmit);
    controlContentArea();
  } catch (err) {
    console.log(err);
  }
};
init();
