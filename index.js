const express = require("express");
const AppDataSource = require("./config/db");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(express.json());

AppDataSource.initialize()
  .then(() => console.log("Database connected"))
  .catch((err) => console.log("DB error:", err));

app.use("/", userRoutes);
sfsdfs
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));