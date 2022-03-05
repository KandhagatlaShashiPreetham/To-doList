const express = require("express");

const Items = require("../Models/Items");

var router = express.Router();

router.post("/addItem", async (req, res) => {
  const item = new Items({
    Name: req.body.Name,
    RDate: req.body.RDate,
    ListName: req.body.ListName,
  });
  try {
    const a1 = await item.save();
    res.json(a1);
  } catch (error) {
    res.send("Error");
  }
});

router.get("/getLists", async (req, res) => {
  try {
    //const items = await Items.find();
    const items = [{ ListName: "Birthday" }, { ListName: "Holiday" }];
    res.json(items);
  } catch (err) {
    res.send("Error " + err);
  }
});

router.get("/getItems/:list", async (req, res) => {
  const list = req.params.list;
  const pipeline = {
    ListName: list,
  };
  try {
    const items = await Items.find(pipeline);
    res.json(items);
  } catch (err) {
    res.send("Error " + err);
  }
});

router.patch("/upd/:id", (req, res) => {
  var updateObject = req.body; // {last_name : "smith", age: 44}
  var id = req.params.id;
  //{name:req.body.name}
  Items.findByIdAndUpdate(id, updateObject, (err, docs) => {
    if (!err) res.send("Obj Updated");
    //redirect('/employee')
    else res.send("Error " + err);
  });
});

router.delete("/del/:id", (req, res) => {
  Items.findByIdAndRemove(req.params.id, (err, doc) => {
    if (!err) {
      res.send("Obj deleted"); //redirect('/employee')
    } else {
      console.log("Error " + err);
    }
  });
  // Employee.save();

  //Employee.findByIdAndRemove(req.params.id);

  //res.json(a1)
});

module.exports = router;
