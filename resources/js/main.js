const table = document.getElementById("table");
const tableBody = document.querySelector("tbody");
const graphArea = document.getElementById("graph");

const names = [];
const emails = [];
let analyzedNames = [];
let analyzedEmails = [];

// Fetch data from API
const getData = async () => {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  let data = await response.json();
  return data;
};

// Store selected data into array and count characters
const processData = async () => {
  let info = await getData();
  info.forEach((user) => {
    names.push(user.name);
    emails.push(user.email);
  });
  analyzedNames = countCharacters(names);
  analyzedEmails = countCharacters(emails);
};

processData();

const printGraphAndTable = (info) => {
  let graph;
  let fullTable;

  if (info === "names") {
    fullTable = insertTableBody(analyzedNames);
    graph = BarGraph("Chars", "Names", analyzedNames);
  } else if (info === "emails") {
    fullTable = insertTableBody(analyzedEmails);
    graph = BarGraph("Chars", "Emails", analyzedEmails);
  }

  table.innerHTML = fullTable;
  graphArea.innerHTML = graph;
};
