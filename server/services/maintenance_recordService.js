const maintenanceRecordModel = require("../models/maintenance_recordModel");

const createMaintenanceRecord = async (data) => {
    return await maintenanceRecordModel.createMaintenanceRecord(data);
};

const getAllMaintenanceRecords = async () => {
    return await maintenanceRecordModel.getAllMaintenanceRecords();
};

const getMaintenanceRecordById = async (id) => {
    return await maintenanceRecordModel.getMaintenanceRecordById(id);
};

const updateMaintenanceRecord = async (id, data) => {
    return await maintenanceRecordModel.updateMaintenanceRecord(id, data);
};

const deleteMaintenanceRecord = async (id) => {
    return await maintenanceRecordModel.deleteMaintenanceRecord(id);
};

module.exports = {
    createMaintenanceRecord,
    getAllMaintenanceRecords,
    getMaintenanceRecordById,
    updateMaintenanceRecord,
    deleteMaintenanceRecord
};