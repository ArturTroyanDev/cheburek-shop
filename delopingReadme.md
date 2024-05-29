1. admin to do at the end
2. Components
- general template - its indents
- buttons
- inpaths
- headers
- header
- footer
- menu
- product card (which includes inputs, buttons...)
- product list which includes product cards
- cart
-
- then you compose everything into a page and make different pages as sets of components.
3. Make full control of the states of each block on the page and good reusability of components
4. use css module and sass
5. Anything that repeats is put into a component.


Naming Conventions 
1. module names are written with a small letter

Images
1. JPEG - content images
2. PNG - background images
2. SVG - icons


Rules, etc
1. if export is default, the component is exported without curly brackets.
2. file imports are done in the following sequence: 1. React, next, styles, photos, libraries and custom components
3. dont use margin
4. Interfaces and types are capitalized



Tasks
1. Исправить проблему с липким хедером - изучить вопрос как правильно его делать
2. Разобраться как давать названия и описание комитам 
3. Сделать сниппеты
4. "sharp": "^0.33.3" may need to be removed
5. Переделать лист карточек с товарами на грид
6. Сделать так шо б при уменьшении ширины экрана уменьшались и боковые падинги на карточка с хавкой вплоть до 0. 
7. Сделать шо б если в корзине нет товаров, т.е если счетчика нет, то корзина была по центру, а если он появляется, то корзина плавно отодвигается в блок
8. рассмотреть идею смены названия компоненту БургерМеню
9. implement the function of closing the sidebar when clicking outside the menu
10. implement closing and unclosing the sidebar with a swipe 
11. Consider the idea of making the sidebar the full height of the screen, so that the header is underneath it
12. make icons display in sidebar component
13. Объект сразу с иконкой.... и текстом категории...
