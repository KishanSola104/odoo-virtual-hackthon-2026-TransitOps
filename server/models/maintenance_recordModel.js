const db = require("../config/db");

// Create Maintenance Record
const createMaintenanceRecord = async (record) => {

    const {
        vehicle_id,
        type,
        description,
        cost,
        vendor_name,
        priority
    } = record;

    const [result] = await db.query(
        `INSERT INTO maintenance_records
        (
            vehicle_id,
            type,
            description,
            cost,
            vendor_name,
            priority
        )
        VALUES(?,?,?,?,?,?)`,
        [
            vehicle_id,
            type,
            description,
            cost,
            vendor_name,
            priority
        ]
    );

    return result;
};

// Get All Records
const getAllMaintenanceRecords = async () => {

    const [rows] = await db.query(
        "SELECT * FROM maintenance_records WHERE is_deleted = FALSE"
    );

    return rows;
};

// Get Record By ID
const getMaintenanceRecordById = async (id) => {

    const [rows] = await db.query(
        "SELECT * FROM maintenance_records WHERE id=? AND is_deleted=FALSE",
        [id]
    );

    return rows[0];
};

// Update Record
const updateMaintenanceRecord = async (id, record) => {

    const {
        vehicle_id,
        type,
        description,
        cost,
        vendor_name,
        priority,
        status,
        closed_at
    } = record;

    const [result] = await db.query(
        `UPDATE maintenance_records
        SET
            vehicle_id=?,
            type=?,
            description=?,
            cost=?,
            vendor_name=?,
            priority=?,
            status=?,
            closed_at=?
        WHERE id=?`,
        [
            vehicle_id,
            type,
            description,
            cost,
            vendor_name,
            priority,
            status,
            closed_at,
            id
        ]
    );

    return result;
};

// Soft Delete
const deleteMaintenanceRecord = async (id) => {

    const [result] = await db.query(
        "UPDATE maintenance_records SET is_deleted=TRUE WHERE id=?",
        [id]
    );

    return result;
};

module.exports = {
    createMaintenanceRecord,
    getAllMaintenanceRecords,
    getMaintenanceRecordById,
    updateMaintenanceRecord,
    deleteMaintenanceRecord
};