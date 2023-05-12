const storage = require('../apiServices/storage');

const uploadItem = (id, file) =>  new Promise((resolve, reject) => {
    const bucket = storage.bucket('poushak');
    const fileName = `seller/${id}/${Date.now()}_`  + file.name.replace(/ /g, "_");
    const blob = bucket.file(fileName);
    const blobStream = blob.createWriteStream({
        resumable: false
    });
    blobStream.on('finish', () => {
        const url = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
        resolve(url);
      })
      .on('error', () => {
        reject(`Unable to upload image, something went wrong`)
      })
      .end(file.data)
});

const deleteItem = async (imageName) => {
  try {
    const bucket = storage.bucket('poushak');
    await bucket.file(imageName).delete();
  } catch(error) {
    throw error;
  }
}

module.exports = {
    uploadItem,
    deleteItem
};