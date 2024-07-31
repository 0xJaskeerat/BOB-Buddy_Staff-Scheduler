// server/routes/schedule.js
const express = require('express');
const router = express.Router();
const scheduleController = require('../controllers/scheduleController');

router.get('/', (req, res) => {
    console.log('GET request received');
    scheduleController.getSchedules(req, res);
  });
  
router.post('/', (req, res) => {
    scheduleController.createSchedule(req, res)
});

router.put('/:id', scheduleController.updateSchedule);
router.delete('/:id', scheduleController.deleteSchedule);

module.exports = router;
