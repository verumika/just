document.addEventListener('DOMContentLoaded', () => {
  const menuContainer = document.querySelector('ul.submenu');
  if (!menuContainer) return;

  // Вставляем один пункт с подменю (можно добавить ещё такие же li.has-submenu)
  menuContainer.insertAdjacentHTML('beforeend', `

<li><a href="601_f.html">Онтологическая ответственность философии</a></li>
<li><a href="602_f.html">Что такое верумическая философия</a></li>
<li><a href="603_f.html">Аксиология</a></li>
<li><a href="604_f.html">Гносеология</a></li>
<li><a href="605_f.html">Онтология</a></li>
<li><a href="606_f.html">Витология</a></li>
<li><a href="607_f.html">Антропология</a></li>
<li><a href="609_f.html">Философия науки и культуры</a></li>
<li><a href="611_f.html">Эпистемология</a></li>
<li><a href="613_f.html">Начала абсолютного знания</a></li>
<li><a href="612_f.html">Антиверумизм как отказ от ответственности и от власти</a></li>
<li><a href="608_f.html">Логос</a></li>
<li><a href="610_f.html">Бесконечное блаженство</a></li>


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
