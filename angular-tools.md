# Angular CLI

Для компиляции приложения мы будем использовать инфрастуктуру Angular CLI. 

Angular CLI упрощает создание приложения, его отдельных сущностей (компонентов, модулей, сервисов и тд). Angular CLI распространяется как пакет npm, поэтому для его использования его необходимо сначала установить. Для установки Angular CLI откроем консоль/командную строку и выполним в ней следующую команду:

``npm install -g @angular/cli``


# Команды Angular CLI
Все команды должны начинаться со слова — `ng`. Таким образом мы показываем, что именно хотим использовать Angular CLI.

Вот список всех команд, которые вам понадобиться знать:

`ng new [name]` — сгенерирует проект с данным названием — [name]. Вместе с этим установит необходимые зависимости в директорию node_modules — это может занять несколько минут.

Для компиляции приложения мы будем использовать Angular CLI, поэтому нам надо описать поведение CLI с помощью файла angular.json. При генерации проекта создается автоматически. Подробнее с его конфигурациям можно ознакомиться [здесь](https://angular.io/guide/workspace-config).

`ng generate [spec_file] [name]` — создает [spec_file] с названием [name] и автоматически добавляет (производит import) его в модуль. Можно использовать сокращения и вместо `generate` писать просто `g`. Также можно сокращенно писать создаваемые сущности (spec_file),  так например вместо `component` писать `c`

| spec file  | команда |
| ------------- | ------------- |
| Component  | ng generate component name / ng g c name |
| Service  | ng generate service name / ng g s name  |
| Module  | ng generate module name / ng g m name  |
| Pipe  | ng generate pipe name / ng g p name  |
| Class | ng generate component name / ng g class name  |
| Guard  | ng generate guard name / ng g g name  |
| Interface  | ng generate interface name / ng g i name  |
| Enum | ng generate enum name / ng g e name  |
| Directive | ng generate directive name / ng g d name  |
| Routing module | ng generate module name --routing / ng g m name --routing  |


`ng serve` — запускает Webpack, который в свою очередь собирает файлы вашего проекта и переносит их в оперативную память вашего компьютера. Если вы замените какой-то файл, то он заново будет пересобирать ваш проект.

`Webpack` — это сборщик модулей. Он анализирует модули приложения, создает граф зависимостей, затем собирает модули в правильном порядке в один или более бандл (bundle), на который может ссылаться файл «index.html».

```
App.js ->       |
Dashboard.js -> | Bundler | -> bundle.js
About.js ->     |
```

`ng serve --prod` — также запустит Webpack, но уже будет оптимизировать ваш проект. Таким образом можно уменьшить размер проекта от одной до нескольких сотен килобайт. 

`ng build` — собирает все ваши файлы проекта и переносит их в папку dist. Далее вы можете делать с ними все что угодно — например, залить куда-нибудь на хостинг.

`ng build --prod` — оптимизирует файлы, больше ничем не отличается.

Полезные ссылки:

[Angular CLI создание проекта: основные команды](https://codelessons.ru/angular/angular-cli-sozdaniye-proyekta-osnovnyye-komandy.html)

[Что такое Angular. Первый проект](https://metanit.com/web/angular2/1.1.php)