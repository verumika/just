document.addEventListener('DOMContentLoaded', () => {
  const menuContainer = document.querySelector('ul.submenu');
  if (!menuContainer) return;

  // Вставляем один пункт с подменю (можно добавить ещё такие же li.has-submenu)
  menuContainer.insertAdjacentHTML('beforeend', `

<li><a href="401_nachyeor.html">Теория теорий</a></li>
<li><a href="402_spravteor.html">Справедливость всех теорий</a></li>
<li><a href="403_onmatem.html">Только математика!</a></li>
<li><a href="404_minaks.html">Минимальный набор аксиом</a></li>
<li><a href="405_minosn.html">Проверка минимальности основания</a></li>
<li><a href="406_strrazv.html">Универсальная структура развития</a></li>
<li><a href="407_minsogl.html">Минимальное условие согласованности</a></li>
<li><a href="408_urv.html">Универсальный принцип эволюции</a></li>
<li><a href="409_gf.html">Гипотеза функционала</a></li>
<li><a href="410_mp.html">Минимальный потенциал "V"</a></li>
<li><a href="411_mvpo.html">Может ли "V" порождать объекты?</a></li>
<li><a href="412_vpks.html">Возможен ли переход к субъекту?</a></li>
<li><a href="413_pkss.html">Переход к системе субъектов</a></li>
<li><a href="414_pksr.html">Переход к саморефлексивности</a></li>
<li><a href="415_sps.html">Есть ли предельное состояние?</a></li>
<li><a href="416_tsps.html">Теорема предельного состояния</a></li>
<li><a href="417_pkfr.html">Переход к физической реальности</a></li>
<li><a href="418_pnd.html">Принцип наименьшего действия</a></li>
<li><a href="419_fsc.html">Функционал согласованности "C"</a></li>
<li><a href="420_mfs.html">Минимальный функционал "C"</a></li>
<li><a href="421_rpv.html">Размерность пространства‑времени</a></li>
<li><a href="422_rfc.html">Размерностный функционал</a></li>
<li><a href="423_vm.html">Выведение метрики</a></li>
<li><a href="424_kpz.html">Калибровочные поля и заряд</a></li>
<li><a href="425_mk.html">Механизм квантования</a></li>
<li><a href="426_aem.html">Атомы, элементы, молекулы</a></li>
<li><a href="427_mmh.html">Минимальная модель химии</a></li>
<li><a href="428_evh.html">Эксперимент верумической химии</a></li>
<li><a href="429_iss.html">Идея создания симуляции</a></li>
<li><a href="430_mms.html">Минимальная модель симуляции</a></li>
<li><a href="431_vs1.html">Верумическая симуляция 1.0</a></li>
<li><a href="432_vs2.html">Верумическая симуляция 2.0</a></li>



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
