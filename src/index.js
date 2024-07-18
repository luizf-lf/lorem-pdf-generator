import { LoremIpsum } from 'lorem-ipsum';
import generatePDFs from './modules/generatePdf.js';

let quantity = 5;
let path = './generated/';
let nameTemplate = 'document_{i}.pdf'

if (process.argv.length > 2) {
  const argQuantity = Number(process.argv.find((arg) => arg.includes('--quantity'))?.split('=')[1]);
  if (!isNaN(argQuantity)) {
    quantity = argQuantity;
  }

  const argPath = process.argv.find((arg) => arg.includes('--path'))?.split('=')[1];
  if (argPath) {
    path = argPath;
  }

  const argNameTemplate = process.argv.find((arg) => arg.includes('--name-template'))?.split('=')[1];
  if (argNameTemplate) {
    nameTemplate = argNameTemplate;
  }
}

const lorem = new LoremIpsum({
  wordsPerSentence: {
    max: 8,
    min: 4,
  },
  sentencesPerParagraph: {
    max: 4,
    min: 1,
  },
});


generatePDFs(quantity, path, nameTemplate, lorem)