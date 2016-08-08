# Film-search

Приложение “Поиск фильма”. Используется API сервиса themoviedb.org в качестве источника базы фильмов.

## Prerequisites

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Функционал приложения
* Отображение позиций на странице в плиточном виде (картинка, название и год)
* Поиск по имени
* Динамическая подгрузка (пагинация)
* Выбор фильма и отображение более подробной информации на отдельной странице
* Страница 404
* Адаптивная верстка
 * Для удобства пользователя при отображении на устройствах с небольшим разрешением экрана (320 - 479 px) контрол пагинации продублирован также внизу страницы.
* Сохранение состояний поиска / возможность вернуться на пару шагов назад
* Обработка ошибок при загрузке данных с TMDB. В случае возникновения ошибки, пользователь автоматически перенаправляется на главную страницу.
