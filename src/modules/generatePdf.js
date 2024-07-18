import fs from 'fs';

import { LoremIpsum } from 'lorem-ipsum';
import PDFDocument from 'pdfkit';

export default function generatePDFs(
  quantity,
  path = './',
  nameTemplate = 'document_{i}.pdf',
  loremInstance = new LoremIpsum()
) {
  for (let i = 1; i <= quantity; i++) {
    const doc = new PDFDocument();
    const docName = nameTemplate.replace('{i}', i);
    const loremIpsum = loremInstance.generateParagraphs(3);

    doc.text(docName);
    doc.text(loremIpsum);
    doc.pipe(fs.createWriteStream(path + docName));
    doc.end();
  }
}
