const insertTableRow = ( tBody, data ) => {
  
  data.forEach( ( element, index ) => {

    let row = tBody.insertRow(index)
    let name = row.insertCell(0);
    let count = row.insertCell(1);

    name.innerText = element.name;
    count.innerText = element.charCount;

  } )

}
