const insertYAxis = ( yLabel, graphContainer ) => {

  let yAxisArea = document.createElement('div')
  yAxisArea.classList.add('y-axis-area')

  let yAxis = document.createElement('div')
  yAxis.classList.add('y-axis')

  let yText = document.createElement('div')
  yText.classList.add('y-text')

  yAxis.innerText = yLabel;

  yAxisArea.appendChild(yAxis);
  yAxisArea.appendChild(yText);

  graphContainer.appendChild(yAxisArea)
  
}

const insertXAxis = ( xLabel, graphContainer ) => {

  let xAxisArea = document.createElement('div')
  xAxisArea.classList.add('x-axis-area');

  let xAxis = document.createElement('div')
  xAxis.classList.add('x-axis')
  
  let xText = document.createElement('div')
  xText.classList.add('x-text')

  xText.innerText = xLabel

  xAxisArea.appendChild(xAxis)
  xAxisArea.appendChild(xText)

  graphContainer.appendChild(xAxisArea)
  
}

const insertBars = ( data, graphContainer ) => {

  const barValues = [];
  data.forEach( value => barValues.push( value.charCount ) )
  const baseNumber = highestValue( barValues );

  data.forEach( element => {

    let divBarArea = document.createElement('div');
    divBarArea.classList.add('bar-area')

    let divBarGraph = document.createElement('div');
    divBarGraph.classList.add('bar-graph')

    let bar = document.createElement('div');
    bar.classList.add('bar')
    const randomColor = Math.floor( Math.random() * 16777215 ).toString( 16 );
    bar.style.backgroundColor = "#" + randomColor;

    let divBarLegend = document.createElement('div')
    divBarLegend.classList.add('bar-legend');

    let spanTooltip = document.createElement('span');
    spanTooltip.classList.add('tooltiptext');
    spanTooltip.innerText = `${element.name} - ${element.charCount} chars`;

    divBarGraph.appendChild(bar)
    divBarArea.appendChild(divBarGraph)
    divBarArea.appendChild(divBarLegend)

    bar.style.height = ` ${(element.charCount / baseNumber) * 100}%`;
    divBarLegend.innerText = element.name;

    graphContainer.appendChild(divBarArea)
    
  } )

}

const addBarGraph = ( yLabel, xLabel, data, graphContainer ) => {

  insertYAxis( yLabel, graphContainer );
  insertBars( data, graphContainer );
  insertXAxis( xLabel, graphContainer );
  
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
  
}