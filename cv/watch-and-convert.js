const chokidar = require('chokidar');
const { mdToPdf } = require('md-to-pdf');
const path = require('path');

const inputFile = 'Gonzalo Melo - CV.md';
const outputFile = 'Gonzalo Melo - CV.pdf';

console.log(`Watching for changes in ${inputFile}...`);

chokidar.watch(inputFile).on('change', async (event, path) => {
  console.log(`File ${inputFile} has been changed. Converting to PDF...`);
  try {
    await mdToPdf({ path: inputFile }, { dest: outputFile });
    console.log(`PDF generated successfully: ${outputFile}`);
  } catch (error) {
    console.error('Error generating PDF:', error);
  }
});