import './App.css';
import Service from './Service';
import Doctors from './Doctors';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Service />} />
          <Route path="/doctors" element={<Doctors />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;