const driverService = require("../services/driverService");

const createDriver = async (req, res) => {

    try {

        const result = await driverService.createDriver(req.body);

        res.status(201).json({
            success: true,
            message: "Driver Created Successfully",
            id: result.insertId
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};

const getAllDrivers = async (req, res) => {

    try {

        const drivers = await driverService.getAllDrivers();

        res.status(200).json({
            success: true,
            data: drivers
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};

const getDriverById = async (req, res) => {

    try {

        const driver = await driverService.getDriverById(req.params.id);

        if (!driver) {

            return res.status(404).json({
                success: false,
                message: "Driver Not Found"
            });

        }

        res.status(200).json({
            success: true,
            data: driver
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};

const updateDriver = async (req, res) => {

    try {

        await driverService.updateDriver(req.params.id, req.body);

        res.status(200).json({
            success: true,
            message: "Driver Updated Successfully"
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};

const deleteDriver = async (req, res) => {

    try {

        await driverService.deleteDriver(req.params.id);

        res.status(200).json({
            success: true,
            message: "Driver Deleted Successfully"
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};

module.exports = {
    createDriver,
    getAllDrivers,
    getDriverById,
    updateDriver,
    deleteDriver
};