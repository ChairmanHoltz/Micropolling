import View from './View.js';
import questionAreaView from './questionAreaView.js';
import contentAreaView from './contentAreaView.js';

class MenuView extends View {
  _parentEl = document.querySelector('.main_menu');

  addHandlerMenuBtns() {
    this._parentEl.addEventListener('click', function (e) {
      const btn = e.target.closest('.menu_btn');
      if (!btn) return;
      const activeMenuItem = btn.dataset.menu;
      contentAreaView.displayActiveContent(activeMenuItem);
      // return activeMenuItem;
      // const activeMenuHTML = questionAreaView.parentEl.querySelector(
      //   `.menu_active--${activeMenuItem}`
      // );
      // console.log(activeMenuHTML);
      // handler(activeMenuHTML);
    });
  }
}

export default new MenuView();
