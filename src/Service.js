
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Service.css';

const HomeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-home" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
     <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
     <path d="M5 12l-2 0l9 -9l9 9l-2 0"></path>
     <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>
     <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"></path>
  </svg>
);

const ServiceIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-settings" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
     <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
     <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"></path>
     <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
  </svg>
);

const DoctorIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-stethoscope" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
     <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
     <path d="M6 4h-1a2 2 0 0 0 -2 2v3.5h0a5.5 5.5 0 0 0 11 0v-3.5a2 2 0 0 0 -2 -2h-1"></path>
     <path d="M8 15a6 6 0 1 0 12 0v-3"></path>
     <path d="M11 3v2"></path>
     <path d="M6 3v2"></path>
     <path d="M20 10m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
  </svg>
);

const ReviewsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-message-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
     <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
     <path d="M8 9h8"></path>
     <path d="M8 13h6"></path>
     <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z"></path>
  </svg>
);

const ContactIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-address-book" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
     <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
     <path d="M20 6v12a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2z"></path>
     <path d="M10 16h6"></path>
     <path d="M13 11m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
     <path d="M4 8h3"></path>
     <path d="M4 12h3"></path>
     <path d="M4 16h3"></path>
  </svg>
);

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
        <button><HomeIcon />Home</button>
        <button className="active"><ServiceIcon />Service</button>
        <button><DoctorIcon />Doctors</button>
        <button><ReviewsIcon />Reviews</button>
        <button><ContactIcon />Contact</button>
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
          <h2>Available Times on {date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</h2>
          <div className="time-slots">
            <button className={time === '9:00 AM' ? 'selected' : ''} onClick={() => setTime('9:00 AM')}>9:00 AM</button>
            <button className={time === '9:30 AM' ? 'selected' : ''} onClick={() => setTime('9:30 AM')}>9:30 AM</button>
            <button className={time === '10:00 AM' ? 'selected' : ''} onClick={() => setTime('10:00 AM')}>10:00 AM</button>
            <button className={time === '10:30 AM' ? 'selected' : ''} onClick={() => setTime('10:30 AM')}>10:30 AM</button>
            <button className={time === '11:00 AM' ? 'selected' : ''} onClick={() => setTime('11:00 AM')}>11:00 AM</button>
            <button className={time === '11:30 AM' ? 'selected' : ''} onClick={() => setTime('11:30 AM')}>11:30 AM</button>
            <button className={time === '12:00 PM' ? 'selected' : ''} onClick={() => setTime('12:00 PM')}>1:00 PM</button>
            <button className={time === '12:30 PM' ? 'selected' : ''} onClick={() => setTime('12:30 PM')}>1:30 PM</button>
            <button className={time === '1:00 PM' ? 'selected' : ''} onClick={() => setTime('1:00 PM')}>2:00 PM</button>
            <button className={time === '1:30 PM' ? 'selected' : ''} onClick={() => setTime('1:30 PM')}>2:30 PM</button>
            <button className={time === '2:00 PM' ? 'selected' : ''} onClick={() => setTime('2:00 PM')}>3:00 PM</button>
            <button className={time === '2:30 PM' ? 'selected' : ''} onClick={() => setTime('2:30 PM')}>3:30 PM</button>
            <button className={time === '3:00 PM' ? 'selected' : ''} onClick={() => setTime('3:00 PM')}>4:00 PM</button>
            <button className={time === '3:30 PM' ? 'selected' : ''} onClick={() => setTime('3:30 PM')}>4:30 PM</button>
            <button className={time === '4:00 PM' ? 'selected' : ''} onClick={() => setTime('4:00 PM')}>5:00 PM</button>
            <button className={time === '4:30 PM' ? 'selected' : ''} onClick={() => setTime('4:30 PM')}>5:30 PM</button>
            <button className={time === '5:00 PM' ? 'selected' : ''} onClick={() => setTime('5:00 PM')}>6:00 PM</button>
            <button className={time === '5:30 PM' ? 'selected' : ''} onClick={() => setTime('5:30 PM')}>6:30 PM</button>
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
