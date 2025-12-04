const  ImageKit = require("imagekit");
const fs = require("fs");

const client = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY, // This is the default and can be omitted
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});

async function uploadFile(file, fileName) {
  try {

    const response = await client.upload({ 
      file: file, 
      fileName: fileName 
    });

    console.log("Upload Success:", response.url);
    return response;
  } catch (error) {
    console.error("Upload Failed:", error);
  }
}

module.exports = {
  uploadFile,
}