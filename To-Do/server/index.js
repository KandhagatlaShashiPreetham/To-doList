//Including Mongo connection
require("../Models/Db");

//Including Models
require("../Models/Items");

//Including Controllers
const itemsController = require("../Controllers/ItemsController");

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use("/Items", itemsController);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
