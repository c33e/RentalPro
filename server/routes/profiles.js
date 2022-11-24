const express = require("express");

// profileRoutes acts as a middleware to control all of the routes with /profile
const profileRoutes = express.Router();

// connect into the database in db folder
const dbo = require("../db/conn");

// convert the ids from string to ObjectId for the _id
const ObjectId = require("mongodb").ObjectId;

//gets a list of all of the profiles from the database
profileRoutes.route("/profile").get(function (req, res) {
  let db_connect = dbo.getDb("userprofiles");
  db_connect
    .collection("profiles")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

//gets a single profile from the profile id
profileRoutes.route("/profile/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect
      .collection("profiles")
      .findOne(myquery, function (err, result) {
        if (err) throw err;
        res.json(result);
      });
});

//this creates a new profile
profileRoutes.route("/profile/add").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
    name: req.body.name,
    description: req.body.description,
    experience: req.body.experience,
  };
  db_connect.collection("profiles").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

//updates a profile by the id
profileRoutes.route("/update/:id").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  let newvalues = {
    $set: {
      name: req.body.name,
      description: req.body.description,
      experience: req.body.experience,
    },
  };
  db_connect
    .collection("profiles")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("Update success");
      response.json(res);
    });
});

//deletes a profile by the id
profileRoutes.route("/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect.collection("profiles").deleteOne(myquery, function (err, obj) 
{
    if (err) throw err;
    console.log("Delete success");
    response.json(obj);
  });
});

module.exports = profileRoutes;
