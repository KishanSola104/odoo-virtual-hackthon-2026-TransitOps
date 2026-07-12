const db = require("../config/db");

// Create Fuel Record
const createFuelRecord = async (record) => {

    const {
        vehicle_id,
        trip_id,
        liters,
        price_per_liter,
        cost,
        date
    } = record;

    const [result] = await db.query(
        `INSERT INTO fuel_records
        (
            vehicle_id,
            trip_id,
            liters,
            price_per_liter,
            cost,
            date
        )
        VALUES(?,?,?,?,?,?)`,
        [
            vehicle_id,
            trip_id,
            liters,
            price_per_liter,
            cost,
            date
        ]
    );

    return result;
};

// Get All Fuel Records
const getAllFuelRecords = async () => {

    const [rows] = await db.query(
        "SELECT * FROM fuel_records"
    );

    return rows;
};

// Get Fuel Record By ID
const getFuelRecordById = async (id) => {

    const [rows] = await db.query(
        "SELECT * FROM fuel_records WHERE id=?",
        [id]
    );

    return rows[0];
};

// Update Fuel Record
const updateFuelRecord = async (id, record) => {

    const {
        vehicle_id,
        trip_id,
        liters,
        price_per_liter,
        cost,
        date
    } = record;

    const [result] = await db.query(
        `UPDATE fuel_records
        SET
            vehicle_id=?,
            trip_id=?,
            liters=?,
            price_per_liter=?,
            cost=?,
            date=?
        WHERE id=?`,
        [
            vehicle_id,
            trip_id,
            liters,
            price_per_liter,
            cost,
            date,
            id
        ]
    );

    return result;
};

// Delete Fuel Record
const deleteFuelRecord = async (id) => {

    const [result] = await db.query(
        "DELETE FROM fuel_records WHERE id=?",
        [id]
    );

    return result;
};

module.exports = {
    createFuelRecord,
    getAllFuelRecords,
    getFuelRecordById,
    updateFuelRecord,
    deleteFuelRecord
};