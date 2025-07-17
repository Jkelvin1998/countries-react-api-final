import React from 'react'
import { Link } from 'react-router-dom';

// Data
import regionData from '../data/regionData'

// Images
import AfricaImg from '../assets/images/Africa.png';
import AsiaImg from '../assets/images/Asia.png';
import OceaniaImg from '../assets/images/Oceania.png';
import EuropeImg from '../assets/images/Europe.png';
import AmericasImg from '../assets/images/Americas.png';
import AntarcticaImg from '../assets/images/Antartica.png';

// Header
import Header from '../components/Header';

// CSS
import '../pages/styles/Home.css'

const HomePage = () => {
    const region = regionData['']

  return (
    <>
        <Header />

        <section className="sec-container">
            <h1>Regions of the World</h1>
                <div className="region-container">
                    { Object.entries(regionData).map(([key, value]) => (
                        <Link to={`/region/${key}`} className="region-link" key={key}>
                        <div className="region-card" id={`${key.toLowerCase()}-id`}>
                            <img src={value.image} alt={`${value.name}-image`} />
                            <span>{value.name} Region</span>
                        </div>
                    </Link>
                    ))}
                    
                </div>

                <div id="regions-list">
                    
                </div>
        </section>
    </>
  )
}

export default HomePage