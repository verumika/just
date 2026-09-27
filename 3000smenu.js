document.addEventListener('DOMContentLoaded', () => {
  const menuContainer = document.querySelector('ul.submenu');
  if (!menuContainer) return;

  // Вставляем один пункт с подменю (можно добавить ещё такие же li.has-submenu)
  menuContainer.insertAdjacentHTML('beforeend', `

<li><a href="1005.html"><b>&#8592; <i>"Чаты с ИИ"</i></b></a></li>
<li><a href="3001.html">Перемножение векторов</a></li>
<li><a href="3002.html">Добавление третьего вектора</a></li>
<li><a href="3003.html">Добавление четвертого вектора</a></li>
<li><a href="3004.html">Добавление пятого вектора</a></li>
<li><a href="3005.html">При n → ∞</a></li>
<li><a href="3006.html">Неравные векторы</a></li>
<li><a href="3007.html">Когда углы неравны</a></li>
<li><a href="3008.html">Полная модель</a></li>
<li><a href="3009.html">Добавление справедливости</a></li>
<li><a href="3010.html">Точность справедливости</a></li>
<li><a href="3011.html">Цепные реакции</a></li>
<li><a href="3012.html">Революции в социуме</a></li>
<li><a href="3013.html">Отмирание государства</a></li>
<li><a href="3014.html">Верумика и социум</a></li>
<li><a href="3015.html">Первое доказательство верумики</a></li>
<li><a href="3016.html">Второе доказательство верумики</a></li>
<li><a href="3017.html">Взрыв в науке</a></li>
<li><a href="3018.html">Куда двигаться дальше?</a></li>
<li><a href="3019.html">Справедливость проста!</a></li>
<li><a href="3020.html">Мужчина и Женщина</a></li>



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
