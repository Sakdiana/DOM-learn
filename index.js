let table = document.body.firstElementChild;

// Красим главную диагональ
for (let i = 0; i < table.rows.length; i++) {
    let row = table.rows[i];
    row.cells[i].style.backgroundColor = 'red';
}

// Красим обратную диагональ
for (let i = 0; i < table.rows.length; i++) {
    let row = table.rows[i];
    row.cells[row.cells.length - 1 - i].style.backgroundColor = 'blue';
}

// Красим нижнюю строку
let lastRow = table.rows[table.rows.length - 1];
for (let i = 0; i < lastRow.cells.length; i++) {
    lastRow.cells[i].style.backgroundColor = 'green';
}
