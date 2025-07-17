import { useEffect, useState, useRef } from "react";

export default function useLoadingAnimation(loading) {
    const [ stage, setStage ] = useState('loading')
    const lottieRef1 = useRef()
    const lottieRef2 = useRef()

    useEffect (() => {
        if (lottieRef1.current) {
            lottieRef1.current.setSpeed(2.0)
        }
    }, [])

    useEffect (() => {
        if (lottieRef2.current) {
            lottieRef2.current.setSpeed(2.0)
        }
    }, [])

    useEffect (() => {
        let travelTimeout, successTimeout

        if (!loading) {
            travelTimeout = setTimeout(() => {
                setStage('success')
                successTimeout  = setTimeout(()=> {
                    setStage('content')
                }, 1000)
            }, 950)
        }

        return () => {
            clearTimeout(travelTimeout)
            clearTimeout(successTimeout)
        }
    }, [loading])

    return { stage, lottieRef1, lottieRef2 }

}