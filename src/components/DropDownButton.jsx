import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

//  Hooks
import useCountriesByRegion from '../hooks/useCountriesByRegion';

// Component
import CountriesCard from './CountriesCard';

// CSS
import '../components/style/DropDownButton.css'

const DropDownButton = () => {
  const { regionName } = useParams();
  const [selectedSubregion, setSelectedSubregion] = useState('');
  const hasAutoSelected = useRef(false); // Track if auto-select already ran

  const {
    countries,
    loading,
    setSelectedSubregion: setSubregionInHook,
    filteredCountriesData,
    uniqueSubregions
  } = useCountriesByRegion(regionName);

  useEffect(() => {
    if (!loading && countries.length > 0 && !hasAutoSelected.current) {
      setSelectedSubregion('All');
      setSubregionInHook('');
      hasAutoSelected.current = true; // Prevent running again
    }
  }, [loading, countries, setSubregionInHook]);

  const handleChange = (e) => {
    const selected = e.target.value;
    setSelectedSubregion(selected);
    setSubregionInHook(selected === 'All' ? '' : selected);
  };

  return (
    <div>
      <div className='dropdown-menu'>
      <h4>Subregion: </h4>
        <select name='subregion' value={selectedSubregion} onChange={handleChange}>
          <option value="All">All</option>
          {uniqueSubregions.map((subregion) => (
            <option key={subregion} value={subregion}>
              {subregion}
            </option>
          ))}
        </select>
      </div>

      {loading && <p>Loading data...</p>}

      {!loading && (
        <CountriesCard
          selectedSubregion={selectedSubregion}
          countries={countries}
          filteredCountriesData={filteredCountriesData}
        />
      )}
    </div>
  );
};

export default DropDownButton;
