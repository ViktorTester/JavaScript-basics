                                        // Создание переменной


// Переменная в JavaScript — именованная область памяти, которая используется
// для хранения данных. Переменная подобна контейнеру, в котором вы можете хранить информацию.

// Вы можете создать сколько угодно переменных. Каждая переменная имеет имя,
// которое вы можете придумать, и значение, которое вы можете "поместить" в эту переменную.

// Чтобы создать (или «объявить») переменную в JavaScript, вам нужно использовать
// ключевое слово let, а затем выбрать имя переменной. Например:

let age; // Создание переменной с именем "age"

// var – устаревшее ключевое слово для объявления переменной.


                                        // Присваивание значения переменной


// Когда мы присваиваем значение переменной, мы "кладем" или "помещаем" определенное
// значение внутрь этой переменной, чтобы она могла хранить и использовать его позже.

// Это выполняется с помощью оператора присваивания =.
// В математике знак = указывает на равенство, а в программировании выполняет операцию присваивания.

// Например:
let name = "Вася"; // Создание переменной "name" и присвоение ей значения "Вася".

// Мы не можем объявить переменную более одного раза.
let amount = 5;
let amount = 9; // неправильно

// Однако мы можем изменить значение переменной без let:
let amount = 5; // в amount хранится число 5
amount = 9; // теперь в amount хранится число 9


                                        // Работа с переменными


// После того, как мы присвоили значение переменной мы можем работать с ней,
// используя ее имя. В этом заключается смысл и удобство переменных:

// let name = "Вася";
console.log(name);  // В консоль выведется «Вася»

// Еще пример:
let x = 80;
let y = 100;
console.log(x, y); // 80 100
console.log(x + y); // 180

// Имена переменных чувствительны к регистру, то есть переменная Name и
// переменная name - это две разные переменные. Перед работой с переменной,
// ее обязательно нужно объявить, иначе программа выдаст ошибку:

let name = "Алишер";
console.log(Name);  // ошибка: переменная Name не объявлена

// Обращение к несуществующим или необъявленным переменным вызывает ошибку.

// Также мы можем скопировать значения из одной переменной в другую.
let name = "Вася";
let surname;
surname = name;

console.log(name); // Выведет: Вася
console.log(surname); // Выведет: Вася


                                        // Константа


// Константа — это тип переменной в программировании, которая отличается от обычной
// переменной тем, что её значение нельзя изменить после её определения.
// Чтобы объявить константу используйте const вместо let.

// Отличие константы от обычной переменной:
// Мы не можем изменять значения константы, объявленной с помощью const
const num = 222;
num = 111; // ошибка

// Значение переменной, объявленной с помощью let, мы можем изменять столько, сколько захотим.
let num = 222;
num = 111; // новое значение успешно присвоено переменной


                                        // Имена переменных


// При именовании переменных следует соблюдать следующие правила:

// -Имя переменной должно содержать только буквы, цифры или символы '$' и '_'.
// -Имена переменных не могут начинаться с цифры.
// -Избегайте использования зарезервированных ключевых слов JavaScript,
// таких как var, let, const в качестве имен переменных.

// Примеры неправильных имён переменных:
let 2pac; // не может начинаться с цифры
let to-be; // дефис '-' не разрешён в имени

// Если имя содержит несколько слов, обычно используется camelCase (верблюжья нотация),
// то есть, каждое слово, за исключением первого, начинается с заглавной буквы.
// Например: totalSumOfProducts, myName


                                        // Рекомендации


// -Используйте легко читаемые имена переменных, отражающие
// их содержимое. Например, age, username, isActive.
// -Используйте английский язык.

// Это делается для того, чтобы облегчить чтение и понимание кода для вас и других разработчиков.