const OpenAI = require('openai');
require('dotenv').config();
const fs = require('fs');
const path = require('path');

// const promise = fs.promises.readFile(path.join(__dirname, 'cat.jpeg'));

// const buffer = Promise.resolve(promise)
//   .then(function (buffer) {
//     return buffer; // You can return the buffer if needed for further chaining
//   })
//   .then(function (result) {
//     // Continue with other code if needed
//     // console.log(result);
//     return result;
//   });

// console.log(bufferPromise);

const openai = new OpenAI({ apiKey: process.env.OPEN_AI_KEY });

// This is the Buffer object that contains your image data

// Set a `name` that ends with .png so that the API knows it's a PNG image

async function main() {
  try {
    const image = await openai.images.createVariation({
      image: fs.createReadStream(path.join(__dirname, 'cat.png')),
      //   n: 1,
      //   size: '1024x1024',
    });
    console.log(image);
  } catch (error) {
    console.error('Error:', error);
    // You can handle the error further or log additional information here
  }
}

main();
