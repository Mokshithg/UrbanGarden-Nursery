import React from 'react'
import './Activity.css'
import './Activity.scss'
import UrbanCustomer from '../../../Assets/UrbanCustomer.jpg'
import UrbanCustomer4 from '../../../Assets/UrbanCustomer4.jpeg'
import UrbanCustomer2 from '../../../Assets/UrbanCustomer2.jpeg'
import UrbanCustomer5 from '../../../Assets/UrbanCustomer5.jpeg'
import UrbanCustomer6 from '../../../Assets/UrbanCustomer6.jpeg'
import UrbanCustomer7 from '../../../Assets/UrbanCustomer7.jpeg'
import UrbanCustomer8 from '../../../Assets/UrbanCustomer8.jpeg'
import UrbanCustomer9 from '../../../Assets/UrbanCustomer9.jpeg'
import UrbanCustomer10 from '../../../Assets/UrbanCustomer10.jpeg'
import UrbanCustomer3 from '../../../Assets/UrbanCustomer3.jpg'
import {BsArrowRightShort} from 'react-icons/bs'
const Activity = () => {
  return (
    <div className='ActivitySection' style={{ marginLeft: 30}}>
      <div className="heading flex" style={{justifyContent: 'space-between'}}>
        <h1>Recent Activity</h1>
        <button className='btn flex'>
          See All
          <BsArrowRightShort className='icon'/>
        </button>
      </div>

      <div className='SecContainer grid'>
        <div className="SingleCustomer flex">
          <img src={UrbanCustomer} alt='Customer'/>
          <div className='CustomerDetails'>
            <span className='name'>Canado Bhavno</span>
            <small>Ordered a brand new varient</small>
          </div>
          <div className="Duration">
            21 min ago
          </div>
        </div>
        <div className="SingleCustomer flex">
          <img src={UrbanCustomer4} alt='Customer'/>
          <div className='CustomerDetails'>
            <span className='name'>Daniel</span>
            <small>Ordered a brand new varient</small>
          </div>
          <div className="Duration">
            55 min ago
          </div>
        </div>
        <div className="SingleCustomer flex">
          <img src={UrbanCustomer2} alt='Customer'/>
          <div className='CustomerDetails'>
            <span className='name'>Andrew</span>
            <small>Ordered a brand new varient</small>
          </div>
          <div className="Duration">
            1hr 20min ago
          </div>
        </div>
        <div className="SingleCustomer flex">
          <img src={UrbanCustomer3} alt='Customer'/>
          <div className='CustomerDetails'>
            <span className='name'>Benjamin</span>
            <small>Ordered a brand new varient</small>
          </div>
          <div className="Duration">
            1hr 57min ago
          </div>
        </div>

        <div className="SingleCustomer flex">
          <img src={UrbanCustomer5} alt='Customer'/>
          <div className='CustomerDetails'>
            <span className='name'>Dallas Joyce</span>
            <small>Ordered a brand new varient</small>
          </div>
          <div className="Duration">
            1hr 59 min ago
          </div>
        </div>

        <div className="SingleCustomer flex">
          <img src={UrbanCustomer6} alt='Customer'/>
          <div className='CustomerDetails'>
            <span className='name'>Mason</span>
            <small>Ordered a brand new varient</small>
          </div>
          <div className="Duration">
            2hr 1min ago
          </div>
        </div>

        <div className="SingleCustomer flex">
          <img src={UrbanCustomer7} alt='Customer'/>
          <div className='CustomerDetails'>
            <span className='name'>Grace Browne</span>
            <small>Ordered a brand new varient</small>
          </div>
          <div className="Duration">
            2hr 2min ago
          </div>
        </div>

        <div className="SingleCustomer flex">
          <img src={UrbanCustomer8} alt='Customer'/>
          <div className='CustomerDetails'>
            <span className='name'>Lilly harris</span>
            <small>Ordered a brand new varient</small>
          </div>
          <div className="Duration">
           2hr 7min ago
          </div>
        </div>

        <div className="SingleCustomer flex">
          <img src={UrbanCustomer9} alt='Customer'/>
          <div className='CustomerDetails'>
            <span className='name'>Preeti Malhotra</span>
            <small>Ordered a brand new varient</small>
          </div>
          <div className="Duration">
            2hr 18 min ago
          </div>
        </div>

        <div className="SingleCustomer flex">
          <img src={UrbanCustomer10} alt='Customer'/>
          <div className='CustomerDetails'>
            <span className='name'>Geeta Menon</span>
            <small>Ordered a brand new varient</small>
          </div>
          <div className="Duration">
            2hr 21 min ago
          </div>
        </div>
      </div>
    </div>
  )
}

export default Activity