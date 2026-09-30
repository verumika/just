document.addEventListener('DOMContentLoaded', () => {
  const menuContainer = document.querySelector('ul.submenu');
  if (!menuContainer) return;

  // Вставляем один пункт с подменю (можно добавить ещё такие же li.has-submenu)
  menuContainer.insertAdjacentHTML('beforeend', `

<li><a href="1005.html"><b>&#8592; <i>"Чаты с ИИ"</i></b></a></li>
<li><a href="3051.html">«Кот Шрёдингера»</a></li>
<li><a href="3052.html">Научность и истинность</a></li>
<li><a href="3053.html">Начало обсуждения дихотомии</a></li>
<li><a href="3054.html">Одна несправедливость разрушает всю систему справедливости</a></li>
<li><a href="3055.html">ИИ оспаривает полное разрушение справедливости</a></li>
<li><a href="3056.html">ИИ оспаривает связь всех во всеми</a></li>
<li><a href="3057.html">Является ли справедливость свойством мира?</a></li>
<li><a href="3058.html">Переход к обсуждению всеобщности антиверумизма</a></li>
<li><a href="3059.html">Критика кругового доказательства</a></li>
<li><a href="3060.html">Разрыв круговой логики через онтологию</a></li>
<li><a href="3061.html">Признание логичности верумики и эмпирических подтверждений</a></li>
<li><a href="3062.html">Доказательство научности верумики</a></li>
<li><a href="3063.html">Переход к написанию научной статьи</a></li>
<li><a href="3064.html"><b>Научная статья</b></a></li>
<li><a href="3065.html">«Deepseek» бросил разметку текстов и предложил научную статью</a></li>
<li><a href="3051.html">---</a></li>
<li><a href="3051.html">---</a></li>
<li><a href="3051.html">---</a></li>



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
