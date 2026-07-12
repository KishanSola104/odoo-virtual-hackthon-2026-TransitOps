const db = require("../config/db");

const createVehicle = async (
    registrationNumber,
    typeId,
    maxLoadCapacity,
    odometer,
    acquisitionCost,
    insuranceExpiry,
    fitnessExpiry,
    region
) => {

    const [result] = await db.query(
        `
        INSERT INTO vehicles
        (
            registration_number,
            type_id,
            max_load_capacity,
            odometer,
            acquisition_cost,
            insurance_expiry,
            fitness_expiry,
            region
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        `,
        [
            registrationNumber,
            typeId,
            maxLoadCapacity,
            odometer,
            acquisitionCost,
            insuranceExpiry,
            fitnessExpiry,
            region
        ]
    );

    return result.insertId;
};

const findVehicleByRegistration = async (
    registrationNumber
) => {

    const [rows] = await db.query(
        `
        SELECT *
        FROM vehicles
        WHERE registration_number = ?
        AND is_deleted = FALSE
        `,
        [registrationNumber]
    );

    return rows[0];
};

const getAllVehicles = async () => {

    const [rows] = await db.query(
        `
        SELECT
            v.*,
            vt.name AS vehicle_type
        FROM vehicles v
        JOIN vehicle_types vt
            ON vt.id = v.type_id
        WHERE v.is_deleted = FALSE
        `
    );

    return rows;
};

module.exports = {
    createVehicle,
    findVehicleByRegistration,
    getAllVehicles
};