const db = require("../config/db");

// Create Driver
const createDriver = async (driver) => {
    const {
        name,
        email,
        license_number,
        license_category,
        license_expiry_date,
        contact_number,
        address,
        joined_date,
        safety_score
    } = driver;

    const [result] = await db.query(
        `INSERT INTO drivers
        (name,email,license_number,license_category,
        license_expiry_date,contact_number,address,
        joined_date,safety_score)
        VALUES(?,?,?,?,?,?,?,?,?)`,
        [
            name,
            email,
            license_number,
            license_category,
            license_expiry_date,
            contact_number,
            address,
            joined_date,
            safety_score
        ]
    );

    return result;
};

const getAllDrivers = async () => {
    const [rows] = await db.query(
        "SELECT * FROM drivers WHERE is_deleted = FALSE"
    );

    return rows;
};

const getDriverById = async (id) => {
    const [rows] = await db.query(
        "SELECT * FROM drivers WHERE id=? AND is_deleted=FALSE",
        [id]
    );

    return rows[0];
};

const updateDriver = async (id, driver) => {

    const {
        name,
        email,
        contact_number,
        address,
        safety_score,
        status
    } = driver;

    const [result] = await db.query(
        `UPDATE drivers
        SET
        name=?,
        email=?,
        contact_number=?,
        address=?,
        safety_score=?,
        status=?
        WHERE id=?`,
        [
            name,
            email,
            contact_number,
            address,
            safety_score,
            status,
            id
        ]
    );

    return result;
};

const deleteDriver = async (id) => {

    const [result] = await db.query(
        "UPDATE drivers SET is_deleted=TRUE WHERE id=?",
        [id]
    );

    return result;
};

module.exports = {
    createDriver,
    getAllDrivers,
    getDriverById,
    updateDriver,
    deleteDriver
};