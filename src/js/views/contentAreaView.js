import View from './View.js';
import questionAreaView from './questionAreaView.js';
import menuView from './menuView.js';

class ContentAreaView extends View {
  _parentEl = document.querySelector('.content_area');
  _allSections = document.querySelectorAll('.section');

  displayActiveContent(activeMenuItem) {
    const activeSection = this._parentEl.querySelector(
      `.menu_active--${activeMenuItem}`
    );
    this.hideSections();
    this.toggleVisibility(activeSection);
    questionAreaView.answerBox.focus();
    console.log(activeSection);
  }
}

export default new ContentAreaView();
