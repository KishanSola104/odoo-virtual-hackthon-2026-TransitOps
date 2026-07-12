const db = require("../config/db");

// Create Expense
const createExpense = async (expense) => {

    const {
        vehicle_id,
        type_id,
        amount,
        date,
        notes
    } = expense;

    const [result] = await db.query(
        `INSERT INTO expenses
        (
            vehicle_id,
            type_id,
            amount,
            date,
            notes
        )
        VALUES (?,?,?,?,?)`,
        [
            vehicle_id,
            type_id,
            amount,
            date,
            notes
        ]
    );

    return result;
};

// Get All Expenses
const getAllExpenses = async () => {

    const [rows] = await db.query(
        `SELECT
            e.*,
            v.registration_number,
            et.name AS expense_type
        FROM expenses e
        LEFT JOIN vehicles v
            ON e.vehicle_id=v.id
        LEFT JOIN expense_types et
            ON e.type_id=et.id`
    );

    return rows;
};

// Get Expense By ID
const getExpenseById = async (id) => {

    const [rows] = await db.query(
        "SELECT * FROM expenses WHERE id=?",
        [id]
    );

    return rows[0];
};

// Update Expense
const updateExpense = async (id, expense) => {

    const {
        vehicle_id,
        type_id,
        amount,
        date,
        notes
    } = expense;

    const [result] = await db.query(
        `UPDATE expenses
        SET
            vehicle_id=?,
            type_id=?,
            amount=?,
            date=?,
            notes=?
        WHERE id=?`,
        [
            vehicle_id,
            type_id,
            amount,
            date,
            notes,
            id
        ]
    );

    return result;
};

// Delete Expense
const deleteExpense = async (id) => {

    const [result] = await db.query(
        "DELETE FROM expenses WHERE id=?",
        [id]
    );

    return result;
};

module.exports = {
    createExpense,
    getAllExpenses,
    getExpenseById,
    updateExpense,
    deleteExpense
};