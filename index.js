const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
  path: 'out.csv',
  header: [
    { id: 'number', title: 'Number' },
    { id: 'attributes', title: 'Attributes' }
  ]
});

const csvData = [];

function generateCSVData() {
  for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
      // i is a multiple of 3. We then need to check if it is even or odd. ie 6? 9?
      if (i % 2 === 0) {
        csvData.push({ number: i, attributes: 'even, multiple-of-3' });
      } else {
        csvData.push({ number: i, attributes: 'odd, multiple-of-3' });
      }
    } else {
      // i is not a multiple of 3. We now need to check if it is even or odd. id 4 ? 7?

      if (i % 2 === 0) {
        csvData.push({ number: i, attributes: 'even' });
      } else {
        csvData.push({ number: i, attributes: 'odd' });
      }
    }
  }

  return csvData;
}

csvWriter
  .writeRecords(generateCSVData())
  .then(() => console.log('The CSV file was written successfully'));
