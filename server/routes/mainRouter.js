const router = require("express").Router();
const Task = require("../models/Task");

router.get("/", async (req, res) => {
  const allTasks = await Task.find();
  res.status(200).json({
    success: true,
    allTasks,
  });
});

router.post("/", async (req, res) => {
  const { title, complated } = req.body;
  const task = Task({ title, complated });

  try {
    await task.save().then(() => {
      res.status(201).json({ success: true, message: "saved!" });
    });
  } catch (error) {
    console.log(error);
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  await Task.findOneAndUpdate(
    { _id: id },
    {
      title: title,
    }
  );

  res.status(201).json({
    success: true,
    message: "Updated!",
  });
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await Task.findOneAndDelete({ _id: id });
  res.status(201).json({
    success: true,
    message: "Deleted!",
  });
});

module.exports = router;
