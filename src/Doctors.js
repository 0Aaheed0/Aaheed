import React, { useState } from 'react';
import './Doctors.css';

const doctorsData = [
  {
    id: 1,
    name: 'Dr. John Smith',
    email: 'john.smith@example.com',
    phone: '123-456-7890',
    image: 'https://via.placeholder.com/150',
    age: 45,
    education: 'MD, Harvard Medical School',
    hometown: 'Boston, MA',
    gender: 'Male',
    experience: '20 years',
    reviews: 'Excellent doctor, very knowledgeable.'
  },
  {
    id: 2,
    name: 'Dr. Jane Doe',
    email: 'jane.doe@example.com',
    phone: '123-456-7891',
    image: 'https://via.placeholder.com/150',
    age: 38,
    education: 'MD, Stanford University',
    hometown: 'Palo Alto, CA',
    gender: 'Female',
    experience: '12 years',
    reviews: 'Very caring and attentive.'
  },
  {
    id: 3,
    name: 'Dr. Peter Jones',
    email: 'peter.jones@example.com',
    phone: '123-456-7892',
    image: 'https://via.placeholder.com/150',
    age: 50,
    education: 'MD, Yale University',
    hometown: 'New Haven, CT',
    gender: 'Male',
    experience: '25 years',
    reviews: 'Highly recommend, great experience.'
  },
  {
    id: 4,
    name: 'Dr. Mary Williams',
    email: 'mary.williams@example.com',
    phone: '123-456-7893',
    image: 'https://via.placeholder.com/150',
    age: 32,
    education: 'MD, Columbia University',
    hometown: 'New York, NY',
    gender: 'Female',
    experience: '7 years',
    reviews: 'Friendly and professional.'
  },
  {
    id: 5,
    name: 'Dr. David Brown',
    email: 'david.brown@example.com',
    phone: '123-456-7894',
    image: 'https://via.placeholder.com/150',
    age: 55,
    education: 'MD, University of Pennsylvania',
    hometown: 'Philadelphia, PA',
    gender: 'Male',
    experience: '30 years',
    reviews: 'Experienced and trustworthy.'
  },
  {
    id: 6,
    name: 'Dr. Susan Davis',
    email: 'susan.davis@example.com',
    phone: '123-456-7895',
    image: 'https://via.placeholder.com/150',
    age: 40,
    education: 'MD, Duke University',
    hometown: 'Durham, NC',
    gender: 'Female',
    experience: '15 years',
    reviews: 'Attentive and thorough.'
  },
  {
    id: 7,
    name: 'Dr. Michael Miller',
    email: 'michael.miller@example.com',
    phone: '123-456-7896',
    image: 'https://via.placeholder.com/150',
    age: 48,
    education: 'MD, University of Chicago',
    hometown: 'Chicago, IL',
    gender: 'Male',
    experience: '22 years',
    reviews: 'Great communication skills.'
  },
  {
    id: 8,
    name: 'Dr. Linda Wilson',
    email: 'linda.wilson@example.com',
    phone: '123-456-7897',
    image: 'https://via.placeholder.com/150',
    age: 35,
    education: 'MD, Northwestern University',
    hometown: 'Evanston, IL',
    gender: 'Female',
    experience: '10 years',
    reviews: 'Very patient and understanding.'
  },
  {
    id: 9,
    name: 'Dr. Robert Moore',
    email: 'robert.moore@example.com',
    phone: '123-456-7898',
    image: 'https://via.placeholder.com/150',
    age: 52,
    education: 'MD, UCLA',
    hometown: 'Los Angeles, CA',
    gender: 'Male',
    experience: '28 years',
    reviews: 'Professional and efficient.'
  },
  {
    id: 10,
    name: 'Dr. Patricia Taylor',
    email: 'patricia.taylor@example.com',
    phone: '123-456-7899',
    image: 'https://via.placeholder.com/150',
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
            <img src={doctor.image} alt={doctor.name} />
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
          <img src={selectedDoctor.image} alt={selectedDoctor.name} />
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
