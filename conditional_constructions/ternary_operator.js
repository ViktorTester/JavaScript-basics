                                        // Тернарный оператор


// Тернарный оператор - это специальный оператор в программировании,
// который позволяет создать компактное условное выражение.
// Тернарный оператор имеет следующий синтаксис:

// условие ? значение_если_истина : значение_если_ложь

// В зависимости от того, выполняется ли условие, тернарный оператор возвращает одно из двух значений.

// Оператор называется "тернарным" потому, что он принимает три операнда:
// условие, значение1 и значение2. Помимо тернарного существуют унарные
// (принимающие один операнд) и бинарные (принимающие два операнда).

// Пример:
let totalRevenue = 100000;
// рекомендуется заключать условие в круглые скобки для простоты понимания

let status = (totalRevenue > 0) ? "Прибыль" : "Убыток";

console.log(status); // Прибыль

// В этом примере, если totalRevenue больше нуля, тернарный оператор вернет "Прибыль",
// и это значение будет присвоено переменной status. Если totalRevenue равна нулю
// или меньше, тернарный оператор вернет "Убыток" и присвоится status.

// Без тернарного оператора код выглядел бы так:
let totalRevenue = 100000;
let status;

if (totalRevenue > 0) {
    status = "Прибыль";
} else {
    status = "Убыток";
}

console.log(status);