import React from 'react'
import axios from 'axios'
const useStart = () => {
    const [CurrentLocation,setCurrentLocation] = React.useState()
    const [Data,setData] = React.useState("")
    const [Loading,setLoading] = React.useState(true)

    const Start = () =>{
        navigator.geolocation.getCurrentPosition(async function (position){
            setCurrentLocation(position)
            const options = {
                method: 'GET',
                url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
                params: {q: `${position?.coords.latitude} ${position?.coords.longitude}`,days:'3'},
                headers: {
                  'X-RapidAPI-Key': 'd14fc40b92msh9f1fdd883af63e6p17c0fcjsn118d3585de06',
                  'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
                }
              }
              await axios(options).then( (data) => {
                setData(data.data)
                setLoading(false)
            }).catch( (res) => {
                console.log(res)
            })
        })
    }
    const FetchData = async(options) => {
if(options){
    setData()
    setLoading(true)
    await axios(options).then( res => {
        setData(res.data)
        setLoading(false)
       })
}
    }
    React.useEffect(() => {
        Start()
    }, [])
    return {Data,Loading,FetchData}
}

export default useStart