const buttons = document.querySelectorAll('[data-lang]');
const policies = document.querySelectorAll('[data-policy]');

function switchLanguage(lang) {
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang;
  buttons.forEach((button) => {
    button.setAttribute('aria-selected', String(button.dataset.lang === lang));
  });
  policies.forEach((policy) => {
    policy.hidden = policy.dataset.policy !== lang;
  });
  history.replaceState(null, '', `#${lang}`);
}

buttons.forEach((button) => {
  button.addEventListener('click', () => switchLanguage(button.dataset.lang));
});

const initialLanguage = location.hash.slice(1);
if (['ja', 'zh', 'en'].includes(initialLanguage)) {
  switchLanguage(initialLanguage);
}
