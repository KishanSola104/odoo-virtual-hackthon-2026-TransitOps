const maintenanceRecordService = require("../services/maintenance_recordService");

const createMaintenanceRecord = async (req, res) => {

    try {

        const result = await maintenanceRecordService.createMaintenanceRecord(req.body);

        res.status(201).json({
            success: true,
            message: "Maintenance Record Created Successfully",
            id: result.insertId
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};

const getAllMaintenanceRecords = async (req, res) => {

    try {

        const records = await maintenanceRecordService.getAllMaintenanceRecords();

        res.status(200).json({
            success: true,
            data: records
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};

const getMaintenanceRecordById = async (req, res) => {

    try {

        const record = await maintenanceRecordService.getMaintenanceRecordById(req.params.id);

        if (!record) {
            return res.status(404).json({
                success: false,
                message: "Maintenance Record Not Found"
            });
        }

        res.status(200).json({
            success: true,
            data: record
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};

const updateMaintenanceRecord = async (req, res) => {

    try {

        await maintenanceRecordService.updateMaintenanceRecord(req.params.id, req.body);

        res.status(200).json({
            success: true,
            message: "Maintenance Record Updated Successfully"
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};

const deleteMaintenanceRecord = async (req, res) => {

    try {

        await maintenanceRecordService.deleteMaintenanceRecord(req.params.id);

        res.status(200).json({
            success: true,
            message: "Maintenance Record Deleted Successfully"
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};

module.exports = {
    createMaintenanceRecord,
    getAllMaintenanceRecords,
    getMaintenanceRecordById,
    updateMaintenanceRecord,
    deleteMaintenanceRecord
};