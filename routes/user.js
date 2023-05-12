const express = require('express');
const { updateUser } = require('../controllers/user');

const router = express.Router();

router.route('/:userId')
    .put(updateUser)

module.exports = router;