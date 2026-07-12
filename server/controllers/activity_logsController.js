const activityLogService = require("../services/activity_logsService");

// Create
const createActivityLog = async (req, res) => {

    try {

        const result = await activityLogService.createActivityLog(req.body);

        res.status(201).json({
            success: true,
            message: "Activity Log Created Successfully",
            id: result.insertId
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};

// Get All
const getAllActivityLogs = async (req, res) => {

    try {

        const logs = await activityLogService.getAllActivityLogs();

        res.status(200).json({
            success: true,
            data: logs
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};

// Get By ID
const getActivityLogById = async (req, res) => {

    try {

        const log = await activityLogService.getActivityLogById(req.params.id);

        if (!log) {
            return res.status(404).json({
                success: false,
                message: "Activity Log Not Found"
            });
        }

        res.status(200).json({
            success: true,
            data: log
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};

// Update
const updateActivityLog = async (req, res) => {

    try {

        await activityLogService.updateActivityLog(req.params.id, req.body);

        res.status(200).json({
            success: true,
            message: "Activity Log Updated Successfully"
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};

// Delete
const deleteActivityLog = async (req, res) => {

    try {

        await activityLogService.deleteActivityLog(req.params.id);

        res.status(200).json({
            success: true,
            message: "Activity Log Deleted Successfully"
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};

module.exports = {
    createActivityLog,
    getAllActivityLogs,
    getActivityLogById,
    updateActivityLog,
    deleteActivityLog
};