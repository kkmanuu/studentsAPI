const express = require("express");
const lecturerscontrollers = require("../controllers/lecturerscontrollers");
const router = express.Router();

//  GET all lecturers
router.get("/getAllLecturer", lecturerscontrollers.getAllLecturer);

router.post("/Addlecturer", lecturerscontrollers.AddLecturer);

router.put("/updatelecturer/:id", lecturerscontrollers.updateLecturer);

router.delete("/:id", lecturerscontrollers.deleteLecturer);

router.put("/lecturers/:id", (req, res) => {
  res.send({ type: "Update Request" });
});

router.delete("/lecturers/:id", (req, res) => {
  res.send({ type: "Delete Request" });
});

module.exports = router;
