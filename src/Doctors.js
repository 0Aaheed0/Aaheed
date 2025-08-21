import React, { useState } from 'react';
import './Doctors.css';

const MaleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-gender-male" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M10 14m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0"></path>
   <path d="M19 5l-5 5"></path>
   <path d="M19 5h-5"></path>
   <path d="M19 5v5"></path>
</svg>
);

const FemaleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-gender-female" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M12 9m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0"></path>
   <path d="M12 14v7"></path>
   <path d="M9 18h6"></path>
</svg>
);

const doctorsData = [
  {
    id: 1,
    name: 'Dr. Aaheed Bin Ashraf',
    email: 'aaheed@gmail.com',
    phone: '017-1111-1111',
    image: 'male',
    age: 46,
    education: 'MD, Harvard Medical School',
    hometown: 'Boston, MA',
    gender: 'Male',
    experience: '20 years',
    reviews: 'Excellent doctor, very knowledgeable.'
  },
  {
    id: 2,
    name: 'Dr. Anika Rahman',
    email: 'anika@gmail.com',
    phone: '017-2222-2222',
    image: 'female',
    age: 38,
    education: 'MD, Stanford University',
    hometown: 'Palo Alto, CA',
    gender: 'Female',
    experience: '12 years',
    reviews: 'Very caring and attentive.'
  },
  {
    id: 3,
    name: 'Dr. Yousha Shahid',
    email: 'yousha@gmail.com',
    phone: '017-3333-3333',
    image: 'male',
    age: 50,
    education: 'MD, Yale University',
    hometown: 'New Haven, CT',
    gender: 'Male',
    experience: '25 years',
    reviews: 'Highly recommend, great experience.'
  },
  {
    id: 4,
    name: 'Dr. Nusrat Jahan Tuli',
    email: 'nusrat@gmail.com',
    phone: '017-4444-4444',
    image: 'female',
    age: 32,
    education: 'MD, Columbia University',
    hometown: 'New York, NY',
    gender: 'Female',
    experience: '7 years',
    reviews: 'Friendly and professional.'
  },
  {
    id: 5,
    name: 'Dr. Golam Rabbani Miraz',
    email: 'miraz@gmail.com',
    phone: '017-5555-5555',
    image: 'male',
    age: 55,
    education: 'MD, University of Pennsylvania',
    hometown: 'Philadelphia, PA',
    gender: 'Male',
    experience: '30 years',
    reviews: 'Experienced and trustworthy.'
  },
  {
    id: 6,
    name: 'Dr. Gwen Stacy',
    email: 'gwen@gmail.com',
    phone: '017-6666-6666',
    image: 'female',
    age: 40,
    education: 'MD, Duke University',
    hometown: 'Durham, NC',
    gender: 'Female',
    experience: '15 years',
    reviews: 'Attentive and thorough.'
  },
  {
    id: 7,
    name: 'Dr. Levi Ackerman',
    email: 'levi@gmail.com',
    phone: '017-7777-7777',
    image: 'male',
    age: 48,
    education: 'MD, University of Chicago',
    hometown: 'Chicago, IL',
    gender: 'Male',
    experience: '22 years',
    reviews: 'Great communication skills.'
  },
  {
    id: 8,
    name: 'Dr. Makima',
    email: 'makima@gmail.com',
    phone: '017-8888-8888',
    image: 'female',
    age: 35,
    education: 'MD, Northwestern University',
    hometown: 'Evanston, IL',
    gender: 'Female',
    experience: '10 years',
    reviews: 'Very patient and understanding.'
  },
  {
    id: 9,
    name: 'Dr. Taro Sakamoto',
    email: 'taro@gmail.com',
    phone: '123-456-7898',
    image: 'male',
    age: 52,
    education: 'MD, UCLA',
    hometown: 'Los Angeles, CA',
    gender: 'Male',
    experience: '28 years',
    reviews: 'Professional and efficient.'
  },
  {
    id: 10,
    name: 'Dr. Kaori Miyazono',
    email: 'kaori@gmail.com',
    phone: '123-456-7899',
    image: 'female',
    age: 42,
    education: 'MD, UC Berkeley',
    hometown: 'Berkeley, CA',
    gender: 'Female',
    experience: '18 years',
    reviews: 'Thorough and compassionate.'
  }
];

const Doctors = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [showSidebar, setShowSidebar] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const doctorsPerPage = 6;

  const filteredDoctors = doctorsData.filter(doctor =>
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastDoctor = currentPage * doctorsPerPage;
  const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage;
  const currentDoctors = filteredDoctors.slice(indexOfFirstDoctor, indexOfLastDoctor);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  const handleDoctorClick = (doctor) => {
    setSelectedDoctor(doctor);
    setShowSidebar(true);
  };

  const handleCloseSidebar = () => {
    setShowSidebar(false);
    setSelectedDoctor(null);
  };

  return (
    <div className="doctors-page">
      <h1>Our Doctors</h1>
      <div className="doctor-search-container">
        <h2>Search Doctor</h2>
        <input
          type="text"
          placeholder="Enter doctor's name"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="doctor-list">
        {currentDoctors.map(doctor => (
          <div key={doctor.id} className="doctor-card" onClick={() => handleDoctorClick(doctor)}>
            {doctor.gender === 'Male' ? <MaleIcon /> : <FemaleIcon />}
            <h2>{doctor.name}</h2>
            <p>{doctor.email}</p>
            <p>{doctor.phone}</p>
          </div>
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: Math.ceil(filteredDoctors.length / doctorsPerPage) }, (_, i) => (
          <button key={i + 1} onClick={() => paginate(i + 1)}>
            {i + 1}
          </button>
        ))}
      </div>

      {showSidebar && selectedDoctor && (
        <div className="doctor-details-sidebar">
          <button className="close-sidebar" onClick={handleCloseSidebar}>X</button>
          <img src={`https://ui-avatars.com/api/?name=${selectedDoctor.name}&background=random&size=150`} alt={selectedDoctor.name} />
          <h3>{selectedDoctor.name}</h3>
          <p>Email: {selectedDoctor.email}</p>
          <p>Phone: {selectedDoctor.phone}</p>
          <p>Age: {selectedDoctor.age}</p>
          <p>Education: {selectedDoctor.education}</p>
          <p>Hometown: {selectedDoctor.hometown}</p>
          <p>Gender: {selectedDoctor.gender}</p>
          <p>Experience: {selectedDoctor.experience}</p>
          <p>Reviews: {selectedDoctor.reviews}</p>
        </div>
      )}
    </div>
  );
};

export default Doctors;



