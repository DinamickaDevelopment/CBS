﻿var util = require('util');

var obj = {
    a: 1,
    b: 2,
    // свойство inspect будет использоваться методом util.inspect для отображения объекта
    // (работает похоже на метод объектов toString)
    inspect: function () {
        return 123; 
    }
}

// метод util.inspect возвращает строковое представление объекта 
console.log(util.inspect(obj));

// метод util.format(format[, ...]) возвращает отформатированную строку 
// первый аргумент - строка, содержащая специальные символы
// каждый специальный символ будет заменен соответствующим аргументом метода

// %s - Строка
// %d - Число (целое или число с плавающей запятой) 
// %j - JSON
// %% - символ '%'

var str1 = util.format('%s:%d', 'Hello world', 28);
console.log(str1); // Hello world:28 

var str2 = util.format('%d', 12345, 'some string');
// если в функцию format не передано аргументов, соответствующих специальным символам, 
// форматирующая строка будет заменена аргументами
console.log(str2);  // 12345 some string 

var test_obj = {
    a: 1, 
    b: 'hello'
} 

// альтернативой метода util.format для отображения данных в формате JSON является 
// метод JSON.stringify 
var str3 = util.format('%j', test_obj); 

console.log(str3);