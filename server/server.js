const express = require("express");
const cors = require("cors");

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

const phonepeRoute = require("./routes/PhonePeRoute.js");
app.use("/api/phonepe", phonepeRoute);

app.listen(port, () => {
  console.log(`Server listening at port ${port}`);
});
