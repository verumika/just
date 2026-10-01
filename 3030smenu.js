document.addEventListener('DOMContentLoaded', () => {
  const menuContainer = document.querySelector('ul.submenu');
  if (!menuContainer) return;

  // Вставляем один пункт с подменю (можно добавить ещё такие же li.has-submenu)
  menuContainer.insertAdjacentHTML('beforeend', `

<li><a href="1005.html"><b>&#8592; <i>"Чаты с ИИ"</i></b></a></li>
<li><a href="3031.html">Кто писал о вреде "веры в справедливый мир"?</a></li>
<li><a href="3032.html">Связь логики Лернера с дегуманизацией и эвфемизацией.</a></li>
<li><a href="3033.html">Инфантильное и верумическое понимание справедливости</a></li>
<li><a href="3034.html">Главная ложь Лернера</a></li>
<li><a href="3035.html">Научная статья о ЛОЖНОЙ "вере в справедливый мир"</a></li>
<li><a href="3036.html">Статья для "Проза.ру"</a></li>


  `);

  const toggles = document.querySelectorAll('.submenu-toggle');

  toggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      e.preventDefault(); // блокируем переход по ссылке-заголовку
      const parentLi = toggle.closest('li.has-submenu');
      const sub = parentLi.querySelector('.submenu-level-2');
      if (!sub) return;

      const isOpen = sub.style.display === 'block';

      // Сначала закрываем ВСЕ подменю
      document.querySelectorAll('li.has-submenu .submenu-level-2').forEach(s => {
        s.style.display = 'none';
        const t = s.closest('li').querySelector('.submenu-toggle .toggle-icon');
        if (t) t.textContent = '▼';
      });

      // Если до клика это меню было открыто — мы его просто закрыли (ничего не открываем)
      if (isOpen) {
        return;
      }

      // Открываем только текущее
      sub.style.display = 'block';
      toggle.querySelector('.toggle-icon').textContent = '▲';
    });
  });
});
