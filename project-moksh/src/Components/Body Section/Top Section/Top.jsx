import React from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import { MdOutlineNotificationsNone } from 'react-icons/md'
import { TbMessageCircle } from 'react-icons/tb'
import {BsQuestionCircleFill} from 'react-icons/bs'
import './Top.css'
import './Top.scss'
// import moksh1 from '../../../Assets/moksh1.jpg'
import UrbanCustomer1 from '../../../Assets/UrbanCustomer1.jpg'
import images from '../../../Assets/images.jpeg'
import video from '../../../Assets/video.mp4'
import { BsArrowRightShort } from 'react-icons/bs'
const Top = () => {
  return (
    <div className='TopSection'>
      <div className="HeaderSection flex">
        <div className="title">
          <h2>Welcome to UrbanGarden.!</h2>
        </div>

        <div className='SearchBar flex'>
          <input type='text' name='Search' autoComplete='off'required/>
          <label for="Search" className='label-wrapper' style={{color:'black' }}>
            <span className='label-text'>
              Search
            </span>
            <BiSearchAlt className='icon' style={{marginTop: 20, marginLeft: 220, color: 'black'}}/>
          </label>
        </div>
        {/* <div className='SearchBar flex' style={{marginLeft: -20}}>
        <BiSearchAlt className='icon'/>
        </div> */}

        <div className='AdminDiv flex'>
          <TbMessageCircle className='icon'/>
          <MdOutlineNotificationsNone className='icon'/>
          <div className='AdminImage'>
            <img src={UrbanCustomer1}alt='admin'/>
          </div>
        </div>
      </div>
      <div className="CardSection flex">
        <div className="RightCard flex">
          <h1>Create and Sell Extraordinary Products</h1>
          <p>The World's fast growing Sector are natural made products.!</p>
          <div className='buttons flex'>
                <button className='btn1' style={{color:'Black'}}>Explore More</button>
                <button className='btn transparent'>Top Sellers</button>
          </div>
          <div className='VideoDiv'>
              <video autoPlay loop muted>
                <source src={video} />
              </video>
              <div className="overlay-content"></div>
          </div>
        </div>
        <div className='LeftCard flex'>
          <div className="Main flex">
            <div className="TextDiv">
            <h1>My Stat</h1>
            <div className="flex">
              <span>
                Today<br/><small>5 Orders</small>
              </span>
              <span>
                This Month<br/><small>97 Orders</small>
              </span> 
            </div>
            <span className='flex link'>
              My Orders <BsArrowRightShort className='icon'/>
            </span>
            </div>
            <div className="ImgDiv">
              <img src={images} alt='Name'/>
            </div>
          </div>

          <div className="SideBarCard">
        <BsQuestionCircleFill className='icon'/>
        <div className="CardContent">
          <div className="Circle1"></div>
          <div className="Circle2"></div>

          <h3>Help Center</h3>
          <p>Having any trouble with UrbanGarden?<a href='/'>Please Contact us for more queries..</a></p>
          <button className='btn'>Go to help center</button>
        </div>
        </div>



        </div>
      </div>
    </div>
  )
}

export default Top