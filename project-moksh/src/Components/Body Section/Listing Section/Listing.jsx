import React from 'react'
import './Listing.css'
import './Listing.scss'
import image1 from '../../../Assets/image1.webp'
import image2 from '../../../Assets/image2.jpeg'
import image3 from '../../../Assets/image3.jpeg'
import image4 from '../../../Assets/image4.jpeg'
import image5 from '../../../Assets/image5.jpeg'
import image6 from '../../../Assets/image6.jpeg'
import image7 from '../../../Assets/image7.jpeg'
import image8 from '../../../Assets/image8.jpeg'
import image9 from '../../../Assets/image9.jpeg'
import user1 from '../../../Assets/user1.jpeg'
import user2 from '../../../Assets/user2.jpeg'
import user3 from '../../../Assets/user3.jpeg'
import user4 from '../../../Assets/user4.jpeg'
import {BsArrowRightShort} from 'react-icons/bs'
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai'
const Listing = () => {
  return (
    <div className='ListingSection'>
      <div className="Heading flex">
        <h1>My Listings</h1>
        <button className='btn flex'>
          See All <BsArrowRightShort className="icon"/>
        </button>
      </div>

      <div className="SecContainer flex px-4">
        <div className="SingleItem">
          <AiFillHeart className="icon"/>
          <img src={image1} alt='Name' /> 
          <h3>Annual Bonsai Vince</h3>
        </div>

        <div className="SingleItem">
          <AiOutlineHeart className="icon"/>
          <img src={image2} alt='Name' /> 
          <h3>Coffee Bonsai Plant</h3>
        </div>

        <div className="SingleItem">
          <AiFillHeart className="icon"/>
          <img src={image3} alt='Name' /> 
          <h3>Ficus Bonsai Plant</h3>
        </div>

        <div className="SingleItem">
          <AiOutlineHeart className="icon"/>
          <img src={image4} alt='Name' /> 
          <h3>Cherry Bonsai Plant</h3>
        </div>

        <div className="SingleItem">
          <AiFillHeart className="icon"/>
          <img src={image5} alt='Name' /> 
          <h3>Manberi Bonsai Plant</h3>
        </div>

        <div className="SingleItem">
          <AiOutlineHeart className="icon"/>
          <img src={image6} alt='Name' /> 
          <h3>Sizeal Bonsai Plant</h3>
        </div>

        <div className="SingleItem">
          <AiFillHeart className="icon"/>
          <img src={image7} alt='Name' /> 
          <h3>Cherry Bonsai Plant</h3>
        </div>

        <div className="SingleItem">
          <AiOutlineHeart className="icon"/>
          <img src={image8} alt='Name' /> 
          <h3>Spider Plant</h3>
        </div>

        <div className="SingleItem">
          <AiFillHeart className="icon"/>
          <img src={image9} alt='Name' /> 
          <h3>Sizeal Bonsai Plant</h3>
        </div>
      </div>

      
      <div className="Sellers flex">
        <div className="TopSellers">
          <div className="Heading flex">
            <h3>Top Sellers</h3>
            <button className='btn flex'>
              See All <BsArrowRightShort className="icon"/>
            </button>
          </div>

          <div className="Card flex">
            <div className='Users'>
              <img src={user1} alt='User' />
              <img src={user2} alt='User' />
              <img src={user3} alt='User' />
              <img src={user4} alt='User' />
            </div>
            <div className="CardText">
              <span>
                14,556 Plants sold <br/>
                <small>
                  21 Sellers <span className='date'>7 Days</span>
                </small>
              </span>
            </div>
          </div>
        </div>

        <div className="FeaturedSellers">
          <div className="Heading flex">
            <h3>Featured Sellers</h3>
            <button className='btn flex'>
              See All <BsArrowRightShort className="icon"/>
            </button>
          </div>

          <div className="Card flex">
            <div className='Users'>
              <img src={user4} alt='User' />
              <img src={user2} alt='User' />
              <img src={user1} alt='User' />
              <img src={user3} alt='User' />
            </div>
            <div className="CardText">
              <span>
                52,896 Plants sold <br/>
                <small>
                  53 Sellers <span className='date'>7 Days</span>
                </small>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Listing