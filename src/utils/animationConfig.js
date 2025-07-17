import loadingTravel from '../assets/json/Travel.json'
import loadingSuccess from '../assets/json/Success.json'

export const travelLoadingAnimation = {
    loop: true,
    autoplay: true,
    animationData: loadingTravel,
    rendererSettings: {
        preserveAspectRation: 'xMidYMid slice'
    }
}

export const successLoadingAnimation = {
    loop: true,
    autoplay: true,
    animationData: loadingSuccess,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
}