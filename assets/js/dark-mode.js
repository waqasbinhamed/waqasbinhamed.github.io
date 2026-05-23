(function () {
  var STORAGE_KEY = 'darkMode';

  function applyTheme(dark) {
    document.body.classList.toggle('dark-mode', dark);
    var btn = document.querySelector('.dark-mode-toggle');
    if (btn) btn.textContent = dark ? '☀️' : '🌙';
  }

  function init() {
    var saved = localStorage.getItem(STORAGE_KEY);
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var dark = saved !== null ? saved === 'true' : prefersDark;

    applyTheme(dark);

    var btn = document.createElement('button');
    btn.className = 'dark-mode-toggle';
    btn.title = 'Toggle dark mode';
    btn.textContent = dark ? '☀️' : '🌙';

    btn.addEventListener('click', function () {
      var isDark = document.body.classList.toggle('dark-mode');
      localStorage.setItem(STORAGE_KEY, isDark);
      btn.textContent = isDark ? '☀️' : '🌙';
    });

    var nav = document.querySelector('.greedy-nav__toggle') ||
              document.querySelector('.visible-links');
    if (nav && nav.parentNode) {
      nav.parentNode.insertBefore(btn, nav);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
