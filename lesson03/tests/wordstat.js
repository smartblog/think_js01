// 2. Написать чистую функцию, которая принимает текст, и возвращает массив объектов со структурой
// word: само слово
// code: сумма кодов всех символов слова
// Словом можно считать символы между пробелами
// Для подсчета суммы кодов всех символов слова написать отдельную чистую функцию, на нее так же написать тесты
// Сигнатура
// wordStat(text: string): {word: string: code: number}[]
// Пример
// исходный текст:
//
// Lorem ipsum dolor sit amet.
//
// результат:
// [
//   { word: 'Lorem', sum: 511 },
//   { word: 'ipsum', sum: 558 },
//   { word: 'dolor', sum: 544 },
//   { word: 'sit', sum: 336 },
//   { word: 'amet.', sum: 469 }
// ]
// Написать тесты для этой функции

/**
 * Функция, которая принимает текст, и возвращает массив объектов со структурой
 *
 * @params {string} текст
 * @returns {array} массив объектов
 */
function wordStat(text) {
    if (!text)
        throw new Error('Value is empty');

    if (typeof text !== "string")
        throw new Error('Value is not string');

    if (text.replace(/\s+/g, ' ').trim() === "")
        throw new Error('String has not words');

    const array = text.split(" ");

    const result = array.reduce( (stats, word) => {
      stats.push({ word: word, sum: sumCodes(word) });
      return stats;
    } , [])

    return result
}

/**
 * Функция для подсчета суммы кодов всех символов слова
 *
 * @params {string} word слово для подсчета
 * @returns {number} сумма кодов всех символов слова
 */
function sumCodes(word) {
    if (!word)
        throw new Error('Value is empty');

    if (typeof word !== "string")
        throw new Error('Value is not string');

    let sumCodes = 0;
    for ( let i = 0 ; i < word.length ; i++ ) {
      sumCodes += word.charCodeAt(i);
    }
    return sumCodes;
}

text = "Lorem ipsum dolor sit amet."
console.log(wordStat(text));
