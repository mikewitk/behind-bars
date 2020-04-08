// in frameworks we make "Components" which return html
// Components start with Uppercase
// they take one argument, an object of "props" (properties)
// here the YAxis has one prop, yLabel
// it returns a `template string`, you can set an element's innerHTML equal to this
const YAxis = ({ yLabel }) => `
<div class="y-axis-area">
  <div class="y-axis">${yLabel}</div>
  <div class="y-text"></div>
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

const SingleBar = (barHeight, labelName, charCount) => {
  return `
    <div class="bar-area">
    <span class="tooltiptext">Value: ${[barHeight.toFixed(0)]}</span>
      <div class="bar-graph">
        <div class="bar" style="height: ${[barHeight]}%">
        </div>
      </div>
      <div class="bar-legend">
        ${labelName}
      </div>
    </div>
  `;
};

const Bars = ({ data }) => {
  const barValues = [];
  data.forEach((value) => barValues.push(value.charCount));
  const baseNumber = highestValue(barValues);

  let output = data.map((barInfo) => {
    let barHeight = (barInfo.charCount / baseNumber) * 100;
    const { name } = barInfo;
    return SingleBar(barHeight, name);
  });

  return output.join("");
};

const BarGraph = (yLabel, xLabel, data) => {
  return `
      ${YAxis({ yLabel })}
      ${Bars({ data })}
      ${XAxis({ xLabel })}
  `;
};

// finally, we can set the innerHTML of the graphContainer to the BarGraph component here
// graphArea.innerHTML = BarGraph();
