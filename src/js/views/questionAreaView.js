import View from './View.js';
import menuView from './menuView.js';
import contentAreaView from './contentAreaView.js';

class QuestionAreaView extends View {
  parentEl = document.querySelector('.question_area');
  _submitBtn = document.querySelector('.submit_btn');
  _skipBtn = document.querySelector('.skip_btn');
  _nextBtn = document.querySelector('.next_btn');
  answerBox = document.querySelector('.input_box');
  _questionNumber = document.querySelector('.question_number');
  _question = document.querySelector('.question');
  _answerMessage = document.querySelector('.answer_message');

  displayQuestion(data) {
    this.answerBox.value = '';

    this._questionNumber.textContent = `Question ${data.questionNumber}`;
    this._question.textContent = `${data.question}`;
  }

  getAnswer() {
    const answer = this.answerBox.value;
    console.log(answer);
    return answer;
  }

  addHandlerNextAndSkipBtns(handler) {
    const nextBtn = this._nextBtn;
    const skipBtn = this._skipBtn;
    const submitBtn = this._submitBtn;
    this.parentEl.addEventListener('click', function (e) {
      const clicked = e.target;
      console.log(clicked);
      if (!clicked === nextBtn || !clicked === skipBtn) return;
      if (clicked === nextBtn || clicked === skipBtn) {
        submitBtn.classList.remove('hide');
        this.displayAnswerMessage('');
        handler();
      }
    });
  }

  addHandlerSubmitForm(handler) {
    const submitForm = this.parentEl.querySelector('.submit');
    submitForm.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }

  displayAnswerMessage(message) {
    this.toggleVisibility(this._submitBtn, this._skipBtn, this._nextBtn);
    this._answerMessage.textContent = message;
  }

  // _generateMarkup() {
  //   // console.log(this._data);
  //   return `
  //     <section class="section sticky question_area menu_active--2">
  //       <h2 class="question_number">Question ${this._data.questionNumber}</h2>
  //       <div class="question">${this._data.question}</div>
  //       <form class="submit">
  //         <input class="input_box space" /> <br />
  //         <input type="submit" class="btn generic_btn_size submit_btn space" />
  //       </form>
  //       <div class="answer_message space"></div>
  //       <button class="btn generic_btn_size skip_btn space">Skip</button>
  //       <button class="btn generic_btn_size next_question space hide">
  //         Next microPoll™!
  //       </button>
  //       <br />
  //       <button class="btn generic_btn_size see_results hide">
  //         See Results!
  //       </button>
  //     </section>
  //   `;
  // }
}

export default new QuestionAreaView();
