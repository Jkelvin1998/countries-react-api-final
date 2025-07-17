import { useParams } from 'react-router-dom'

// Components
import Header from '../components/Header'
import DropDownButton from '../components/DropDownButton'

// Hooks
import useCountriesByRegion from '../hooks/useCountriesByRegion'
import useLoadingAnimation from '../hooks/useLoadingAnimation'
import useBodyBackground from '../hooks/useBodyBackground'

// Data
import regionData from '../data/regionData'
import { travelLoadingAnimation, successLoadingAnimation } from '../data/loadingAnimationData'

// Lottie
import Lottie from 'lottie-react'

// CSS
import '../pages/styles/RegionCountriesPage.css'

function toTitleCase(str) {
    return str.replace(/\w\S*/g, (txt) => 
        txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    )
}

const RegionCountriesPage = () => {

    const { regionName } = useParams();
    const region = regionData[regionName]

    const { loading } = useCountriesByRegion(regionName)
    const { stage, lottieRef1, lottieRef2 } = useLoadingAnimation(loading)

    useBodyBackground(region?.background)

    if (stage === 'loading') {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <Lottie 
                lottieRef={lottieRef1}
                animationData={travelLoadingAnimation.animationData}
                loop={travelLoadingAnimation.loop}
                style={{ height: 200, width: 200}} 
                />
            </div>    
        )
    }

    if (stage === 'success') {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <Lottie 
                lottieRef={lottieRef2}
                animationData={successLoadingAnimation.animationData}
                loop={successLoadingAnimation.loop}
                style={{ height: 200, width: 200}} 
                />
            </div> 
        )
    }

    if (!region) {
        return <h2>Region not found!</h2>
    }

  return (
    <>
        <Header /> 

        <div className='container'>
            <div className='page-region-box'>
            {region.image && (
                <img src={region.image} alt={`${region.name} Image`} />
            )}
            <h2 className='region'>{region.name}</h2>
            </div>
            
        <DropDownButton />
        </div>



    </>
  )
}

export default RegionCountriesPage