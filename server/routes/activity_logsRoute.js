const express = require("express");

const router = express.Router();

const activityLogController = require("../controllers/activity_logsController");

const authenticate = require("../middleware/authMiddleware");
const authorize = require("../middleware/roleMiddleware");

// Create Activity Log
router.post(
    "/",
    authenticate,
    authorize("Fleet Manager"),
    activityLogController.createActivityLog
);

// Get All Logs
router.get(
    "/",
    authenticate,
    activityLogController.getAllActivityLogs
);

// Get Log By ID
router.get(
    "/:id",
    authenticate,
    activityLogController.getActivityLogById
);

// Update Log
router.put(
    "/:id",
    authenticate,
    authorize("Fleet Manager"),
    activityLogController.updateActivityLog
);

// Delete Log
router.delete(
    "/:id",
    authenticate,
    authorize("Fleet Manager"),
    activityLogController.deleteActivityLog
);

module.exports = router;