
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Service.css';

const Service = () => {
  const [service, setService] = useState('');
  const [doctor, setDoctor] = useState('');
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState('');

  const isBookingEnabled = service && doctor && date && time;

  return (
    <div className="service-page">
      <div className="left-panel">
        <div className="logo">Smile Studio</div>
        <button>Home</button>
        <button className="active">Service</button>
        <button>Doctors</button>
        <button>Reviews</button>
        <button>Contact</button>
      </div>
      <div className="right-panel">
        <h1>Book an Appointment</h1>
        <div className="dropdowns">
          <div className="dropdown">
            <label>Service</label>
            <select onChange={(e) => setService(e.target.value)}>
              <option value="">Select a service</option>
              <option value="Cleaning">Cleaning</option>
              <option value="Teeth Whitening">Teeth Whitening</option>
              <option value="Check-up">Check-up</option>
              <option value="Filling">Filling</option>
              <option value="Root-canal">Root Canal</option>
              <option value="Crown">Crown</option>
            </select>
          </div>
          <div className="dropdown">
            <label>Doctor</label>
            <select onChange={(e) => setDoctor(e.target.value)}>
              <option value="">Select a doctor</option>
              <option value="Dr-Aaheed Bin Ashraf">Dr-Aaheed Bin Ashraf</option>
              <option value="Dr-Anika Rahman">Dr-Anika Rahman</option>
              <option value="Dr-Yousha Shahid">Dr-Yousha Shahid</option>
              <option value="Dr-Golam Rabbani Miraz">Dr-Golam Rabbani Miraz</option>
              <option value="Dr-Nusrat Jahan Tuli">Dr-Nusrat Jahan Tuli</option>
              <option value="Dr-Steve Rogers">Dr-Steve Rogers</option>
            </select>
          </div>
        </div>
        <div className="calendar-container">
          <Calendar
            onChange={setDate}
            value={date}
          />
        </div>
        <div className="time-container">
          <h2>{date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</h2>
          <div className="time-slots">
            <button className={time === '9:00 AM' ? 'selected' : ''} onClick={() => setTime('9:00 AM')}>9:00 AM</button>
            <button className={time === '9:30 AM' ? 'selected' : ''} onClick={() => setTime('9:30 AM')}>9:30 AM</button>
            <button className={time === '10:00 AM' ? 'selected' : ''} onClick={() => setTime('10:00 AM')}>10:00 AM</button>
            <button className={time === '10:30 AM' ? 'selected' : ''} onClick={() => setTime('10:30 AM')}>10:30 AM</button>
            <button className={time === '11:00 AM' ? 'selected' : ''} onClick={() => setTime('11:00 AM')}>11:00 AM</button>
            <button className={time === '11:30 AM' ? 'selected' : ''} onClick={() => setTime('11:30 AM')}>11:30 AM</button>
            <button className={time === '1:00 PM' ? 'selected' : ''} onClick={() => setTime('1:00 PM')}>1:00 PM</button>
            <button className={time === '1:30 PM' ? 'selected' : ''} onClick={() => setTime('1:30 PM')}>1:30 PM</button>
            <button className={time === '2:00 PM' ? 'selected' : ''} onClick={() => setTime('2:00 PM')}>2:00 PM</button>
            <button className={time === '2:30 PM' ? 'selected' : ''} onClick={() => setTime('2:30 PM')}>2:30 PM</button>
            <button className={time === '3:00 PM' ? 'selected' : ''} onClick={() => setTime('3:00 PM')}>3:00 PM</button>
            <button className={time === '3:30 PM' ? 'selected' : ''} onClick={() => setTime('3:30 PM')}>3:30 PM</button>
            <button className={time === '4:00 PM' ? 'selected' : ''} onClick={() => setTime('4:00 PM')}>4:00 PM</button>
            <button className={time === '4:30 PM' ? 'selected' : ''} onClick={() => setTime('4:30 PM')}>4:30 PM</button>
            <button className={time === '5:00 PM' ? 'selected' : ''} onClick={() => setTime('5:00 PM')}>5:00 PM</button>
            <button className={time === '5:30 PM' ? 'selected' : ''} onClick={() => setTime('5:30 PM')}>5:30 PM</button>
            <button className={time === '6:00 PM' ? 'selected' : ''} onClick={() => setTime('6:00 PM')}>6:00 PM</button>
            <button className={time === '6:30 PM' ? 'selected' : ''} onClick={() => setTime('6:30 PM')}>6:30 PM</button>
          </div>
        </div>
        <div className="confirm-button-container">
          <button className={`confirm-booking ${isBookingEnabled ? 'enabled' : ''}`} disabled={!isBookingEnabled}>
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
