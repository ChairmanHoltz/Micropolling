export default class View {
  _data;

  _hideElement(el) {
    el.classList.add('hide');
  }

  _showElement(el) {
    el.classList.remove('hide');
  }

  render(data) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();

    this._data = data;
    // questionNumber = this._data;
    const markup = this._generateMarkup();

    this._parentEl.insertAdjacentHTML('afterbegin', markup);
  }
}
