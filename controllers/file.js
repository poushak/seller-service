const uploadFileService = require('../services/file');

const uploadFiles = (req, res) => {
    try {
        if(!req.files) {
            res.status(400).json({error: 'invalid request'})
            return
        }

        const {id} = req.params;
        const {file} = req.files;
        let files = [];
        if(file.length) {
            files = file;
        } else {
            files = [file];
        }

        const results = [];
        files.map(async item => {
            results.push(uploadFileService.uploadItem(id, item));
        });

        Promise.all(results).then((values) => {
            res.json({success: values})
        }).catch((err) => {
            res.status(500).json({error: 'unexpected error happened'});
        });
    } catch(e) {
        console.log(e)
        res.status(500).json({error: 'unexpected error happened'})
    }
}

module.exports = {
    uploadFiles,
};