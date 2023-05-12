const addressService = require('../services/address');

const createAddress = async (req, res) => {
    try {
        const payload = req.body;
        payload.userId = req.headers['x-id'];
        if(!isValidAddress(payload)) {
            res.status(400).json({error: 'invalid request'});
            return
        }

        const address = await addressService.createAddress(payload);
        res.json({ success: address });
    } catch (err) {
        res.status(500).json({ error: 'unexpected error happened' });
    }
};

const updateAddress = async (req, res) => {
    try {
        const payload = req.body;
        payload.userId = req.headers['x-id'];
        payload.id = req.params.id;
        if(!isValidAddress(payload)) {
            res.status(400).json({error: 'invalid request'});
            return
        }

        const address = await addressService.updateAddress(payload);
        res.json({ success: address });
    } catch (err) {
        res.status(500).json({ error: 'unexpected error happened' });
    }
};

const getAddresses = async (req, res) => {
    try {
        const userId = req.headers['x-id'];
        const addresses = await addressService.getAddresses(userId);
        res.json({ success: addresses });
    } catch (err) {
        res.status(500).json({ error: 'unexpected error happened' });
    }
};

const getAddress = async (req, res) => {
    try {
        const userId = req.headers['x-id'];
        const {id} = req.params;
        const address = await addressService.getAddress(userId, id);
        res.json({ success: address });
    } catch (err) {
        res.status(500).json({ error: 'unexpected error happened' });
    }
};

const deleteAddress = async (req, res) => {
    try {
        const userId = req.headers['x-id'];
        const {id} = req.params;
        const address = await addressService.deleteAddress(userId, id);
        res.json({ success: address });
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: 'unexpected error happened' });
    }
};

function isValidAddress(address) {
    if(!address.firstLine) {
        return false
    }

    if(!address.secondLine) {
        return false
    }

    if(!address.latitude) {
        return false
    }

    if(!address.longitude) {
        return false
    }

    if(!address.pincode) {
        return false
    }

    return true;
}

module.exports = {
    createAddress,
    getAddresses,
    getAddress,
    deleteAddress,
    updateAddress
};