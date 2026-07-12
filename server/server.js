require("dotenv").config();

const express = require("express");
const app = express();

const initializeDatabase = require("./config/initializeDatabase");

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome");
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, async () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
    await initializeDatabase();
});