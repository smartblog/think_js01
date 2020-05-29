const colors = ["red", "blue", "green", "yellow", "black", "grey", "white"]
const palette = generatePalette(colors);
const artboardTable = generateTable(20, 20);

const divPalette = document.getElementById("palette");
const divArtboard = document.getElementById("artboard");

let currentColor = 'white';

divPalette.append(palette);
divArtboard.append(artboardTable);

divPalette.addEventListener('click', getColor);
divArtboard.addEventListener('click', setColor);

/**
 * Функция генерации таблицы
 *
 * @param {number} rows количество строк
 * @param {number} columns количество столбцов
 * @returns {Element} table
 */
function generateTable(rows, columns) {
    const table = document.createElement('table');

    for ( i = 0 ; i < rows ; i++ ) {
        const row = document.createElement('tr');

        for ( j = 0 ; j < columns ; j++ ) {
            const column = document.createElement('td');
            row.append(column)
        }

        table.append(row);
    }

    return table;
}

/**
 * Функция генерации палитры
 *
 * @param {array} colors массив цветов
 * @returns {Element} table
 */
function generatePalette(array) {
    const table = document.createElement('table');
    const row = document.createElement('tr');

    for ( i = 0 ; i < array.length ; i++ ) {
        const cell = document.createElement('td');
        cell.style.backgroundColor = array[i]
        row.append(cell);
    }

    table.append(row);
    return table;
}

function getColor(event) {
    currentColor = event.target.style.backgroundColor;
    const div = document.getElementById("current-color");
    div.style.backgroundColor = currentColor;
}

function setColor(event) {
    if (event.target.tagName !== 'TD')
        return;

    event.target.style.backgroundColor = currentColor;
}
