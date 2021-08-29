import View from './View.js';

class QuestionAreaView extends View {
  _parentEl = document.querySelector('.question_area');
  _generateMarkup() {
    console.log(this._data);
    return `
    <h2 class="question_number">Question ${this._data}</h2>
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
    `;
  }
}

export default new QuestionAreaView();
