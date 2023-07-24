import React from 'react'
import "./Current.scss"
import {PiWind} from "react-icons/pi"
import { CiTempHigh } from 'react-icons/ci'
import {WiHumidity} from "react-icons/wi"
import {BsSun} from "react-icons/bs"
const Current = ({data,Temp}) => {
  const date = new Date(data.location.localtime).toDateString()
  return (
    <>
  <div className='app__currentContainer'>
    <div className='app__current-location'>
      <div>
      <h1>{date}</h1>
      <h2>{data.location.country}</h2>
      <p>{data.location.name}</p>
      </div>
      <div>
        <img className='app__current-image' src={data.current.condition.icon} alt="image" />
      </div>
    </div>
    <div className='d-none app__current-info '>
      <div className='app__current-temp'>
        <h2>Temprature</h2>
        {
          Temp === "C" ?   
          <p>{data.current.temp_c}&deg;C</p> 
          :
          <p>{data.current.temp_f}&deg;F</p>     }

      </div>
      <div className='app__current-humidity'>
    <h2>Humidity</h2>
    <p>{data.current.humidity} %</p>
      </div>
      <div className='app_current-windSpeed'>
        <h2>Wind Status</h2>
    <p>{data.current.wind_kph} kph</p>
      </div>
    </div>
  </div>
  <div className='d-visable app__current-info-cards'>
    <div className='app__current-info-cardItem'>
      <CiTempHigh/>
      <div>
          <h2>Temprature</h2>
          <p>{Temp === "C" ? <>{data.current.temp_c} C&deg;</> : <>{data.current.temp_f} F&deg;</> }</p>
      </div>
    </div>
    <div className='app__current-info-cardItem'>
          <WiHumidity/>
      <div>
          <h2>Humidity</h2>
          <p>{data.current.humidity} %</p>
      </div>
   </div>    
   <div className='app__current-info-cardItem'>
    <PiWind/>
    <div>
          <h2>Wind Speed</h2>
          <p>{data.current.wind_kph} Kph</p>
    </div>
   </div>    
   <div className='app__current-info-cardItem'>
    <BsSun/>
    <div>
          <h2>UV index</h2>
          <p>{data.current.uv}</p>
    </div>
   </div>
</div>
    </>
  )
}

export default Current