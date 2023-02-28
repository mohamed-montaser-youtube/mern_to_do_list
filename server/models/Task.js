const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

const TaskSchema = Schema({
  title: String,
  complated: {
    type: Boolean,
    default: false,
  },
});

module.exports = model("Task", TaskSchema);
