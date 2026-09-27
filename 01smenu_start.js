document.addEventListener('DOMContentLoaded', () => {
  const menuContainer = document.querySelector('ul.submenu');
  if (!menuContainer) return;

  // Вставляем один пункт с подменю (можно добавить ещё такие же li.has-submenu)
  menuContainer.insertAdjacentHTML('beforeend', `

<li><a href="index.html">Что такое верумика?</a></li>
<li><a href="011_csv.html">Обоснование научности верумики</a></li>
<li><a href="012_ni.html">Переход от научности к истинности</a></li>
<li><a href="021.html"><b>Эмпирическое доказательство истинности верумики</b></a></li>
<li><a href="022.html"><b>Научная статья формального доказательства верумики</b></a></li>
<li><a href="023.html">Справедливость как геометрия</a></li>
<li><a href="013_pc.html">Главное требование для понимания верумики</a></li>
<li><a href="014_nb.html">Верумика и наука будущего</a></li>
<li><a href="016_z.html">Великое сокращение информации</a></li>
<li><a href="015_z.html">Устойчивое благополучие</a></li>
<li><a href="019_z.html">Об авторе верумики</a></li>
<li><a href="020_z.html">Резюме</a></li>


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
