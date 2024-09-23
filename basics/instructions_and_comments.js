                                        // Инструкции


// Инструкции – это синтаксические конструкции или команды, выполняющие определенные действия.

console.log('Привет')
// Знакомая нам инструкция из предыдущего модуля, выводящая сообщение «Привет».

// Обычно каждую инструкцию пишут на новой строке и отделяют точкой с запятой.
// Инструкции выполняются последовательно.
console.log(“to do:”);  // to do:
console.log(“learn JS”);  // learn JS

// Хотя большинство современных браузеров и интерпретаторов JavaScript могут
// автоматически вставлять точки с запятой, рекомендуется явно их указывать,
// чтобы избежать возможных неоднозначностей в коде.

// Каждая последующая инструкция console.log() выводит сообщение с новой строки.

// Чтобы вывести значения через пробел, можно записать их через запятую внутри скобок:
console.log('to do:', 'learn JS');  // to do: learn JS

// Через console.log() также можно выводить результаты математических операций:
console.log(4+6);  // Выведется 10.


                                        // Комментарии


// Комментарии не выполняются интерпретатором JavaScript и не влияют на выполнение программы.
// Комментарии полезны для объяснения логики кода или пометки временного решения.

// В этом курсе комментарии будут использоваться в примерах для объяснения кода.

// В JavaScript есть два типа комментариев: однострочные и многострочные.

// Однострочные комментарии начинаются с двойного слеша (//) и продолжаются до конца строки.
// Этот тип комментария удобен для добавления пояснений к коду или временного
// отключения определенных строк кода. Примеры:

// -> Это однострочный комментарий
console.log (“Hello, World!”) // Это вывод сообщения “Hello, World!” в консоль

// Закомментированная строка кода выполняться не будет. Следовательно, можно
// закомментировать те строки кода, выполнение которых временно не нужно:
// console.log (“Hello, World!”)

// Многострочные комментарии начинаются с символов /* и заканчиваются символами */.
// Они позволяют комментировать несколько строк кода. Пример:

/* Это многострочный комментарий.
Он может занимать несколько строк кода.
 */
