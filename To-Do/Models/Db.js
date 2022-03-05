const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://shashi290702:shashipreetham@cluster1sp.bljnv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  { useNewUrlParser: true },
  (err) => {
    if (!err) console.log("MongoDB Connection succeeded");
    else console.log("MongoDB Connection failed" + err);
  }
);
