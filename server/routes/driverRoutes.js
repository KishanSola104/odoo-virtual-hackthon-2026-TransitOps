const express = require("express");

const router = express.Router();

const driverController = require("../controllers/driverController");

const authenticate = require("../middleware/authMiddleware");
const authorize = require("../middleware/roleMiddleware");

router.post(
    "/",
    authenticate,
    authorize("Fleet Manager"),
    driverController.createDriver
);

router.get(
    "/",
    authenticate,
    driverController.getAllDrivers
);

router.get(
    "/:id",
    authenticate,
    driverController.getDriverById
);

router.put(
    "/:id",
    authenticate,
    authorize("Fleet Manager"),
    driverController.updateDriver
);

router.delete(
    "/:id",
    authenticate,
    authorize("Fleet Manager"),
    driverController.deleteDriver
);

module.exports = router;