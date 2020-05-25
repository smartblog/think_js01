const arr = [-91, -93, -45, 67, 96, 40, -34, 96, -42, 58]

/**
 * Функция считающая сумму и количество положительных элементов массива.
 *
 * @params {array} array массив чисел
 * @returns {Result}
 */
function sumOfPositive(array) {
    if (!array)
        throw new Error('Value is empty');

    if (!Array.isArray(array))
        throw new Error('Value is not array');

    if (array.length === 0) {
        return {
            count: 0,
            sum: 0
        }
    };

    const checkArray = array.filter(number => isNaN(number));

    if (checkArray.length > 0)
        throw new Error('Invalid array');

    const filterArray = array.filter(number => number > 0);

    if (filterArray.length === 0) {
        return {
            count: 0,
            sum: 0
        }
    };

    const count = filterArray.length;
    const sum = filterArray.reduce( (sum, number) => sum + number );

    return {
        count,
        sum
    }
}

console.log(sumOfPositive(arr));
