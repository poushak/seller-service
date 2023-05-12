const fileService = require('../services/file');

const uploadFiles = (req, res) => {
    try {
        if(!req.files) {
            res.status(400).json({error: 'invalid request'})
            return
        }

        const id = req.headers['x-id'];
        const {file} = req.files;
        let files = [];
        if(file.length) {
            files = file;
        } else {
            files = [file];
        }

        const results = [];
        files.map(async item => {
            results.push(fileService.uploadItem(id, item));
        });

        Promise.all(results).then((values) => {
            res.json({success: values})
        }).catch((err) => {
            res.status(500).json({error: 'unexpected error happened'});
        });
    } catch(e) {
        res.status(500).json({error: 'unexpected error happened'});
    }
}

const deleteFile = async (req, res) => {
    try {
        const {imageName} = req.body;
        await fileService.deleteItem(imageName)
        res.json({success: 'image deleted successfully'});
    } catch(err) {
        res.status(500).json({error: 'unexpected error happened'});
    }
}

module.exports = {
    uploadFiles,
    deleteFile
};