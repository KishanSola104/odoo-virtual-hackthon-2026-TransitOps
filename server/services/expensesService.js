const expenseModel = require("../models/expensesModel");

const createExpense = async (data) => {
    return await expenseModel.createExpense(data);
};

const getAllExpenses = async () => {
    return await expenseModel.getAllExpenses();
};

const getExpenseById = async (id) => {
    return await expenseModel.getExpenseById(id);
};

const updateExpense = async (id, data) => {
    return await expenseModel.updateExpense(id, data);
};

const deleteExpense = async (id) => {
    return await expenseModel.deleteExpense(id);
};

module.exports = {
    createExpense,
    getAllExpenses,
    getExpenseById,
    updateExpense,
    deleteExpense
};