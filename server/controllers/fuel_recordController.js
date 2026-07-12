const fuelRecordService = require("../services/fuel_recordService");

const createFuelRecord = async (req, res) => {

    try {

        const result = await fuelRecordService.createFuelRecord(req.body);

        res.status(201).json({
            success: true,
            message: "Fuel Record Created Successfully",
            id: result.insertId
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};

const getAllFuelRecords = async (req, res) => {

    try {

        const records = await fuelRecordService.getAllFuelRecords();

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

const getFuelRecordById = async (req, res) => {

    try {

        const record = await fuelRecordService.getFuelRecordById(req.params.id);

        if (!record) {
            return res.status(404).json({
                success: false,
                message: "Fuel Record Not Found"
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

const updateFuelRecord = async (req, res) => {

    try {

        await fuelRecordService.updateFuelRecord(req.params.id, req.body);

        res.status(200).json({
            success: true,
            message: "Fuel Record Updated Successfully"
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};

const deleteFuelRecord = async (req, res) => {

    try {

        await fuelRecordService.deleteFuelRecord(req.params.id);

        res.status(200).json({
            success: true,
            message: "Fuel Record Deleted Successfully"
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};

module.exports = {
    createFuelRecord,
    getAllFuelRecords,
    getFuelRecordById,
    updateFuelRecord,
    deleteFuelRecord
};