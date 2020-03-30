// in frameworks we make "Components" which return html
// Components start with Uppercase
// they take one argument, an object of "props" (properties)
// here the YAxis has one prop, yLabel
// it returns a `template string`, you can set an element's innerHTML equal to this
const YAxis = ({ yLabel }) => `
<div class="y-axis-area">
  <div class="y-axis"></div>
  <div class="y-text">${yLabel}</div>
</div>
`;

// we prefer for functions to be "pure" --> they don't modify the outside world,
// they only ever take an input and give an output
// your code is more predictable and easier to debug this way
const XAxis = ({ xLabel }) => `
<div class="x-axis-area">
  <div class="x-axis"></div>
  <div class="x-text">${xLabel}</div>
</div>`;

// see if you can turn this function into a Bars component (it should not receive the graphContainer)
const Bars = (data, graphContainer) => {
  const barValues = [];
  data.forEach(value => barValues.push(value.charCount));
  const baseNumber = highestValue(barValues);

  data.forEach(element => {
    let divBarArea = document.createElement("div");
    divBarArea.classList.add("bar-area");

    let divBarGraph = document.createElement("div");
    divBarGraph.classList.add("bar-graph");

    let bar = document.createElement("div");
    bar.classList.add("bar");
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    bar.style.backgroundColor = "#" + randomColor;

    let divBarLegend = document.createElement("div");
    divBarLegend.classList.add("bar-legend");

    let spanTooltip = document.createElement("span");
    spanTooltip.classList.add("tooltiptext");
    spanTooltip.innerText = `${element.name} - ${element.charCount} chars`;

    divBarGraph.appendChild(bar);
    divBarArea.appendChild(divBarGraph);
    divBarArea.appendChild(divBarLegend);

    bar.style.height = ` ${(element.charCount / baseNumber) * 100}%`;
    divBarLegend.innerText = element.name;

    graphContainer.appendChild(divBarArea);
  });
};

// again, this BarGraph should only return a bunch of html
const BarGraph = (yLabel, xLabel, data, graphContainer) => {
  // insertYAxis(yLabel, graphContainer);
  // insertBars(data, graphContainer);
  // insertXAxis(xLabel, graphContainer);

  // something like this
  return `
  ${YAxis({ yLabel })}
  ${Bars({ data })}
  ${XAxis({ xLabel })}
  `;
  // !!!!!!!!!!!TOOLTIP WIP!!!!!!!!!!!!!!!!
  // const allBars = document.getElementsByClassName('bar')

  // const tooltip = (element) => {

  //   const barArea = document.getElementById('graph')
  //   console.log(element.target)
  //   let spanTooltip = document.createElement('span');
  //   spanTooltip.classList.add('tooltiptext');
  //   // spanTooltip.innerText = `${element.name} - ${element.charCount} chars`;

  //   barArea.appendChild(spanTooltip)

  // }
  // for ( let i = 0; i < 10; i++ ) {
  //   console.log("for")
  //   allBars[i].addEventListener('mouseover', e => tooltip(e))
  // }
};

// finally, we can set the innerHTML of the graphContainer to the BarGraph component here
graphContainer.innerHTML = BarGraph();