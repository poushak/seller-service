const tokenValidator = (req, res, next) => {
    const {userId} = req.params;
    const username = req.headers['x-id'];

    console.log(req.params)
    if(userId) {
        if (username !== userId) {
            res.status(403).json({error: 'forbidden'});
            return
        }
    }

    next();
}

module.exports = tokenValidator;