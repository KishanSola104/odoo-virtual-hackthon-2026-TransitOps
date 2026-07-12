const driverModel = require("../models/driverModel");

const VALID_STATUS = [
    "Available",
    "On Trip",
    "off Duty",
    "Suspended"
];

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

const searchDrivers = async (
    filters
) => {

    if (
        filters.status &&
        !VALID_STATUS.includes(
            filters.status
        )
    ) {
        throw {
            statusCode: 400,
            message: "Invalid status"
        };
    }

    return await driverModel.searchDrivers(
        filters
    );
};

module.exports = {
    createDriver,
    getAllDrivers,
    getDriverById,
    updateDriver,
    deleteDriver,
    searchDrivers    
};