# PDF Generator

## About

A (very) simple batch pdf generation tool, for usage in testing scenarios.

## Usage Instructions

1. Install the dependencies with `yarn` or `npm install`
2. Execute the PDF generator script with `yarn start` or `npm run start`.

### Options

The script can receive up to 3 different optional arguments:

1. **--quantity**: If you want to specify how many PDFs should be generated. It defaults to `5`.
2. **--name-template**: If you want a specific name for the generated documents. It defaults to `document_{i}.pdf`, where the `i` refers to the current generated document index.
3. **--path**: The target folder path where the documents shall be generated. It defaults to the `./generated/` folder in this project. Make sure the target folder exists.
