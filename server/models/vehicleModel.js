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

const searchVehicles = async ({
    registration_number,
    type_id,
    status
}) => {

    let query = `
        SELECT
            v.*,
            vt.name AS vehicle_type
        FROM vehicles v
        JOIN vehicle_types vt
            ON vt.id = v.type_id
        WHERE v.is_deleted = FALSE
    `;

    const values = [];

    if (registration_number) {
        query += `
            AND v.registration_number LIKE ?
        `;
        values.push(
            `%${registration_number}%`
        );
    }

    if (type_id) {
        query += `
            AND v.type_id = ?
        `;
        values.push(type_id);
    }

    if (status) {
        query += `
            AND v.status = ?
        `;
        values.push(status);
    }

    const [rows] =
        await db.query(query, values);

    return rows;
};

const getVehicleById = async (id) => {

    const [rows] = await db.query(
        `
        SELECT
            v.*,
            vt.name AS vehicle_type
        FROM vehicles v
        JOIN vehicle_types vt
            ON vt.id = v.type_id
        WHERE v.id = ?
        AND v.is_deleted = FALSE
        `,
        [id]
    );

    return rows[0];
};

const updateVehicle = async (
    id,
    vehicle
) => {

    const {
        type_id,
        max_load_capacity,
        odometer,
        acquisition_cost,
        insurance_expiry,
        fitness_expiry,
        status,
        region
    } = vehicle;

    const [result] = await db.query(
        `
        UPDATE vehicles
        SET
            type_id = ?,
            max_load_capacity = ?,
            odometer = ?,
            acquisition_cost = ?,
            insurance_expiry = ?,
            fitness_expiry = ?,
            status = ?,
            region = ?
        WHERE id = ?
        `,
        [
            type_id,
            max_load_capacity,
            odometer,
            acquisition_cost,
            insurance_expiry,
            fitness_expiry,
            status,
            region,
            id
        ]
    );

    return result;
};

const deleteVehicle = async (id) => {

    const [result] = await db.query(
        `
        UPDATE vehicles
        SET is_deleted = TRUE
        WHERE id = ?
        `,
        [id]
    );

    return result;
};

module.exports = {
    createVehicle,
    findVehicleByRegistration,
    getAllVehicles,
    getVehicleById,
    updateVehicle,
    deleteVehicle,
    searchVehicles
};