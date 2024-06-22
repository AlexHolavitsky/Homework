
// ДЗ 11.1. Таблиця піфагора
// Вивести таблицю Піфагора (10×10), проте цього разу таблиця повинна бути створена динамічно
function createMultiplicationTable(rows, cols) {
  const table = document.createElement('table');
  for (let i = 1; i <= rows; i++) {
      const row = document.createElement('tr');
      for (let j = 1; j <= cols; j++) {
          const cell = document.createElement(i === 1 || j === 1 ? 'th' : 'td');
          cell.textContent = i * j;
          row.appendChild(cell);
      }
      table.appendChild(row);
  }
  return table;
}

const tableContainer = document.getElementById('table-container');
const multiplicationTable = createMultiplicationTable(10, 10);
tableContainer.appendChild(multiplicationTable);
