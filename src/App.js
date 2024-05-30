import React, { useState } from 'react';
import CalendarComponent from './CalendarComponent';
import TweetsComponent from './TweetsComponent';

const App = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [username, setUsername] = useState('twitter');

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setUsername('telegram', "WhatsApp");
  };

  return (
    <div>
      <h1>تقویم توییتر</h1>
      <CalendarComponent onDateChange={handleDateChange} value={selectedDate} />
      <TweetsComponent username={username} />
    </div>
  );
};

export default App;
