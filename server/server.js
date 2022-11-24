
const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(require("./routes/profiles"));
// get the driver connection
const dbo = require("./db/conn");

//sends the token on authorisation
app.use('/auth', (req, res) => {
  res.send({
    token: 'tokentoken'
  });
});
//api running
app.listen(8080, () => console.log('API is running on http://localhost:8080/login'));
 
app.listen(port, () => {
  // performs database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
 
  });
  //verify connection
  console.log(`Server is running on port: ${port}`);
});
