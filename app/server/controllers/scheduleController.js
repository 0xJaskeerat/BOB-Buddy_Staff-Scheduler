// server/controllers/scheduleController.js
const Schedule = require('../models/Schedule');

exports.createSchedule = async (req, res) => {
  try {
    console.log('Received data:', req.body); // Log the received data
    const newSchedule = new Schedule({
      staffId: req.body.staffId,
      startTime: req.body.startTime,
      endTime: req.body.endTime,
    });
    const schedule = await newSchedule.save();
    res.json(schedule);
  } catch (err) {
    console.error('Error creating schedule:', err); // Log error
    res.status(500).json({ error: err.message });
  }
};

exports.getSchedules = async (req, res) => {
  try {
    const schedules = await Schedule.find().select('staffId startTime endTime'); // Select specific fields
    res.json(schedules);
  } catch (err) {
    console.error('Error fetching schedules:', err); // Log error
    res.status(500).json({ error: err.message });
  }
};

exports.updateSchedule = async (req, res) => {
  try {
    const updatedSchedule = await Schedule.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedSchedule);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteSchedule = async (req, res) => {
  try {
    await Schedule.findByIdAndDelete(req.params.id);
    res.json({ message: 'Schedule deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
