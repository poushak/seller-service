const userService = require('../services/user');

const updateUser = async (req, res) => {
    try {
        const payload = req.body;
        payload.id = req.headers['x-id'];
        if(!isValidUser(payload)) {
            res.status(400).json({error: 'invalid request'})
            return
        }

        const user = await userService.updateUser(payload);
        res.json({ success: user });
    } catch (err) {
        res.status(500).json({ error: 'unexpected error happened' });
    }
};

const isValidUser = (user) => {
    if(!user.id) {
        return false
    }

    if(!user.firstName) {
        return false
    }

    if(!user.lastName) {
        return false
    }

    return true
}

module.exports = {
    updateUser,
}
