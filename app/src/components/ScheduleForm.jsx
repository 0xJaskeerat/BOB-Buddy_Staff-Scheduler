// client/src/components/ScheduleForm.js
import React, { useState } from 'react';
import axios from 'axios';

const ScheduleForm = ({ fetchSchedules }) => {
  const [schedule, setSchedule] = useState({ staffId: '', startTime: '', endTime: '' });

  const handleChange = (e) => {
    setSchedule({ ...schedule, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/schedule', schedule);
      fetchSchedules();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="staffId" value={schedule.staffId} onChange={handleChange} placeholder="Staff ID" required />
      <input type="datetime-local" name="startTime" value={schedule.startTime} onChange={handleChange} required />
      <input type="datetime-local" name="endTime" value={schedule.endTime} onChange={handleChange} required />
      <button type="submit">Add Schedule</button>
    </form>
  );
};

export default ScheduleForm;
