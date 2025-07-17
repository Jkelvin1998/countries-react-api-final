import React from 'react'
// CSS
import '../components/style/CountriesCard.css'

function toTitleCase(str) {
    return str.replace(/\w\S*/g, (txt) => 
        txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    )
}

const CountriesCard = ({ selectedSubregion, countries, filteredCountriesData }) => {

    const isAll = selectedSubregion === 'All' || selectedSubregion === ''

  return (
    <div className='container'>
        <h3 className='subregion'>
            {isAll ? 'All Countries' : `Countries in ${selectedSubregion}`}
        </h3>
        <div className='country-container'>

            {(isAll ? countries : filteredCountriesData).map((country) => (
                <div className='country-card' key={ country.name.common }>
                    <div className='country-card-header'>
                        <img className='flag-img' src={country.flags.png} alt={`${country.name.common} flag`} />
                        <h3 className='country-name'>{ country.name.common }</h3>
                    </div>
                    <div className='details'>
                        <p>
                            <b>Capital: </b>
                            <br /> 
                            { country.capital ? country.capital[0] : 'N/A' } 
                        </p>
                        <p>
                            <b>Subregion: </b>
                            <br /> 
                            { country.subregion || 'N/A'} 
                        </p>
                        <p>
                            <b>Languages: </b>
                            <br />
                            { country.languages ? Object.values(country.languages).join(', ') : 'N/A' }
                        </p>
                        <p>
                            <b>Currencies: </b>
                            <br />
                            { country.currencies ? Object.values(country.currencies).map(c => toTitleCase(c.name)).join(', ') : 'N/A' }
                        </p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default CountriesCard