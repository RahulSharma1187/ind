require('dotenv').config();
const express = require("express");
const app = express();
const path = require('path');
const cors = require('cors');
const router = require('./router/auth-router'); 
const connectDb =  require('./utils/db');

const corsOptions = {
    origin: 'http://localhost:5173',
    methods:"GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true
}

app.use(cors(corsOptions));
app.use(express.json());
app.use("/api/auth", router);

// Serve static files from the React app
app.use(express.static(path.resolve(__dirname, "client", "dist")));

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
});

const PORT = 5000; 

connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running in PORT ${PORT}`);
    })
});