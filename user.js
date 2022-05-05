const express = require("express");
const router = express.Router();
const dummyData = [{
    "name": "User1",
    "age": 9,
    "description": "User1"
  }
];
router.get("/", (req, res) => {
  res.json(dummyData);
});
