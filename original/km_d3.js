function drew_KM(kk) {
  var data = kk;
  /* Globals */
  var w = 500,
    h = 300,
    m = 40,
    max = (min = 0);
  /* Data Given */
  var data_xxx = [
    [
      { t: 0, d: 0, n: 59 },
      { t: 5.7, d: 1, n: 59 },
      { t: 6.533, d: 1, n: 58 },
      { t: 7.2, d: 1, n: 57 },
      { t: 8.7, d: 1, n: 56 },
      { t: 10.267, d: 0, n: 55 },
      { t: 10.533, d: 0, n: 54 },
      { t: 11.9, d: 1, n: 53 },
      { t: 12.167, d: 1, n: 52 },
      { t: 12.467, d: 0, n: 51 },
      { t: 12.9, d: 1, n: 50 },
      { t: 13.1, d: 1, n: 49 },
      { t: 15.1, d: 1, n: 48 },
      { t: 15.167, d: 1, n: 47 },
      { t: 16.2, d: 1, n: 46 },
      { t: 17.167, d: 1, n: 45 },
      { t: 19.8, d: 1, n: 44 },
      { t: 20.433, d: 1, n: 43 },
      { t: 21, d: 1, n: 42 },
      { t: 22.3, d: 1, n: 41 },
      { t: 26.167, d: 1, n: 40 },
      { t: 26.6, d: 1, n: 39 },
      { t: 28.1, d: 1, n: 38 },
      { t: 29.8, d: 1, n: 37 },
      { t: 30.6, d: 1, n: 36 },
      { t: 31.033, d: 1, n: 35 },
      { t: 32.4, d: 1, n: 34 },
      { t: 32.433, d: 1, n: 33 },
      { t: 32.633, d: 1, n: 32 },
      { t: 36.367, d: 1, n: 31 },
      { t: 38.967, d: 1, n: 30 },
      { t: 41.467, d: 1, n: 29 },
      { t: 42.833, d: 1, n: 28 },
      { t: 44.667, d: 1, n: 27 },
      { t: 44.833, d: 1, n: 26 },
      { t: 47.667, d: 0, n: 25 },
      { t: 50.333, d: 1, n: 24 },
      { t: 50.633, d: 1, n: 23 },
      { t: 55.533, d: 1, n: 22 },
      { t: 57.7, d: 1, n: 21 },
      { t: 61.833, d: 1, n: 20 },
      { t: 63.367, d: 1, n: 19 },
      { t: 66.667, d: 1, n: 18 },
      { t: 78.633, d: 1, n: 17 },
      { t: 85.467, d: 1, n: 16 },
      { t: 85.967, d: 1, n: 15 },
      { t: 98.267, d: 1, n: 14 },
      { t: 105.867, d: 0, n: 13 },
      { t: 109.4, d: 1, n: 12 },
      { t: 116.2, d: 0, n: 11 },
      { t: 116.267, d: 1, n: 10 },
      { t: 136.133, d: 0, n: 9 },
      { t: 151.667, d: 1, n: 8 },
      { t: 152.1, d: 0, n: 7 },
      { t: 167.367, d: 1, n: 6 },
      { t: 192.5, d: 1, n: 5 },
      { t: 193.8, d: 1, n: 4 },
      { t: 195.6, d: 0, n: 3 },
      { t: 241.967, d: 1, n: 2 },
      { t: 279.1, d: 0, n: 1 },
    ],
    [
      { t: 0, d: 0, n: 11 },
      { t: 12.7, d: 1, n: 11 },
      { t: 15.4667, d: 1, n: 10 },
      { t: 18.8667, d: 1, n: 9 },
      { t: 33.5333, d: 0, n: 8 },
      { t: 75.4333, d: 0, n: 6 },
      { t: 115.2333, d: 0, n: 5 },
      { t: 128.4333, d: 0, n: 4 },
      { t: 178.8333, d: 0, n: 3 },
      { t: 219.6333, d: 1, n: 2 },
      { t: 266.9667, d: 0, n: 1 },
    ],
    [
      { t: 0, d: 0, n: 5 },
      { t: 15.2333, d: 0, n: 5 },
      { t: 48.4333, d: 1, n: 4 },
      { t: 78.8333, d: 0, n: 3 },
      { t: 119.6333, d: 1, n: 2 },
      { t: 246.9667, d: 0, n: 1 },
    ],
  ];

  var data_new = [
    [
      { time: 0, death: 0, type: "Male", title: "test", number: 7 },
      { time: 3, death: 1, type: "Male", title: "test", number: 7 },
      { time: 5, death: 1, type: "Male", title: "test", number: 6 },
      { time: 13, death: 0, type: "Male", title: "test", number: 5 },
      { time: 24, death: 1, type: "Male", title: "test", number: 4 },
      { time: 55, death: 0, type: "Male", title: "test", number: 3 },
      { time: 72, death: 0, type: "Male", title: "test", number: 2 },
      { time: 134, death: 1, type: "Male", title: "test", number: 1 },
    ],
    [
      { time: 0, death: 0, type: "Female", title: "test", number: 7 },
      { time: 15, death: 0, type: "Female", title: "test", number: 7 },
      { time: 23, death: 1, type: "Female", title: "test", number: 6 },
      { time: 44, death: 0, type: "Female", title: "test", number: 5 },
      { time: 75, death: 1, type: "Female", title: "test", number: 4 },
      { time: 92, death: 1, type: "Female", title: "test", number: 3 },
      { time: 163, death: 1, type: "Female", title: "test", number: 2 },
      { time: 357, death: 1, type: "Female", title: "test", number: 1 },
    ],
    [
      { time: 0, death: 0, type: "other", title: "test", number: 7 },
      { time: 0, death: 0, type: "other", title: "test", number: 3 },
      { time: 22, death: 1, type: "other", title: "test", number: 3 },
      { time: 53, death: 1, type: "other", title: "test", number: 2 },
      { time: 327, death: 1, type: "other", title: "test", number: 1 },
    ],
  ];
  // data = data_new

  //data1 ford=0
  /* Computed Data progression, survival, prob, censored */
  for (var a = 0; a < data.length; a++) {
    console.log(a);
    for (var b = 0; b < data[a].length; b++) {
      var patient = data[a][b];
      var brad = b > 0 ? data[a][b - 1].number - patient.death : patient.number;
      patient.progression = patient.death / patient.number;
      patient.survival = 1 - patient.progression;
      patient.prob =
        b == 0 ? patient.survival : data[a][b - 1].prob * patient.survival;
      //parseFloat() change  char to int.
      max = parseFloat(max) < parseFloat(patient.time) ? patient.time : max; //calculate max survial time
      patient.censored = patient.number < brad ? true : false;
      //console.log(patient);
    }
  }
  console.log(data);
  /* Begin d3.js */
  //Scalar function   s
  var x = d3.scale
    .linear()
    .domain([-max / 50, max])
    .range([0, w - m * 2]);
  var y = d3.scale
    .linear()
    .domain([1.05, -0.05])
    .range([0, h - m]);
  //Define axses
  var xAxis = d3.svg
    .axis()
    .scale(x)
    .tickSize(2)
    .tickPadding(6)
    .orient("bottom");
  var yAxis = d3.svg.axis().scale(y).tickSize(2).tickPadding(6).orient("left");
  //This is the accessor function
  var lineFunction = d3.svg
    .line()
    .x(function (d) {
      return x(d.time) + 2 * m;
    })
    .y(function (d) {
      return y(d.prob);
    })
    .interpolate("step-after");
  //Draw the svg container
  d3.select(".km_svg").remove();
  var kaplan = d3
    .select("#survival")
    .append("svg")
    .attr("width", w + 2 * m)
    .attr("height", h + 4 * m)
    .attr("class", "km_svg");

  var color = d3.scale.category10();

  for (var i = 0; i < data.length; i++) {
    kaplan
      .append("path")
      .attr("d", lineFunction(data[i]))
      .attr("transform", "translate(" + 0 + "," + m + ")")
      .attr("stroke", color(i))
      .attr("stroke-width", 2)
      .attr("fill", "none");

    //Draw Dot
    kaplan
      .selectAll(".dot" + i)
      .data(data[i])
      .enter()
      .append("circle") // Uses the enter().append() method
      .attr("class", "dot") // Assign a class for styling
      .attr("cx", function (d, i) {
        return x(d.time) + 2 * m;
      })
      .attr("cy", function (d) {
        return y(d.prob);
      })
      .attr("r", 1.5)
      .attr("stroke", color(i))
      .attr("stroke-width", 2)

      .attr("fill", "none")
      .attr("transform", "translate(" + 0 + "," + m + ")");

    kaplan
      .append("circle")
      .attr("cx", 400)
      .attr("cy", 50 + i * 20)
      .attr("r", 6)
      .style("fill", color(i));

    kaplan
      .append("text")
      .attr("x", 420)
      .attr("y", 55 + i * 20)
      .text(data[i][0].type)
      .style("font-size", "15px")
      .attr("alignment-baseline", "middle");
  }

  //Draw the x-axis
  var theXAxis = kaplan
    .append("g")
    .attr("class", "xaxis")
    .attr("transform", "translate(" + 2 * m + "," + h + ")")
    .call(xAxis)
    .append("text")
    .attr("text-anchor", "middle")
    .attr("transform", "translate(" + w / 2 + "," + m + ")")
    .text("Time (in months)");
  //Draw the y-axis
  var theYAxis = kaplan
    .append("g")
    .attr("class", "yaxis")
    .attr("transform", "translate(" + 2 * m + ", " + m + ")")
    .call(yAxis)
    .append("text")
    .attr("text-anchor", "middle")
    .attr("transform", "translate(" + -m + "," + h / 2 + ")rotate(-90)")
    .text("Survival Rate");

  // select the svg area

  // Handmade legend
  // kaplan.append("circle").attr("cx",400).attr("cy",70).attr("r", 6).style("fill", "#ff7f0e")
  // kaplan.append("circle").attr("cx",400).attr("cy",100).attr("r", 6).style("fill", "#1f77b4")
  //kaplan.append("text").attr("x", 420).attr("y", 75).text("Female").style("font-size", "15px").attr("alignment-baseline","middle")
  // kaplan.append("text").attr("x", 420).attr("y", 105).text("Male").style("font-size", "15px").attr("alignment-baseline","middle")
}
