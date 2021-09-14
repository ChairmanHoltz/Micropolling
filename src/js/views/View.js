export default class View {
  _data;
  _allSections = document.querySelectorAll('.section');

  toggleVisibility(...els) {
    els.forEach(el => el.classList.toggle('hide'));
  }

  hideSections() {
    this._allSections.forEach(sec => sec.classList.add('hide'));
  }

  _clear() {
    if (this._parentEl.classList.contains('main_menu')) return;
    this._parentEl.innerHTML = '';
  }

  // _insertHTML() {
  //   this._clear();
  //   const markup = this._generateMarkup();
  //   this._parentEl.insertAdjacentHTML('afterbegin', markup);
  // }

  getData(data) {
    this._data = data;
  }

  render(data) {
    if (!data) {
      console.log('no data');
      // this._insertHTML();
      return;
    }

    if (data) {
      this._data = data;
      console.log(data);
      // this._insertHTML();
      return;
    }
  }
}
