This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# react-learnjavascriptru-v2

## Related

https://github.com/romabelka/basic-react-10-09

## React

### React Animation

https://reactjs.org/docs/animation.html

https://github.com/reactjs/react-transition-group

https://github.com/reactjs/react-transition-group/tree/v1-stable

### React-redux

Установил `npm i -S react-redux@5.x`, потому что с 6.x пока наблюдаются проблемы/баги

https://github.com/reduxjs/react-redux/issues/1177

**Update**: установил 6.x версию `npm i react-redux -S` всё работает!

### Redux middlewares for action side effects

https://github.com/zerobias/effector

https://github.com/redux-observable/redux-observable

https://github.com/redux-saga/redux-saga

https://github.com/redux-utilities/redux-promise

https://github.com/pburtchaell/redux-promise-middleware

https://github.com/reduxjs/redux-thunk

### Internationalization

https://github.com/yahoo/react-intl

## Tests

https://github.com/airbnb/enzyme

https://facebook.github.io/create-react-app/docs/running-tests

## Immutable

https://github.com/immutable-js/immutable-js

https://github.com/mweststrate/immer

## Other

https://github.com/paularmstrong/normalizr

https://github.com/erikras/ducks-modular-redux

https://github.com/wix/redux-cornell

https://github.com/Netflix/falcor

## HT

##HT1.1 Починить закрытие статьи
##HT1.2 Подключить календарь(https://github.com/gpbl/react-day-picker) с выбором диапазона дат, отображать этот диапазон текстом
##HT1.3 Реализовать список комментариес к статье, открывать/закрывать по нажатию на кнопку(менять на ней текст)
##HT1.4 Вынести функционал открытия/закрытия в декоратор

##HT2.1 Анимировать список комментариев
##HT2.2 Написать тесты на список комментариев
##HT2.3 Написать для всего propTypes
##HT2.4 Написать тест на закрытие статьи

##HT3.1 Вынести состояние фильтров в стор
##HT3.2 Показывать в ArticleList только отфильтрованные статьи

##HT4.1 Реализовать форму для добавления комментария в CommentList (user, text).
##HT4.2 Переписать articles аналогично comments (id -> article)
##HT4.3 Реализовать мидлвару для генерации случайных id
##HT4.4 Реализовать добавление комментария к статье

##HT5.1 Реализовать загрузку комментов к статье при открытии списка(/api/comment?article=56c782f18990ecf954f6e027)
##HT5.2 Показывать лоадер при загрузке, загружать комменты только при первом открытии

##HT6.1 Починить баг при переходе сразу на страницу статьи
##HT6.2 Реализовать страницу для пагинации ВСЕХ комментариев(/api/comment?limit=5&offset=10), загружать каждую страницу один раз

##HT7.1 Реализовать локализацию(en/ru), хранить словарь в контексте
