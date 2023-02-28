const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

// routers
const mainRouter = require("./routes/mainRouter")

const port = process.env.PORT || 3002;

app.use(express.json());
app.use(cors());
app.use("/api/v1", mainRouter)
mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    app.listen(port, () => console.log(`listening on port ${port}`));
  })
  .catch((err) => console.error(err));
