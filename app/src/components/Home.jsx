import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ScheduleForm from './ScheduleForm';

const Home = () => {
  const [schedules, setSchedules] = useState([]);

  const fetchSchedules = async () => {
    try {
      const res = await axios.get('http://localhost:8000/api/schedule');
      console.log('Fetched schedules:', res.data); // Log the response data
      setSchedules(Array.isArray(res.data) ? res.data : []); // Ensure the data is an array
    } catch (err) {
      console.error('Error fetching schedules:', err);
    }
  };

  useEffect(() => {
    fetchSchedules();
  }, []);

  function formatDate(inputDate) {
    const date = new Date(inputDate);

    // Extract date parts
    const day = date.getDate();
    const month = date.toLocaleString('en-US', { month: 'long' });
    let hours = date.getHours();
    const minutes = date.getMinutes();

    // Format hours and minutes
    const period = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12 || 12; // Convert to 12-hour format
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    // Construct formatted date string
    return `${day} ${month} ${hours}:${formattedMinutes} ${period}`;
  }

  return (
    <div>
      <h1>Staff Scheduling</h1>
      <ScheduleForm fetchSchedules={fetchSchedules} />

      {
        schedules?.length > 0 &&
        <>
          <h2>Your scheduled appointments</h2>
          <ul>
            {schedules.length > 0 ? (
              schedules?.map((schedule) => (
                <li key={schedule._id} style={{ margin: '6px 0' }}>
                  <p><b>Mr. {schedule.bankerName}</b> from <b>{schedule.department}</b> Department </p>
                  <p>is available to connect from <b>{formatDate(new Date(schedule.startTime).toLocaleString())}</b> to <b>{formatDate(new Date(schedule.endTime).toLocaleString())}</b></p>
                </li>
              ))
            ) : (
              <li>No schedules available</li>
            )}
          </ul>
        </>
      }
    </div>
  );
};

export default Home;
