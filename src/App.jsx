import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Region Pages
import HomePage from './pages/Home';
import RegionCountriesPage from './pages/RegionCountriesPage';

function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/region/:regionName' element={<RegionCountriesPage />} />
        </Routes>
      </Router>
  );
}

export default App;
