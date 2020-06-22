function addSurvivalProbability(data) {
  const newData = data;

  newData.forEach((patients) =>
    patients.forEach((patient, i) => {
      const survival = 1 - patient.death / patient.number;
      patient.prob = i === 0 ? survival : patients[i - 1].prob * survival;
    })
  );

  return newData;
}

function drawSurvivalCurve(data) {
  data = addSurvivalProbability(data);

  // define svg dimensions: width, height, margin
  const w = 500;
  const h = 300;
  const m = 40;

  // set max to larger of 0 and maximum patient time
  const maxTime = data.flatMap((ps) => ps.flatMap((p) => parseFloat(p.time)));
  const max = Math.max(0, ...maxTime);

  // Remove previous svg
  d3.select(".km_svg").remove();

  // Draw the svg container
  const svg = d3
    .select("#survival")
    .append("svg")
    .attr("width", w + 2 * m)
    .attr("height", h + 4 * m)
    .attr("class", "km_svg");

  // Define scales
  const xScale = d3
    .scaleLinear()
    .domain([-max / 50, max])
    .range([0, w - m * 2]);

  const yScale = d3
    .scaleLinear()
    .domain([1.05, -0.05])
    .range([0, h - m]);

  // Define accessor function
  const lineFunction = d3
    .line()
    .x((d) => xScale(d.time) + 2 * m)
    .y((d) => yScale(d.prob))
    .curve(d3.curveStepAfter);

  // Define colors
  const colors = d3.scaleOrdinal(d3.schemeCategory10);

  // Plot data
  data.forEach((patients, i) => {
    // Draw line
    svg
      .append("path")
      .attr("d", lineFunction(patients))
      .attr("transform", "translate(" + 0 + "," + m + ")")
      .attr("stroke", colors(i))
      .attr("stroke-width", 2)
      .attr("fill", "none");

    // Draw dots
    svg
      .selectAll(".dot" + i)
      .data(patients)
      .enter()
      .append("circle")
      .attr("class", "dot") // Assign a class for styling
      .attr("cx", (d) => xScale(d.time) + 2 * m)
      .attr("cy", (d) => yScale(d.prob))
      .attr("r", 1.5)
      .attr("stroke", colors(i))
      .attr("stroke-width", 2)

      .attr("fill", "none")
      .attr("transform", "translate(" + 0 + "," + m + ")");

    // Draw legend
    svg
      .append("circle")
      .attr("cx", 400)
      .attr("cy", 50 + i * 20)
      .attr("r", 6)
      .style("fill", colors(i));

    svg
      .append("text")
      .attr("x", 420)
      .attr("y", 55 + i * 20)
      .text(patients[0].type)
      .style("font-size", "15px")
      .attr("alignment-baseline", "middle");
  });

  // Define axes
  const xAxis = d3.axisBottom(xScale).tickSize(2).tickPadding(6);
  const yAxis = d3.axisLeft(yScale).tickSize(2).tickPadding(6);

  // Draw axes
  svg
    .append("g")
    .attr("class", "xaxis")
    .attr("transform", `translate(${2 * m}, ${h})`)
    .call(xAxis);

  svg
    .append("g")
    .attr("class", "yaxis")
    .attr("transform", `translate(${2 * m}, ${m})`)
    .call(yAxis);

  // Draw axis labels
  svg
    .append("text")
    .attr("transform", `translate(${w / 2}, ${h + m})`)
    .style("text-anchor", "middle")
    .text("Time (in months)");

  svg
    .append("text")
    .attr("transform", `translate(${m}, ${h / 2})rotate(-90)`)
    .style("text-anchor", "middle")
    .text("Survival Rate");
}
