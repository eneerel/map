const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const colors = require("colors");
const app = express();
const connectDB = require("./config/mongodb");
const restaurantRoutes = require("./Routes/restaurant");

const port = 8000;
const MONGO_URI = process.env.MONGO_URI;

app.use(cors());
app.use(express.json());

app.use("/restaurant", restaurantRoutes);

connectDB(MONGO_URI);
app.listen(port, () => {
  console.log(`Server aslaa port ${port}`.rainbow);
});
