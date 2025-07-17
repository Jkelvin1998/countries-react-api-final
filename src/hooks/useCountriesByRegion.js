import { useEffect, useState } from "react";

const dataFields = ['region', 'subregion', 'name', 'capital', 'flags', 'currencies', 'languages']
const apiUrl = `https://restcountries.com/v3.1/all?fields=${dataFields.join(',')}`

export default function useCountriesByRegion(regionName) {

    const [countries, setCountries] = useState([])
    const [selectedSubregion, setSelectedSubregion] = useState('')
    const [filteredCountriesData, setFilteredCountriesData] = useState([])
    const [uniqueSubregions, setUniqueSubregions] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
            setLoading(true)
            fetch(apiUrl)
                .then(res => res.json())
                .then(data => {
                    const filteredCountries = data.filter(country => country.region === regionName)
                    // console.log(`Filtered countries for ${regionName}:`, filteredCountries);
                    setCountries(filteredCountries)
                    setLoading(false)

                    if (selectedSubregion) {
                        const matches = data.filter(country => country.subregion === selectedSubregion)
                        setFilteredCountriesData(matches)
                    } else {
                        setFilteredCountriesData([])
                    }

                    const subregions = [
                        ...new Set(data.filter(c => c.region === regionName).map(country => country.subregion))].filter(Boolean)
                        setUniqueSubregions(subregions)
                })
                .catch(() => setLoading(false))
    }, [regionName, selectedSubregion])

    // console.log(countries)
    return { countries,
             loading, 
             setSelectedSubregion, 
             filteredCountriesData, 
             uniqueSubregions }
}



