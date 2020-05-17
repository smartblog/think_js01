const arr = [91, 93, 45, -67, -96, -40, 34, -96, 42, -58];

/**
 * Функция, которая принимает массив чисел и возвращает сумму и количество отрицательных элементов массива.
 *
 * @param {array} array Массив который нужно обработать
 */

function sumAndCount(array) {
    let sum = 0;
    let count = 0;

    arr.forEach(element => {
      if ( element < 0 ) {
        sum += element;
        count++;
      }
    });
    result = { count: count, sum: sum };
    return result;
}

console.log(sumAndCount(arr));
