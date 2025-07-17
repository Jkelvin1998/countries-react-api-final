import { useEffect } from "react";

const useBodyBackground = (backgroundImage) => {
    useEffect(() => {
        if (backgroundImage) {
            document.body.style.backgroundImage = `url(${backgroundImage})`
            document.body.style.backgroundSize = '100% auto'
            document.body.style.backgroundRepeat = 'no-repeat'
            document.body.style.backgroundPosition = 'center'
            document.body.style.backgroundPosition = 'top center'
            document.body.style.backgroundAttachment = 'fixed'
        }

        const updateBackgroundForMobile = () => {
            if (window.innerWidth <= 768) {
            document.body.style.backgroundSize = 'cover'
            document.body.style.backgroundPosition = 'center right'
            } else {
            document.body.style.backgroundSize = '100% auto'
            document.body.style.backgroundPosition = 'top center'
            }
        }

        updateBackgroundForMobile()
        window.addEventListener('resize', updateBackgroundForMobile)

        return () => {
            document.body.style.backgroundImage = ''
            document.body.style.backgroundSize = ''
            document.body.style.backgroundRepeat = ''
            document.body.style.backgroundPosition = ''
            document.body.style.backgroundPosition = ''
            document.body.style.backgroundAttachment = ''
        }
    }, [backgroundImage])
}

export default useBodyBackground