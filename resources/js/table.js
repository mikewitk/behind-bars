const insertTableRow = (data) => {
  return `
    <tr>
      <td>${data.name}</td>
      <td>${data.charCount}</td>
    </tr>
  `;
};

const insertTableBody = (data) => {
  return `
  <thead>
    <th>Text</th>
    <th>Char Qty</th>
  </thead>
  <tbody id="info-body">${data
    .map((row) => insertTableRow(row))
    .join("")}</tbody>
  `;
};
