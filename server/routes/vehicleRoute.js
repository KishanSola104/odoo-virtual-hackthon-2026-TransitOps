const express = require("express");

const router = express.Router();

const vehicleController =
    require("../controllers/vehicleController");

const authMiddleware =
    require("../middleware/authMiddleware");

const roleMiddleware =
    require("../middleware/roleMiddleware");

router.post(
    "/",
    authMiddleware,
    roleMiddleware(
        "Fleet Manager",
        "Safety Officer"
    ),
    vehicleController.createVehicle
);

router.get(
    "/",
    authMiddleware,
    vehicleController.getAllVehicles
);

router.get(
    "/search",
    authMiddleware,
    vehicleController.searchVehicles
);

router.get(
    "/:id",
    authMiddleware,
    vehicleController.getVehicleById
);

router.put(
    "/:id",
    authMiddleware,
    roleMiddleware(
        "Fleet Manager"
    ),
    vehicleController.updateVehicle
);

router.delete(
    "/:id",
    authMiddleware,
    roleMiddleware(
        "Fleet Manager"
    ),
    vehicleController.deleteVehicle
);

module.exports = router;