import React from 'react'
import "./navbar.scss"
import {FaSearch} from "react-icons/fa"
import axios from 'axios'
import { motion } from 'framer-motion'
const Navbar = ({Temp,setTemp,changeLocation}) => {
  const [searchBar,setSearchBar] = React.useState(false)
  const [searchValue,setSearchValue] =React.useState()
  const [searchResult,setSearchResult] = React.useState()
  const searchUrl =async (event) =>{
    const options = {
      method: 'GET',
      url: 'https://weatherapi-com.p.rapidapi.com/search.json',
      params: {q: event.target.value },
      headers: {
        'X-RapidAPI-Key': 'd14fc40b92msh9f1fdd883af63e6p17c0fcjsn118d3585de06',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
      }
    }
    console.log(event.target.value ?true :false)
    if(event.target.value == ""){
      setSearchValue(null)
      setSearchBar(false)
    }else{
      await axios(options).then(
        res => {
          setSearchBar(true)
          setSearchResult(res.data)
        }
      )
    }
  }
  return (
    <div className='app__navbar-wrapper'>
      <div className='app__navbar-logo'>
    <p>Wheather App</p>
      </div>
      <div className='app__navbar-component'>
        <div className='app__navbar-form'>
    <input onChange={searchUrl} type="text" />
    <span>
    <FaSearch  />
    </span>
        </div>
        <div className='app__navbar-temp'>
        <span onClick={(event) => setTemp(data => "C")} className={Temp === "C" ? 'active' : ""}>C</span>
        <span onClick={(event) => setTemp(data => "F")} className={Temp === "F" ? 'active' : ""}>F</span>
        </div>
        {
          searchBar && (

            <motion.div
            whileInView={{scale:[0,1],opacity:[0,1]}}
            transition={{delay:0.5,delayChildren:1}}
            className='app__navbar-searchWrapper'>
              {
                searchResult?.length < 1 && searchBar
                ?
                <p>no Country Found</p>
                
                :
                searchResult?.map(item => (
                  <div key={item.region} onClick={() =>{ 
                    setSearchBar(false)
                    changeLocation({
                    method: 'GET',
                    url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
                    params: {
                      q: `${item.lat} ${item.lon}`,
                      days: '3'
                    },
                    headers: {
                      'X-RapidAPI-Key': 'd14fc40b92msh9f1fdd883af63e6p17c0fcjsn118d3585de06',
                      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
                    }
                  })}} className='app__navbar-searchItem'>
                    <h3>{item.country}</h3>
                    <p>{item.region}</p>
                  </div>
                ))
              }
              </motion.div>

          )
        }
      </div>
    </div>
  )
}

export default Navbar