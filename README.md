Установка зависимостей `npm install`

Запуск проекта `npm run dev`


Сделал компонент `/src/components/Sidebar.jsx` по дизайну c использованием styled-components.

- В `/src/index.scss` есть дизайн-токены для светлой и темной темы
- В зависимости от prop `color` имеет стили темной или светлой темы
- Возможность смены темы была реализована в styled-components за счет дизайн-токенов
- Кнопку для переключения темы делать было не нужно

[Анимированная версия](src/assets/design.mp4)

[Оригинал](https://dribbble.com/shots/18111119-Collapsing-Sidebar-Navigation-Light-and-Dark-mode)

![design.png](src/assets/design.png)

#### Верстать нужно было 

- лого
- элементы навигации
- `hover`, `active` состояния у элементов Sidebar
- анимация при закрытии/открытии у элементов, которые скрываются/появляются

