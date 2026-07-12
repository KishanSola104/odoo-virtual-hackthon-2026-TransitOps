const db = require("../config/db");

// Create Trip
const createTrip = async (trip) => {

    const {
        source,
        destination,
        vehicle_id,
        driver_id,
        cargo_weight,
        planned_distance,
        start_odometer,
        final_odometer,
        fuel_consumed,
        revenue,
        notes,
        created_by
    } = trip;

    const [result] = await db.query(
        `INSERT INTO trips(
            source,
            destination,
            vehicle_id,
            driver_id,
            cargo_weight,
            planned_distance,
            start_odometer,
            final_odometer,
            fuel_consumed,
            revenue,
            notes,
            created_by
        )
        VALUES(?,?,?,?,?,?,?,?,?,?,?,?)`,
        [
            source,
            destination,
            vehicle_id,
            driver_id,
            cargo_weight,
            planned_distance,
            start_odometer,
            final_odometer,
            fuel_consumed,
            revenue,
            notes,
            created_by
        ]
    );

    return result;
};

// Get All Trips
const getAllTrips = async () => {

    const [rows] = await db.query(
        "SELECT * FROM trips WHERE is_deleted = FALSE"
    );

    return rows;
};

// Get Trip By ID
const getTripById = async (id) => {

    const [rows] = await db.query(
        "SELECT * FROM trips WHERE id=? AND is_deleted=FALSE",
        [id]
    );

    return rows[0];
};

// Update Trip
const updateTrip = async (id, trip) => {

    const {
        source,
        destination,
        vehicle_id,
        driver_id,
        cargo_weight,
        planned_distance,
        start_odometer,
        final_odometer,
        fuel_consumed,
        revenue,
        notes,
        status
    } = trip;

    const [result] = await db.query(
        `UPDATE trips
        SET
            source=?,
            destination=?,
            vehicle_id=?,
            driver_id=?,
            cargo_weight=?,
            planned_distance=?,
            start_odometer=?,
            final_odometer=?,
            fuel_consumed=?,
            revenue=?,
            notes=?,
            status=?
        WHERE id=?`,
        [
            source,
            destination,
            vehicle_id,
            driver_id,
            cargo_weight,
            planned_distance,
            start_odometer,
            final_odometer,
            fuel_consumed,
            revenue,
            notes,
            status,
            id
        ]
    );

    return result;
};

// Soft Delete
const deleteTrip = async (id) => {

    const [result] = await db.query(
        "UPDATE trips SET is_deleted=TRUE WHERE id=?",
        [id]
    );

    return result;
};

const searchTrips = async ({
    driver_id,
    vehicle_id,
    status
}) => {

    let query = `
        SELECT *
        FROM trips
        WHERE is_deleted = FALSE
    `;

    const values = [];

    if (driver_id) {
        query += `
            AND driver_id = ?
        `;
        values.push(driver_id);
    }

    if (vehicle_id) {
        query += `
            AND vehicle_id = ?
        `;
        values.push(vehicle_id);
    }

    if (status) {
        query += `
            AND status = ?
        `;
        values.push(status);
    }

    query += `
        ORDER BY created_at DESC
    `;

    const [rows] =
        await db.query(query, values);

    return rows;
};

module.exports = {
    createTrip,
    getAllTrips,
    getTripById,
    updateTrip,
    deleteTrip,
    searchTrips
};