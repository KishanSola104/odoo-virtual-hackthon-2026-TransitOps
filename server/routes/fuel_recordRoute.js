const express = require("express");

const router = express.Router();

const fuelRecordController = require("../controllers/fuel_recordController");

const authenticate = require("../middleware/authMiddleware");
const authorize = require("../middleware/roleMiddleware");

// Create Fuel Record
router.post(
    "/",
    authenticate,
    authorize("Fleet Manager"),
    fuelRecordController.createFuelRecord
);

// Get All Fuel Records
router.get(
    "/",
    authenticate,
    fuelRecordController.getAllFuelRecords
);

// Get Fuel Record By ID
router.get(
    "/:id",
    authenticate,
    fuelRecordController.getFuelRecordById
);

// Update Fuel Record
router.put(
    "/:id",
    authenticate,
    authorize("Fleet Manager"),
    fuelRecordController.updateFuelRecord
);

// Delete Fuel Record
router.delete(
    "/:id",
    authenticate,
    authorize("Fleet Manager"),
    fuelRecordController.deleteFuelRecord
);

module.exports = router;