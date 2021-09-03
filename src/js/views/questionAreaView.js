import View from './View.js';
import menuView from './menuView.js';

class QuestionAreaView extends View {
  _parentEl = document.querySelector('.content_area');
  _skipBtn = this._parentEl.querySelector('.skip_btn');
  _submitBtn = this._parentEl.querySelector('.submit_btn');
  _nextBtn = this._parentEl.querySelector('.next_question');

  getAnswer() {
    const answer = this._parentEl.querySelector('.input_box').value;
    console.log(answer);
    return answer;
  }

  addHandlerNextAndSkipBtns(handler) {
    this._parentEl.addEventListener('click', function (e) {
      if (e.target === this._nextBtn || e.target === this._skipBtn) handler();
    });
  }

  addHandlerSubmitForm(handler) {
    const submitForm = this._parentEl.querySelector('.submit');
    submitForm.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }

  displayAnswerMessage(message) {
    const skipBtn = this._parentEl.querySelector('.skip_btn');
    const submitBtn = this._parentEl.querySelector('.submit_btn');
    const nextBtn = this._parentEl.querySelector('.next_question');

    // this.toggleElement(this._submitBtn, this._skipBtn, this._nextBtn);
    this.toggleElement(submitBtn, skipBtn, nextBtn);

    const answerMessage = this._parentEl.querySelector('.answer_message');
    answerMessage.textContent = message;
  }

  _generateMarkup() {
    // console.log(this._data);
    return `
      <section class="section sticky question_area menu_active--2">
        <h2 class="question_number">Question ${this._data.questionNumber}</h2>
        <div class="question">${this._data.question}</div>
        <form class="submit">
          <input class="input_box space" /> <br />
          <input type="submit" class="btn generic_btn_size submit_btn space" />
        </form>
        <div class="answer_message space"></div>
        <button class="btn generic_btn_size skip_btn space">Skip</button>
        <button class="btn generic_btn_size next_question space hide">
          Next microPoll™!
        </button>
        <br />
        <button class="btn generic_btn_size see_results hide">
          See Results!
        </button>
      </section>
    `;
  }
}

export default new QuestionAreaView();
