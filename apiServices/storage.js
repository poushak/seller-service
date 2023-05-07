const Cloud = require('@google-cloud/storage');
const path = require('path');
const serviceKey = path.join(process.env.SERVICE_ACCOUNT_FILE || '');

const { Storage } = Cloud
const storage = new Storage({
  keyFilename: serviceKey,
  projectId: 'poushak',
})

module.exports = storage