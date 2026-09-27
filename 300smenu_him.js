document.addEventListener('DOMContentLoaded', () => {
  const menuContainer = document.querySelector('ul.submenu');
  if (!menuContainer) return;

  // Вставляем один пункт с подменю (можно добавить ещё такие же li.has-submenu)
  menuContainer.insertAdjacentHTML('beforeend', `

<li><a href="301_formhim.html">Начало формализации химии</a></li>
<li><a href="302_oprpon.html">Определение понятий</a></li>
<li><a href="303_matkar.html">Математический каркас</a></li>
<li><a href="304_matjadr.html">Математическое ядро</a></li>
<li><a href="305_interpret.html">Интерпретация "Omega"</a></li>
<li><a href="306_svpot.html">Свойства потенциала "V"</a></li>
<li><a href="307_spravmera.html">Справедливость как мера согласованности</a></li>
<li><a href="308_srukrav.html">Структурное равновесие</a></li>
<li><a href="309_aksmod.html">Аксиоматическая модель</a></li>
<li><a href="310_otnek.html">Отношение эквивалентности</a></li>
<li><a href="311_obnaks.html">Обновленная аксиоматическая программа</a></li>
<li><a href="312_treb.html">Требования для объекта "A"</a></li>
<li><a href="313_progun.html">Программа унификации 1.0</a></li>
<li><a href="314_progun2.html">Программа унификации 2.0 и 3.0</a></li>
<li><a href="315_varin.html">Четыре варианта инвариантов</a></li>
<li><a href="316_poiskperv.html">Поиск первичности</a></li>
<li><a href="317_porfor.html">Изменение порядка формулировок</a></li>



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
