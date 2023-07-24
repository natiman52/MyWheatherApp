import React from 'react'
import "./ForeCasts.scss"
const ForeCasts = ({data,temp}) => {
const days = [
  'Sun',"Mon","Tue","Wed","Thu","Fri","Sat"
]
const Month = [
  "Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"
]
  return (

      <div className='app__currentContainer'>
      <div className='app__ForeCast-top'>
    <p>ForeCast</p>
    <span>3 days</span>
      </div>
      <div className='app__ForeCast-Wrapper'>
    {
      data?.forecast?.forecastday.map( item => {
        const date = new Date(item.date)
        return (
        <div className='app__ForeCast-wrapper'>
        <div key={item.date} className='app__ForeCast-item'>
          <img src={item.day.condition.icon} alt="image" />
          <p>{temp === "C" ? <>{item.day.avgtemp_c} &deg;C</> : <>{item.day.avgtemp_f} &deg;F</>}</p>
          </div>
          {console.log(item)}
          <p> <span>{date.getDate()}</span> {Month[date.getMonth()]}, {days[date.getDay()]} </p>
          </div>
        )
})
    }
      </div>
      </div>

  )
}

export default ForeCasts