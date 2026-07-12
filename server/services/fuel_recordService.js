const fuelRecordModel = require("../models/fuel_recordModel");

const createFuelRecord = async (data) => {
    return await fuelRecordModel.createFuelRecord(data);
};

const getAllFuelRecords = async () => {
    return await fuelRecordModel.getAllFuelRecords();
};

const getFuelRecordById = async (id) => {
    return await fuelRecordModel.getFuelRecordById(id);
};

const updateFuelRecord = async (id, data) => {
    return await fuelRecordModel.updateFuelRecord(id, data);
};

const deleteFuelRecord = async (id) => {
    return await fuelRecordModel.deleteFuelRecord(id);
};

module.exports = {
    createFuelRecord,
    getAllFuelRecords,
    getFuelRecordById,
    updateFuelRecord,
    deleteFuelRecord
};