class QuestionListView extends View {
  _parentEl = document.querySelector('.question_list_links');

  _generateMarkup() {
    return this._data.map(this._generateMarkupPreview);
  }

  _generateMarkupPreview(question, i) {
    return `
      <li><button type="button" class="question_btn btn generic_btn_size space" data-q="${i}">${question.questionName}</button></li>
      `;
  }
}
