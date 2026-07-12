const db = require("../config/db");

const findByEmail = async (email) => {

    const [rows] = await db.query(
        `
        SELECT
            u.id,
            u.name,
            u.email,
            u.password,
            u.status,
            r.name AS role,
            r.id AS role_id
        FROM users u
        JOIN roles r
            ON u.role_id = r.id
        WHERE u.email = ?
        `,
        [email]
    );

    return rows[0];
};

const createUser = async (
    name,
    email,
    hashedPassword,
    roleId
) => {

    const [result] = await db.query(
        `
        INSERT INTO users
        (
            name,
            email,
            password,
            role_id
        )
        VALUES (?, ?, ?, ?)
        `,
        [
            name,
            email,
            hashedPassword,
            roleId
        ]
    );

    return result.insertId;
};

const findRoleById = async (roleId) => {

    const [rows] = await db.query(
        `
        SELECT *
        FROM roles
        WHERE id = ?
        `,
        [roleId]
    );

    return rows[0];
};

module.exports = {
    findByEmail,
    createUser,
    findRoleById,
};