import { useState } from 'react'
import './App.scss'
import Navbar from './container/Navbar'
import useStart from './utils/useStart'
import Current from "./component/FocalPoint/Current"
import ForeCasts from "./component/SidePoint/ForeCasts"
import {Circles} from "react-loader-spinner"
import { motion } from 'framer-motion'
function App() {
  const [Temp,setTemp] = useState("C")
  const {Data,Loading,FetchData} = useStart()
  console.log(Data)
  const changeLocation = (option) => {
    FetchData(option)
  }

  return (
    <>
  <Navbar Temp={Temp} setTemp={setTemp} changeLocation={changeLocation}/>
  {
    Loading ?
    (
  <div className='Loading-logo'>
<Circles
  height="80"
  width="80"
  color="blue"
  ariaLabel="circles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
  </div>
    )
    :
    (

  <div className='app__mainWrapper'>
      <motion.div 
      className='app__currentWrapper full-width'
      whileInView={{y:[-100,0],opacity:[0,1]}}
      transition={{delayChildren:1,duration:0.5}}>
    <Current data={Data} Temp={Temp}/>
      </motion.div>
    <motion.div 
    className='full-width app__forecastWrapper'
    whileInView={{y:[-100,0],opacity:[0,1]}}
    transition={{duration:0.5}}
    >
    <ForeCasts data={Data} temp={Temp}/>
    </motion.div>
  </div>
    )
  }
    </>
  )
}

export default App
