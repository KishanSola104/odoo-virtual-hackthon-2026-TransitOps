const db = require("../config/db");

// Create Activity Log
const createActivityLog = async (log) => {

    const {
        user_id,
        action,
        entity
    } = log;

    const [result] = await db.query(
        `INSERT INTO activity_logs
        (
            user_id,
            action,
            entity
        )
        VALUES (?,?,?)`,
        [
            user_id,
            action,
            entity
        ]
    );

    return result;
};

// Get All Activity Logs
const getAllActivityLogs = async () => {

    const [rows] = await db.query(
        `SELECT
            al.*,
            u.name AS user_name,
            u.email
        FROM activity_logs al
        LEFT JOIN users u
        ON al.user_id = u.id
        ORDER BY al.timestamp DESC`
    );

    return rows;
};

// Get Activity Log By ID
const getActivityLogById = async (id) => {

    const [rows] = await db.query(
        "SELECT * FROM activity_logs WHERE id=?",
        [id]
    );

    return rows[0];
};

// Update Activity Log
const updateActivityLog = async (id, log) => {

    const {
        user_id,
        action,
        entity
    } = log;

    const [result] = await db.query(
        `UPDATE activity_logs
        SET
            user_id=?,
            action=?,
            entity=?
        WHERE id=?`,
        [
            user_id,
            action,
            entity,
            id
        ]
    );

    return result;
};

// Delete Activity Log
const deleteActivityLog = async (id) => {

    const [result] = await db.query(
        "DELETE FROM activity_logs WHERE id=?",
        [id]
    );

    return result;
};

module.exports = {
    createActivityLog,
    getAllActivityLogs,
    getActivityLogById,
    updateActivityLog,
    deleteActivityLog
};