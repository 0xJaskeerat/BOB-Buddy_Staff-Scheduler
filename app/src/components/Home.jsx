import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ScheduleForm from './ScheduleForm';

const Home = () => {
  const [schedules, setSchedules] = useState([]);

  const fetchSchedules = async () => {
    try {
      const res = await axios.get('/api/schedule');
      console.log('Fetched schedules:', res.data); // Log the response data
      setSchedules(Array.isArray(res.data) ? res.data : []); // Ensure the data is an array
    } catch (err) {
      console.error('Error fetching schedules:', err);
    }
  };

  useEffect(() => {
    fetchSchedules();
  }, []);

  return (
    <div>
      <h1>Staff Scheduling</h1>
      <ScheduleForm fetchSchedules={fetchSchedules} />
      <ul>
        {schedules.length > 0 ? (
          schedules.map((schedule) => (
            <li key={schedule._id}>
              {schedule.staffId}: {new Date(schedule.startTime).toLocaleString()} - {new Date(schedule.endTime).toLocaleString()}
            </li>
          ))
        ) : (
          <li>No schedules available</li>
        )}
      </ul>
    </div>
  );
};

export default Home;
