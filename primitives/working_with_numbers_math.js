// В JavaScript есть встроенные функции и методы, которые позволяют
// работать с числами. Например, известная нам функция Number()
// является встроенной функцией, преобразующая строку в число.


                                        // Функции


// isNaN(): Проверяет, является ли значение не числом (Not-a-Number).
console.log(isNaN(42)); // Выведет: false, так как 42 - это число
console.log(isNaN("hello")); // Выведет: true, так как "hello" не является числом

// parseInt(): Эта функция преобразует строку в целое число. Она извлекает целое число
// из начала строки и проигнорирует все ненужные символы после числа.
// Аналог функции Number() с дополнительными преимуществами.

const strNumber = "42";
const parsedNumber = parseInt(strNumber); // parsedNumber станет равным 42 (числовой тип)

// Если строка содержит символы, не являющиеся частью числа, parseInt() просто проигнорирует их:

const strMixed = "42 years old";
const parsedMixed = parseInt(strMixed); // parsedMixed станет равным 42

// parseFloat() - это встроенная функция в JavaScript, которая используется для
// преобразования строки в вещественное число
// (числа с плавающей точки, десятичные числа и т.д.)

let numString = "3.14";
let num = parseFloat(numString);
console.log(num); // Вывод: 3.14

let mixedString = "10 apples";
let parsedNum = parseFloat(mixedString);
console.log(parsedNum); // Вывод: 10


                                        // Объект Math


// В JavaScript есть встроенный объект Math. Он содержит функции,
// позволяющие работать с числами и набор встроенных констант.


                                        // Математические операции


// Math.pow(): возвращает число, возведенное в указанную степень.
let result = Math.pow(2, 3); // 2 возводится в 3-ю степень
console.log(result); // Вывод: 8

// Math.sqrt(): возвращает квадратный корень числа.
let squareRoot = Math.sqrt(25); // Квадратный корень из 25
console.log(squareRoot); // Вывод: 5


                                        // Константы


// Math.PI - число Пи.
console.log(Math.PI); // Вывод: 3.141592653589793

// Math.E - число Эйлера.
console.log(Math.E); // Вывод: 2.718281828459045


                                        // Округление числа


// Math.round(): Округляет число до ближайшего целого.
console.log(Math.round(3.7)); // Выведет: 4

// Math.floor(): Округляет число вниз до ближайшего меньшего целого.
console.log(Math.floor(3.7)); // Выведет: 3

// Math.ceil(): Округляет число вверх до ближайшего большего целого.
console.log(Math.ceil(3.2)); // Выведет: 4


                                        // Прочее


// Math.abs(): Возвращает абсолютное значение числа (отбрасывает знак).
console.log(Math.abs(-5)); // Выведет: 5


// Math.random(): Возвращает случайное число в интервале от 0 (включительно) до 1 (не включительно).
const randomNum = Math.random(); // Случайное число от 0 до 1
const randomNum = Math.round(Math.random() * 10); // случайное число от 0 до 10

// Math.min() и Math.max() возвращают минимальное или максимальное число из указанного набора.
let minNumber = Math.min(5, 3, 9, 1, 7);
let maxNumber = Math.max(5, 3, 9, 1, 7);

console.log(minNumber); // Вывод: 1
console.log(maxNumber); // Вывод: 9