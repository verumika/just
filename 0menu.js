document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('nav.main-nav');
  if (!nav) return;

  nav.insertAdjacentHTML('beforeend', `

<a href="index.html">Проект</a>
<a href="601_f.html">Философия</a>
<a href="201_vvn.html">Метафизика</a>
<a href="122_vved.html">Физика</a>
<a href="301_formhim.html">Химия</a>
<a href="401_nachyeor.html">Теория ВСЕГО</a>
<a href="501_s.html">Симуляция ВЕРУМИКИ</a>
<a href="701.html">Психология</a>
<a href="802.html">Справедливость</a>
<a href="1005.html">Лаборатория</a>

  `);
});

