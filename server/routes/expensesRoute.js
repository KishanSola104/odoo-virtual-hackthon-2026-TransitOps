const express = require("express");

const router = express.Router();

const expenseController = require("../controllers/expensesController");

const authenticate = require("../middleware/authMiddleware");
const authorize = require("../middleware/roleMiddleware");

// Create Expense
router.post(
    "/",
    authenticate,
    authorize("Fleet Manager"),
    expenseController.createExpense
);

// Get All Expenses
router.get(
    "/",
    authenticate,
    expenseController.getAllExpenses
);

// Get Expense By ID
router.get(
    "/:id",
    authenticate,
    expenseController.getExpenseById
);

// Update Expense
router.put(
    "/:id",
    authenticate,
    authorize("Fleet Manager"),
    expenseController.updateExpense
);

// Delete Expense
router.delete(
    "/:id",
    authenticate,
    authorize("Fleet Manager"),
    expenseController.deleteExpense
);

module.exports = router;