$(function () {
  let slider = document.getElementById("ageSlider");

  noUiSlider.create(slider, {
    start: [20, 35],
    connect: true,
    format: {
      to: (v) => parseFloat(v).toFixed(0),
      from: (v) => parseFloat(v).toFixed(0),
    },
    tooltips: [true, true],
    step: 1,
    range: {
      min: 18,
      max: 65,
    },
    pips: {
      mode: "values",
      values: [18, 65],
      density: 5,
    },
  });
});
