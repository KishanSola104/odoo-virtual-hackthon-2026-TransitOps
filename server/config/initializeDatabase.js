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

        //Database Check and Creation
        await connection.query(
            `CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`
        );

        console.log("Database Checked");

        //Using Database
        await connection.query(
            `USE ${process.env.DB_NAME}`
        );

        console.log("Using Database");

        //Create Table roles
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

        console.log("Roles Table Created");

        // Insert default roles
        await connection.query(`
            INSERT IGNORE INTO roles(name)
            VALUES
            ('Fleet Manager'),
            ('Driver'),
            ('Safety Officer'),
            ('Financial Analyst')
        `);


        // Create Table users
        await connection.query(`
            CREATE TABLE IF NOT EXISTS users(
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL,
                mobile VARCHAR(20) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL,
                role_id INT,
                status ENUM('active','inactive') DEFAULT 'active',
                is_deleted BOOLEAN DEFAULT FALSE,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                FOREIGN KEY(role_id) REFERENCES roles(id)
            )`
        );
        console.log("Users Table Created");

        // Create Table vehicle_types
        await connection.query(
            `CREATE TABLE IF NOT EXISTS vehicle_types(
            id INT AUTO_INCREMENT PRIMARY KEY,
            name ENUM('Light_truck', 'Heavy_truck','Medium_truck','Van','Tanker') NOT NULL UNIQUE
            )`
        );
        console.log("Vehicle Types Table Created");

        // Insert default vehicle types
        await connection.query(`
            INSERT IGNORE INTO vehicle_types(name)
            VALUES
            ('Light_truck'),
            ('Heavy_truck'),
            ('Medium_truck'),
            ('Van'),
            ('Tanker')
        `);


        //Create Table vechicles
        await connection.query(
            `CREATE TABLE IF NOT EXISTS vehicles(
            id INT AUTO_INCREMENT PRIMARY KEY,
            registration_number VARCHAR(50) NOT NULL UNIQUE,
            type_id INT,
            max_load_capacity DECIMAL(10,2) NOT NULL,
            odometer DECIMAL(10,2) NOT NULL,
            acquisition_cost DECIMAL(10,2) NOT NULL,
            insurance_expiry DATE,
            fitness_expiry DATE,
            status ENUM('Available', 'On Trip', 'Maintenance', 'Retired') DEFAULT 'Available',
            region VARCHAR(100),
            is_deleted BOOLEAN DEFAULT FALSE,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            FOREIGN KEY(type_id) REFERENCES vehicle_types(id)
            )`
        );
        console.log("Vehicles Table Created");


        //Create Table drivers
        await connection.query(
            `CREATE TABLE IF NOT EXISTS drivers(
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            license_number VARCHAR(100) NOT NULL UNIQUE,
            license_category VARCHAR(20),
            license_expiry_date DATE,
            contact_number VARCHAR(20),
            address VARCHAR(255),
            joined_date DATE,
            safety_score DECIMAL(5,2),
            status ENUM('Available', 'On Trip', 'Off Duty','Suspended') DEFAULT 'Available',
            is_deleted BOOLEAN DEFAULT FALSE,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            )`
        );
        console.log("Drivers Table Created");

        //create table trips
        await connection.query(
            `CREATE TABLE IF NOT EXISTS trips(
            id INT AUTO_INCREMENT PRIMARY KEY,
            source VARCHAR(100) NOT NULL,
            destination VARCHAR(100) NOT NULL,
            vehicle_id INT,
            driver_id INT,
            cargo_weight DECIMAL(10,2),
            planned_distance DECIMAL(10,2),
            start_odometer DECIMAL(10,2),
            final_odometer DECIMAL(10,2),
            fuel_consumed DECIMAL(10,2),
            revenue DECIMAL(12,2),
            notes TEXT,
            status ENUM('Draft','Dispatched','Completed','Cancelled') DEFAULT 'Draft',
            created_by INT,
            is_deleted BOOLEAN DEFAULT FALSE,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            dispatched_at TIMESTAMP NULL,
            completed_at TIMESTAMP NULL,
            FOREIGN KEY(vehicle_id) REFERENCES vehicles(id),
            FOREIGN KEY(driver_id) REFERENCES drivers(id),
            FOREIGN KEY(created_by) REFERENCES users(id)
            )`
        );
        console.log("Trips Table Created");


        //Create Table maintenance_records
        await connection.query(
            `CREATE TABLE IF NOT EXISTS maintenance_records(
            id INT AUTO_INCREMENT PRIMARY KEY,
            vehicle_id INT,
            type VARCHAR(50) NOT NULL,
            description TEXT,
            cost DECIMAL(12,2),
            vendor_name VARCHAR(100),
            priority ENUM('Low','Medium','High') DEFAULT 'Medium',
            status ENUM('Open','Closed') DEFAULT 'Open',
            opened_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            closed_at TIMESTAMP NULL,
            is_deleted BOOLEAN DEFAULT FALSE,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            FOREIGN KEY(vehicle_id) REFERENCES vehicles(id)
            )`
        );        
        console.log("Maintenance Records Table Created");


        //Create Table fuel_records
        await connection.query(
            `CREATE TABLE IF NOT EXISTS fuel_records(
            id INT AUTO_INCREMENT PRIMARY KEY,
            vehicle_id INT,
            trip_id INT NULL,
            liters DECIMAL(10,2) NOT NULL,
            price_per_liter DECIMAL(10,2) NOT NULL,
            cost DECIMAL(12,2) NOT NULL,
            date DATE,
            FOREIGN KEY(vehicle_id) REFERENCES vehicles(id),
            FOREIGN KEY(trip_id) REFERENCES trips(id)
            )`
        );
        console.log("Fuel Records Table Created");


        //Create Table Expense Types
        await connection.query(
            `CREATE TABLE IF NOT EXISTS expense_types(
            id INT AUTO_INCREMENT PRIMARY KEY,
            name ENUM('Fuel','Maintenance','Total') NOT NULL UNIQUE
            )`
        );
        console.log("Expense Types Table Created");
        

        //Insert default expense types
        await connection.query(`
            INSERT IGNORE INTO expense_types(name)
            VALUES
            ('Fuel'),
            ('Maintenance'),
            ('Total')
        `);


        //Create Table Expenses
        await connection.query(
            `CREATE TABLE IF NOT EXISTS expenses(
            id INT AUTO_INCREMENT PRIMARY KEY,
            vehicle_id INT,
            type_id INT NULL,
            amount DECIMAL(12,2) NOT NULL,
            date DATE,
            notes TEXT,
            FOREIGN KEY(vehicle_id) REFERENCES vehicles(id),
            FOREIGN KEY(type_id) REFERENCES expense_types(id)
            )`
        );
        console.log("Expenses Table Created");


        //Create table Activity Logs
        await connection.query(
            `CREATE TABLE IF NOT EXISTS activity_logs(
            id INT AUTO_INCREMENT PRIMARY KEY,
            user_id INT,
            action VARCHAR(255) NOT NULL,
            entity VARCHAR(100) NOT NULL,
            timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY(user_id) REFERENCES users(id)
            )`
        );
        console.log("Activity Logs Table Created");
        
        await connection.end();

        console.log("Database Initialization Completed");

    } catch (error) {
        console.error("Database Initialization Error:", error);
        throw error;
    }
}

module.exports = initializeDatabase;