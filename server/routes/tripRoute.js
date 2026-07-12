const express = require("express");

const router = express.Router();

const tripController = require("../controllers/tripController");

const authenticate = require("../middleware/authMiddleware");
const authorize = require("../middleware/roleMiddleware");

// Create Trip
router.post(
    "/",
    authenticate,
    authorize("Fleet Manager"),
    tripController.createTrip
);

// Get All Trips
router.get(
    "/",
    authenticate,
    tripController.getAllTrips
);

// Get Trip By ID
router.get(
    "/:id",
    authenticate,
    tripController.getTripById
);

// Update Trip
router.put(
    "/:id",
    authenticate,
    authorize("Fleet Manager"),
    tripController.updateTrip
);

// Delete Trip
router.delete(
    "/:id",
    authenticate,
    authorize("Fleet Manager"),
    tripController.deleteTrip
);

router.get(
    "/search",
    authMiddleware,
    tripController.searchTrips
);

module.exports = router;