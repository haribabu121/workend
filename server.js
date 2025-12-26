const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const contactRoutes = require("./routes/contactRoutes");
const connectRoutes = require("./routes/ConnectRoute");
// const paymentRoute = require("./routes/paymentRoute");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api/contact", contactRoutes);
app.use("/api/connect", ConnectRoute);
// app.use("/api/payment", paymentRoute);

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
// App.use(cors());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));

