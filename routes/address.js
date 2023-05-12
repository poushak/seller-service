const express = require("express");
const {
    getAddress,
    getAddresses,
    createAddress,
    updateAddress,
    deleteAddress,
} = require("../controllers/address");

const router = express.Router();

router.route("/:id")
    .get(getAddress)
    .put(updateAddress)
    .delete(deleteAddress)

router.route("/")
    .post(createAddress)
    .get(getAddresses);

module.exports = router;
