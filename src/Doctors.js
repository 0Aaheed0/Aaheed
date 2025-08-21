import React, { useState } from 'react';
import './Doctors.css';

const doctorsData = [
  {
    id: 1,
    name: 'Dr. John Smith',
    email: 'john.smith@example.com',
    phone: '123-456-7890',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 2,
    name: 'Dr. Jane Doe',
    email: 'jane.doe@example.com',
    phone: '123-456-7891',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 3,
    name: 'Dr. Peter Jones',
    email: 'peter.jones@example.com',
    phone: '123-456-7892',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 4,
    name: 'Dr. Mary Williams',
    email: 'mary.williams@example.com',
    phone: '123-456-7893',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 5,
    name: 'Dr. David Brown',
    email: 'david.brown@example.com',
    phone: '123-456-7894',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 6,
    name: 'Dr. Susan Davis',
    email: 'susan.davis@example.com',
    phone: '123-456-7895',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 7,
    name: 'Dr. Michael Miller',
    email: 'michael.miller@example.com',
    phone: '123-456-7896',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 8,
    name: 'Dr. Linda Wilson',
    email: 'linda.wilson@example.com',
    phone: '123-456-7897',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 9,
    name: 'Dr. Robert Moore',
    email: 'robert.moore@example.com',
    phone: '123-456-7898',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 10,
    name: 'Dr. Patricia Taylor',
    email: 'patricia.taylor@example.com',
    phone: '123-456-7899',
    image: 'https://via.placeholder.com/150'
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
        </div>
      )}
    </div>
  );
};

export default Doctors;
