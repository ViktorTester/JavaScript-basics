                                        // Добавление, удаление, изменение свойств


// Мы можем добавить в объект любое свойство.

// Добавление свойства:
const person = {};
person.occupation = "programmer";
console.log(person.occupation); // Выведет programmer

// Мы можем удалить из объекта любое свойство.

// Удаление свойства:
let person = {name: 'Татьяна'};

delete person.name;

console.log(person.name); // Выведет undefined

// Несмотря на то, что объект объявлен с помощью const, его содержимое можно изменить:
const person = {name: "Василий"};

person.name = "Константин";
console.log(person.name); // Выведет Константин
person.name = prompt();
console.log(person.name); // Выведет введенное пользователем значение

// !Ошибка возникнет только если мы попытаемся изменить саму константу person:
person = 5; // ошибка


                                        // Отличие объекта от примитива


// Объекты и примитивы (строка, число, логическое значение) отличаются тем,
// каким образом они копируются и присваиваются другим переменным.

// Примитивы являются значимым типом данных, и при их присвоении или передаче
// они копируются полностью. Изменения в копии не повлияют на оригинальное значение.

// Пример:
let x = 10;
let y = x; // y получает копию значения x

y = 20; // Изменение y не влияет на x

console.log(x); // Выведет 10


// Объекты являются ссылочным типом данных. Это означает, что, когда объект
// присваивается другой переменной, передается не сам объект, а ссылка на его
// местоположение в памяти. Изменения в копии объекта повлияют на оригинальное значение объекта.

// Пример:
const apple = {color: "green"};
const banana = apple; // теперь banana ссылается на тот же объект, что и apple

banana.color = "yellow"; // Изменение banana также изменит apple

console.log(apple.color); // Выведет yellow
