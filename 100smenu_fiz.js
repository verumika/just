document.addEventListener('DOMContentLoaded', () => {
  const menuContainer = document.querySelector('ul.submenu');
  if (!menuContainer) return;

  // Вставляем один пункт с подменю (можно добавить ещё такие же li.has-submenu)
  menuContainer.insertAdjacentHTML('beforeend', `

<li><a href="122_vved.html">Введение в верумическую науку</a></li>
<li><a href="101_form.html">Начало формализации</a></li>
<li><a href="102_metaop.html">Справедливость - метаоператор</a></li>
<li><a href="103_limraz.html">Предел разумности</a></li>
<li><a href="104_formlimraz.html">Формализация предела разумности</a></li>
<li><a href="105_dem.html">Демография + фазовый переход</a></li>
<li><a href="106_subspr.html">Субъектность и справедливость</a></li>
<li><a href="107_sistur.html">Минимальная система уравнений</a></li>
<li><a href="108_minkos.html">Минимальная космология</a></li>
<li><a href="109_teorrazm.html">Теория размерности</a></li>
<li><a href="110_teorchas.html">Теория частиц</a></li>
<li><a href="111_rekstmod.html">Реконструкция Стандартной модели</a></li>
<li><a href="112_rekurkon.html">Реконструкция уравнений и констант</a></li>
<li><a href="113_teorvrem.html">Теория времени</a></li>
<li><a href="114_teorkvant.html">Теория квантовости</a></li>
<li><a href="115_teornabl.html">Теория наблюдателя</a></li>
<li><a href="116_teorzakpr.html">Теория законов природы</a></li>
<li><a href="117_teorprostr.html">Теория пространства</a></li>
<li><a href="118_teormat.html">Теория материи</a></li>
<li><a href="119_kosmogon.html">Космогония</a></li>
<li><a href="120_metamat.html">Метаматематика физики</a></li>
<li><a href="121_psihofiz.html">Психофизика</a></li>

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
