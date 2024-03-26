import React from 'react'
import './Body.css'
import './Body.scss'
import Listing from './Listing Section/Listing'
import Top from './Top Section/Top'
import Activity from './Activity Section/Activity'
const Body = () => {
  return (
    <div className='MainContent'>
        <Top/>
        <div className='bottom flex'>
            <Listing/>
            <Activity/>
        </div>
    </div>
  )
}

export default Body