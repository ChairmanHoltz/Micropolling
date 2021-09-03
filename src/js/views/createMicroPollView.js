import View from './View.js';

class CreateMicroPollView extends View {
  _parentEl = document.querySelector('.content_area');

  _generateMarkup() {
    return `
      <section class="section sticky create_poll menu_active--5">
        <h2 class="section_heading">Create New microPoll™!</h2>
        <form class="select_question_type">
          <label for="question_type">Question Type:</label><br />
          <select
            class="input_box space"
            id="q_type"
            name="question_type"
            placeholder
          >
            <option value="prompt" disable selected>
              Select a question type to begin
            </option>
            <option value="trivia">Trivia Question</option>
            <option value="open">Open Question</option>
          </select>
        </form>

        <!-- Trivia Question -->
        <form class="trivia_question_fields hide">
          <label for="questionName">Question Name:</label><br />
          <input
            type="text"
            class="question_data trivia input_box create_input_box space"
            id="q_name-trivia"
            name="questionName"
            placeholder="Give your question a short name"
          /><br />
          <label for="question">Question Text:</label><br />
          <textarea
            rows="4"
            cols="50"
            class="question_data trivia input_box space"
            id="q_text-trivia"
            name="question"
            placeholder="Write your quesiton here. Resize box for more space"
          ></textarea
          ><br />
          <label for="answers">Answer(s) (comma separated):</label><br />
          <input
            type="text"
            class="question_data trivia input_box create_input_box space"
            id="answer-trivia"
            name="answers"
            placeholder="List all acceptable answers separated by commas"
          /><br />
          <label for="correctAnswerMessage">Correct answer message:</label
          ><br />
          <textarea
            rows="2"
            cols="50"
            class="question_data trivia input_box space"
            id="correct_answer-trivia"
            name="correctAnswerMessage"
            placeholder="Message to display for correct answers"
          ></textarea
          ><br />
          <label for="wrongAnswerMessage">Wrong answer message:</label><br />
          <textarea
            rows="2"
            cols="50"
            class="question_data trivia input_box space"
            id="wrong_answer-trivia"
            name="wrongAnswerMessage"
            placeholder="Message to display for wrong answers"
          ></textarea
          ><br />
          <input
            type="button"
            class="btn generic_btn_size submit_poll_btn space"
            id="submit-trivia"
            value="Create microPoll™!"
          />
        </form>

        <!-- Open Question Fields -->
        <form class="open_question_fields hide">
          <label for="questionName">Question Name:</label><br />
          <input
            type="text"
            class="question_data open input_box create_input_box space"
            id="q_name-open"
            name="questionName"
            placeholder="Give your question a short name"
          /><br />
          <label for="question">Question Text:</label><br />
          <textarea
            rows="4"
            cols="50"
            class="question_data open input_box space"
            id="q_text-open"
            name="question"
            placeholder="Write your question here. Resize box for more space"
          ></textarea
          ><br/>
          <label for="message">Answer submission message:</label><br/>
          <textarea rows="2" cols="50" class="question_data open input_box space" id="message-open" name="message" placeholder="Message to display after answer is submitted"></textarea><br/>
          <input type="button" class="btn generic_btn_size submit_poll_btn space" id="submit-open" value="Create microPoll™!">
      </section>
    `;
  }
}

export default new CreateMicroPollView();
