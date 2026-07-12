require("dotenv").config();

const express = require("express");
const cors = require("cors");

const initializeDatabase = require("./config/initializeDatabase");

const authRoutes = require("./routes/authRoute");
const vehicleRoutes =
require("./routes/vehicleRoutes");

const app = express();

app.use(
    cors({
        origin: [
            "http://localhost:3000",
            "http://localhost:5175"
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