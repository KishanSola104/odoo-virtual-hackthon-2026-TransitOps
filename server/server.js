require("dotenv").config();

const express = require("express");
const cors = require("cors");

const initializeDatabase = require("./config/initializeDatabase");

const authRoutes = require("./routes/authRoute");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("TransitOps API Running");
});

app.use("/auth", authRoutes);
const vehicleRoutes =
require("./routes/vehicleRoutes");

app.use(
    "/vehicles",
    vehicleRoutes
);

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