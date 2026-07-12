const driverModel = require("../models/driverModel");

const createDriver = async (driverData) => {
    return await driverModel.createDriver(driverData);
};

const getAllDrivers = async () => {
    return await driverModel.getAllDrivers();
};

const getDriverById = async (id) => {
    return await driverModel.getDriverById(id);
};

const updateDriver = async (id, driverData) => {
    return await driverModel.updateDriver(id, driverData);
};

const deleteDriver = async (id) => {
    return await driverModel.deleteDriver(id);
};

module.exports = {
    createDriver,
    getAllDrivers,
    getDriverById,
    updateDriver,
    deleteDriver
};