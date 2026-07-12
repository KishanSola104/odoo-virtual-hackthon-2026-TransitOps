require("dotenv").config();

const express = require("express");
const cors = require("cors");

const initializeDatabase = require("./config/initializeDatabase");

const authRoutes = require("./routes/authRoute");
const app = express();

app.use(
    cors({
        origin: [
            "http://localhost:3000",
            "http://localhost:5174",
            "http://localhost:5175",
            "http://localhost:5173"
        ],
        credentials: true,
        allowedHeaders: [
            "Content-Type",
            "Authorization"
        ]
    })
);

app.use(express.json());

app.get("/", (req, res) => {
    res.send("TransitOps API Running");
});

app.use("/auth", authRoutes);

// Vehicle Routes
const vehicleRoutes = require("./routes/vehicleRoute");
app.use("/vehicles",vehicleRoutes);


// Driver Routes
const driverRoutes = require("./routes/driverRoutes");
app.use("/drivers", driverRoutes);


// Trip Routes
const tripRoutes = require("./routes/tripRoute");
app.use("/trips", tripRoutes);


// Maintenance Record Routes
const maintenanceRecordRoutes = require("./routes/maintenance_recordRoute");
app.use("/maintenance", maintenanceRecordRoutes);


//Fuel Record Routes
const fuelRecordRoutes = require("./routes/fuel_recordRoute");
app.use("/fuel-records", fuelRecordRoutes);


//Expenses Routes
const expenseRoutes = require("./routes/expensesRoute");
app.use("/expenses", expenseRoutes);


// Activity Logs Routes
const activityLogRoutes = require("./routes/activity_logsRoute");
app.use("/activity-logs", activityLogRoutes);


const PORT = process.env.PORT || 8000;

const startServer = async () => {
    try {

        await initializeDatabase();

        app.listen(PORT, () => {
            console.log(
                `Server running on http://localhost:${PORT}`
            );
        });

    } catch (error) {

        console.error(
            "Server startup failed:",
            error
        );

        process.exit(1);
    }
};

startServer();