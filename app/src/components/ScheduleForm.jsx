// client/src/components/ScheduleForm.js
import React, { useState } from 'react';
import axios from 'axios';

const ScheduleForm = ({ fetchSchedules }) => {
  const [schedule, setSchedule] = useState({ startTime: '', endTime: '', department: '' });

  const handleChange = (e) => {
    setSchedule({ ...schedule, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/api/schedule', schedule);
      fetchSchedules();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>

      <select name="department" id="department" onChange={handleChange}>
        <option value="Audit">Audit</option>
        <option value="Loan">Loan</option>
        <option value="Customer Enquiry">Customer Enquiry</option>
        <option value="Credit">Credit</option>
      </select>

      <br />

      <input type="datetime-local" name="startTime" value={schedule.startTime} onChange={handleChange} required />
      <input type="datetime-local" name="endTime" value={schedule.endTime} onChange={handleChange} required />
      <button type="submit">Add Schedule</button>
    </form>
  );
};

export default ScheduleForm;
