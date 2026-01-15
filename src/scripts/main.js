'use strict';

// write code here
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const table = document.querySelector('tbody');
let rowsNumber = table.childElementCount;
let columnsNumber = table.firstChild.childElementCount;

const removeTable = () => {
  while (table.firstChild) {
    table.firstChild.remove();
  }
};

const drawColumns = () => {
  for (let i = 0; i < rowsNumber; i++) {
    let tr = '<tr>';
    let cells = '';

    for (let j = 0; j < columnsNumber; j++) {
      cells += `<td></td>`;
    }
    tr += cells + '</tr>';
    table.innerHTML += tr;
  }
};

appendRow.addEventListener('click', (e) => {
  if (rowsNumber < 10) {
    removeRow.disabled = false;
    rowsNumber++;
    removeTable();
    drawColumns();
  }

  if (rowsNumber === 10) {
    e.target.disabled = true;
  }
});

removeRow.addEventListener('click', (e) => {
  if (rowsNumber > 2) {
    appendRow.disabled = false;
    rowsNumber--;
    removeTable();
    drawColumns();
  }

  if (rowsNumber === 2) {
    e.target.disabled = true;
  }
});

appendColumn.addEventListener('click', (e) => {
  if (columnsNumber < 10) {
    removeColumn.disabled = false;
    columnsNumber++;
    removeTable();
    drawColumns();
  }

  if (columnsNumber === 10) {
    e.target.disabled = true;
  }
});

removeColumn.addEventListener('click', (e) => {
  if (columnsNumber > 2) {
    appendColumn.disabled = false;
    columnsNumber--;
    removeTable();
    drawColumns();
  }

  if (columnsNumber === 2) {
    e.target.disabled = true;
  }
});
