const router = require("express").Router();
const db = require("../models/indexModel");
const path = require("path");

router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });

  router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });
  

  router.get("/api/workouts", (req, res) => {
    db.Workout.find({

    }).then(result => {
        res.json(result);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  