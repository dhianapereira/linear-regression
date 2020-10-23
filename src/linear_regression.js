var x = [];
var y = [];
var prediction = [];

function removeUndefined(array) {
  for (let i = 0; i <= array.length; ++i) {
    if (typeof array[i] === "undefined") {
      return array.splice(i, array.length);
    }
  }
}

function readSpreadsheet() {
  const xlsx = require("xlsx");
  const wb = xlsx.readFile("covid_AL_spreadsheet.xlsx", { cellDates: true });
  const ws = wb.Sheets["Página1"];

  const data = xlsx.utils.sheet_to_json(ws);

  x = data.map((record) => {
    return record.accumulatedCases;
  });

  y = data.map((record) => {
    return record.accumulatedDeaths;
  });

  prediction = data.map((record) => {
    return record.validation;
  });

  removeUndefined(x);
  removeUndefined(y);
  removeUndefined(prediction);

  console.log(x);
  console.log(y);
  console.log(prediction);
}

function trainingModel() {
  const tf = require("@tensorflow/tfjs");

  const model = tf.sequential();
  model.add(tf.layers.dense({ units: 1, inputShape: [1] }));

  model.compile({
    loss: "meanSquaredError",
    optimizer: "adam",
  });

  const xs = tf.tensor2d(x, [x.length, 1]);
  const ys = tf.tensor2d(y, [y.length, 1]);

  model.fit(xs, ys, { epochs: 50000 }).then(() => {
    model.predict(tf.tensor2d(prediction, [prediction.length, 1])).print();
  });
}

readSpreadsheet();
trainingModel();