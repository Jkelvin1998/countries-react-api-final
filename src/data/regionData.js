// Import Images
import AfricaImg from '../assets/images/Africa.png'
import AsiaImg from '../assets/images/Asia.png'
import OceaniaImg from '../assets/images/Oceania.png'
import EuropeImg from '../assets/images/Europe.png'
import AmericasImg from '../assets/images/Americas.png'
import AntarcticaImg from '../assets/images/Antartica.png'
import AfricaBg from '../assets/images/AfricaBg.png'
import AsiaBg from '../assets/images/AsiaBg.png'
import OceaniaBg from '../assets/images/OceaniaBg.png'
import EuropeBg from '../assets/images/EuropeBg.png'
import AmericasBg from '../assets/images/AmericasBg.png'
import AntarcticaBg from '../assets/images/AntarticaBg.png'

const regionData = {
    Africa: {
        name: 'Africa',
        image: AfricaImg,
        background: AfricaBg
    },
    Asia: { 
        name: 'Asia',
        image: AsiaImg,
        background: AsiaBg
    },
    Oceania: {
        name: 'Oceania',
        image: OceaniaImg,
        background: OceaniaBg
    },
    Europe: {
        name: 'Europe',
        image: EuropeImg,
        background: EuropeBg
    },
    Americas: {
        name: 'Americas',
        image: AmericasImg,
        background: AmericasBg
    },
    Antarctic: {
        name: 'Antarctic',
        image: AntarcticaImg,
        background: AntarcticaBg
    }
}

export default regionData;

