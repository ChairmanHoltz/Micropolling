import View from './View.js';
import menuView from './menuView.js';

class AboutView extends View {
  _parentEl = document.querySelector('.content_area');

  _generateMarkup() {
    return `
      <section class="section sticky about menu_active--1">
        <h2 class="section_heading">About microPolling™</h2>
        <p>microPolling™ is about gathering informal survey data for low-stakes questions. What's the first cheese people think of? That's a job for microPolling™! microPolling™ provides no definitive answers, only fodder for future heated discussions about pointless minutiae.</p>
        <button class="btn generic_btn_size" id="start_polling">Start microPolling™ Now!</button>
      </section>
    `;
  }
}

export default new AboutView();
