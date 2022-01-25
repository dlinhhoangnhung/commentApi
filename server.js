const express = require("express");
const cors = require('cors')
const mongoose = require("mongoose");
const { URI, PORT } = require("./config")
const routes = require( "./routes");

const app = express();
app.use(cors())

app.use(express.json());

mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
},
  err => {
    if (err) throw err;
    console.log('Connected to MongoDB!!!')
  }
)

app.use("/", routes);

// app.get("/", (req, res) => {
//   res.status(200).send("OK");
// });

app.listen(PORT, () => {
  console.log("Server is running at port 5001");
});