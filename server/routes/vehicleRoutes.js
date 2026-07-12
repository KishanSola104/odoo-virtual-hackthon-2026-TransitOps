const express = require("express");

const router =
    express.Router();

const vehicleController =
    require("../controllers/vehicleController");

const authenticate =
    require("../middleware/authMiddleware");

const authorize =
    require("../middleware/roleMiddleware");

router.post(
    "/",
    authenticate,
    authorize("Fleet Manager"),
    vehicleController.createVehicle
);

router.get(
    "/",
    authenticate,
    vehicleController.getAllVehicles
);

module.exports = router;    