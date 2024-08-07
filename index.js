require("dotenv").config();
const express = require("express");
const rootRouter = require("./src/routes/index")
const cors = require("cors")
const app = express();
const PORT = 5000;

const connectDB = require("./src/config/dbConfig");
const ErrorController = require("./src/middleware/ErrorController");
connectDB();

app.use(cors())
app.use(express.json());
app.use('/uploads',express.static('uploads'))
rootRouter(app)
app.use(ErrorController)

app.get("/", (req, res) => {
  return res.status(200).json({ Message: "Welcome to the FoodZap Api" });
});

// '192.168.89.231'
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});

