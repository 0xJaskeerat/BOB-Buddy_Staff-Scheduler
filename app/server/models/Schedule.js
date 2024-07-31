// server/models/Schedule.js
const mongoose = require('mongoose');

const ScheduleSchema = new mongoose.Schema({
  staffId: { type: String, required: true },
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Schedule', ScheduleSchema);
