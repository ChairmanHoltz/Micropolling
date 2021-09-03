import View from './View.js';
import questionAreaView from './questionAreaView.js';

class MenuView extends View {
  _parentEl = document.querySelector('.main_menu');

  addHandlerMenuBtns(handler) {
    this._parentEl.addEventListener('click', function (e) {
      const btn = e.target.closest('.menu_btn');
      if (!btn) return;
      const activeMenuItem = +btn.dataset.menu;
      handler(activeMenuItem);
    });
  }
}

export default new MenuView();
