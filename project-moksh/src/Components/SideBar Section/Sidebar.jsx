import React from 'react'
import './SideBar.css'
import './sidebar.scss'
import hey1 from '../../Assets/hey1.jpg'
import {IoMdSpeedometer} from 'react-icons/io'
import {MdDeliveryDining} from 'react-icons/md'
import {MdOutlineExplore} from 'react-icons/md'
import {BsTrophy} from 'react-icons/bs'
import {AiOutlinePieChart} from 'react-icons/ai'
import {BiTrendingUp} from 'react-icons/bi'
import {MdOutlinePermContactCalendar} from 'react-icons/md'
import {BsCreditCard2Front} from 'react-icons/bs'
import {BsQuestionCircleFill} from 'react-icons/bs'
const Sidebar = () => {
  return (
     <div className='SideBar grid'>
      <div className='logoDiv flex'>
        <img src={hey1} alt='moksh' />
        <h2>UrbanGarder.!</h2>
      </div>
      <div className="MenuDiv">
        <h3 className="DivTitle">
          QUICK MENU
        </h3>
        <ul className='MenuLists grid'>
          <li className="ListItem">
            <a href='/' className='menuLink  flex'>
              <IoMdSpeedometer className='icon'/>
              <span className='smallText'>
                Dash board
              </span>
            </a>
          </li>
          <li className="ListItem">
            <a href='/' className='menuLink  flex'>
              <MdDeliveryDining className='icon'/>
              <span className='smallText'>
                My Orders
              </span>
            </a>
          </li>
          <li className="ListItem">
            <a href='/' className='menuLink flex'>
              <MdOutlineExplore className='icon'/>
              <span className='smallText'>
                Explore
              </span>
            </a>
          </li>
          <li className="ListItem">
            <a href='/' className='menuLink flex'>
              <BsTrophy className='icon' />
              <span className='smallText'>
                Products
              </span>
            </a>
          </li>
        </ul>
      </div>


      <div className='SettingsDiv'>
          <h3 className="DivTitle">
            SETTINGS
          </h3>
          <ul className='MenuLists grid'>
          <li className="ListItem">
            <a href='/' className='menuLink flex'>
              <AiOutlinePieChart className='icon' />
              <span className='smallText'>
                Charts
              </span>
            </a>
          </li>
          <li className="ListItem">
            <a href='/' className='menuLink flex'>
              <BiTrendingUp className='icon' />
              <span className='smallText'>
                Trends
              </span>
            </a>
          </li>
          <li className="ListItem">
            <a href='/' className='menuLink flex'>
              <MdOutlinePermContactCalendar className='icon' />
              <span className='smallText'>
                Contact
              </span>
            </a>
          </li>
          <li className="ListItem">
            <a href='/' className='menuLink flex'>
              <BsCreditCard2Front className='icon' />
              <span className='smallText'>
                Billing
              </span>
            </a>
          </li>
          </ul>
         
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
  )
}

export default Sidebar