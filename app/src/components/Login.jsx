// client/src/components/ScheduleForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

const Login = ({ fetchSchedules }) => {
  const [user, setUser] = useState({ name: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate('/')
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={user.name} onChange={handleChange} placeholder="Enter your name" required />
      <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Enter your password" required />

      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
