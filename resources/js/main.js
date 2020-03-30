const table = document.getElementById("table");
const tableBody = document.querySelector("tbody");
const graphArea = document.getElementById("graph");

const names = [];

const updateDOM = graph => {
  graphArea.innerHTML = graph;
};

const getData = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => {
      users.map(user => names.push(user.name));
      const analyzedNames = countCharacters(names);
      insertTableRow(tableBody, analyzedNames);
      const graphs = BarGraph("Characters", "Names", analyzedNames);
      updateDOM(graphs);
    });
};

getData();
