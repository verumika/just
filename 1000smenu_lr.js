document.addEventListener('DOMContentLoaded', () => {
  const menuContainer = document.querySelector('ul.submenu');
  if (!menuContainer) return;

  // Вставляем один пункт с подменю (можно добавить ещё такие же li.has-submenu)
  menuContainer.insertAdjacentHTML('beforeend', `

<li><a href="1005.html"><b>Чаты с ИИ &#8594</b></a></li>
<li><a href="1001.html"><b>Статьи с "Проза.ру" &#8594</b></a></li>
<li><a href="hypothesis.html" target="_blank" rel="noopener noreferrer"">Порог честности, предел разумности, бессмертие</a></li>
<li><a href="1999.html">---</a></li>



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
