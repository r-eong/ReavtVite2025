import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './11.css';

function MyCalendar() {
  const [value, setValue] = useState(new Date());

  return (
    <div>
      <h1>달력 출력</h1>
      <Calendar onChange={setValue} value={value} />
    </div>
  );
}

export default MyCalendar;
