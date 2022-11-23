
const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(require("./routes/profiles"));
// get driver connection
const dbo = require("./db/conn");

app.use('/auth', (req, res) => {
  res.send({
    token: 'test123'
  });
});
app.listen(8080, () => console.log('API is running on http://localhost:8080/login'));
 
app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
 
  });
  console.log(`Server is running on port: ${port}`);
});
