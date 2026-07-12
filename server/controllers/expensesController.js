const expenseService = require("../services/expensesService");

// Create Expense
const createExpense = async (req, res) => {

    try {

        const result = await expenseService.createExpense(req.body);

        res.status(201).json({
            success: true,
            message: "Expense Created Successfully",
            id: result.insertId
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};

// Get All Expenses
const getAllExpenses = async (req, res) => {

    try {

        const expenses = await expenseService.getAllExpenses();

        res.status(200).json({
            success: true,
            data: expenses
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};

// Get Expense By ID
const getExpenseById = async (req, res) => {

    try {

        const expense = await expenseService.getExpenseById(req.params.id);

        if (!expense) {
            return res.status(404).json({
                success: false,
                message: "Expense Not Found"
            });
        }

        res.status(200).json({
            success: true,
            data: expense
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};

// Update Expense
const updateExpense = async (req, res) => {

    try {

        await expenseService.updateExpense(req.params.id, req.body);

        res.status(200).json({
            success: true,
            message: "Expense Updated Successfully"
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};

// Delete Expense
const deleteExpense = async (req, res) => {

    try {

        await expenseService.deleteExpense(req.params.id);

        res.status(200).json({
            success: true,
            message: "Expense Deleted Successfully"
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};

module.exports = {
    createExpense,
    getAllExpenses,
    getExpenseById,
    updateExpense,
    deleteExpense
};