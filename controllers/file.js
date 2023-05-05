const uploadFileService = require('../services/file');

const uploadFile = (req, res) => {
    try {
        const {file} = req.files;
        console.log(file);
        console.log(file.name);
        res.json({success: 'success'})
    } catch(e) {
        res.status(500).json({error: 'unexpected error happened'})
    }
}

module.exports = uploadFile;