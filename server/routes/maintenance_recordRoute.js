const express = require("express");

const router = express.Router();

const maintenanceRecordController = require("../controllers/maintenance_recordController");

const authenticate = require("../middleware/authMiddleware");
const authorize = require("../middleware/roleMiddleware");

// Create
router.post(
    "/",
    authenticate,
    authorize("Fleet Manager"),
    maintenanceRecordController.createMaintenanceRecord
);

// Get All
router.get(
    "/",
    authenticate,
    maintenanceRecordController.getAllMaintenanceRecords
);

// Get By ID
router.get(
    "/:id",
    authenticate,
    maintenanceRecordController.getMaintenanceRecordById
);

// Update
router.put(
    "/:id",
    authenticate,
    authorize("Fleet Manager"),
    maintenanceRecordController.updateMaintenanceRecord
);

// Delete
router.delete(
    "/:id",
    authenticate,
    authorize("Fleet Manager"),
    maintenanceRecordController.deleteMaintenanceRecord
);

module.exports = router;