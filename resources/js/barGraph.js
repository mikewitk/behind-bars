const YAxis = ({ yLabel }) => `
<div class="y-axis-area">
  <div class="y-axis">${yLabel}</div>
  <div class="y-text"></div>
</div>
`;

const XAxis = ({ xLabel }) => `
<div class="x-axis-area">
  <div class="x-axis"></div>
  <div class="x-text">${xLabel}</div>
</div>`;

const SingleBar = (barHeight, labelName) => {
  return `
    <div class="bar-area">
    <span class="tooltiptext">Value: ${[barHeight]}</span>
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
    let barHeight = ((barInfo.charCount / baseNumber) * 100).toFixed(0);
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
