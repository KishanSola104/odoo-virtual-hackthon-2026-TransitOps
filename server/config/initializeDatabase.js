const mysql = require("mysql2/promise");

async function initializeDatabase() {
    try {
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
        });

        console.log("Connected to MySQL");

        await connection.query(
            `CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`
        );

        console.log("Database Checked");

        await connection.query(
            `USE ${process.env.DB_NAME}`
        );

        console.log("Using Database");

        await connection.query(`
            CREATE TABLE IF NOT EXISTS roles (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name ENUM(
                    'Fleet Manager',
                    'Driver',
                    'Safety Officer',
                    'Financial Analyst'
                ) NOT NULL UNIQUE
            )
        `);

        console.log("oles Table Created");

        await connection.query(`
            INSERT IGNORE INTO roles(name)
            VALUES
            ('Fleet Manager'),
            ('Driver'),
            ('Safety Officer'),
            ('Financial Analyst')
        `);

        await connection.query(`
            CREATE TABLE IF NOT EXISTS users(
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL,
                role_id INT,
                status ENUM('active','inactive') DEFAULT 'active',
                is_deleted BOOLEAN DEFAULT FALSE,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                    ON UPDATE CURRENT_TIMESTAMP,
                FOREIGN KEY(role_id) REFERENCES roles(id)
            )
        `);

        console.log("Users Table Created");

        await connection.end();

        console.log("Database Initialization Completed");

    } catch (error) {
        console.error("Database Initialization Error:", error);
        throw error;
    }
}

module.exports = initializeDatabase;