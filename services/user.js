const User = require("../models/user");

const updateUser = async (payload) => {
    const user = new User(payload);
    return await user.updateUser();
}

module.exports = {
    updateUser,
}