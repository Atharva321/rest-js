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

router.get("/:user_id", (req, res) => {
  const user_id = req.params.user_id;
if (dummyData.length <= user_id) return res.json({ message: "User not found" });
  res.json(dummyData[user_id]);
});

module.exports = router;
