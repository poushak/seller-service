const Address = require('../models/address');

const createAddress = async (payload) => {
  const address = new Address(payload);
  return await address.createAddress();
};

const getAddresses = async (userId) => {
  const address = new Address({userId});
  return await address.getAddresses();
};

const getAddress = async (userId, id) => {
  const address = new Address({userId, id});
  return await address.getAddress();
};

const updateAddress = async (payload) => {
  const address = new Address(payload);
  return await address.updateAddress();
}

const deleteAddress = async (userId, id) => {
  const address = new Address({userId, id});
  return await address.deleteAddress();
};

module.exports = {
  createAddress,
  getAddresses,
  getAddress,
  deleteAddress,
  updateAddress
};