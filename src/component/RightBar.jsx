import React from 'react'
import cardBg from '../assets/card-bg.svg'
import photoIcon from '../assets/photo.svg' 
import { MdPersonAddAlt1 } from 'react-icons/md'
import { BsFillBookmarkFill } from 'react-icons/bs'
import { HiPlus } from 'react-icons/hi'

const RightBar = () => {
  return (
    <div className='sidebar'>
      <section className='top-sidebar'>
        <div className='profile-bg'>
        <img src={cardBg} alt=""  className='card-bg'/>
        <div className='profile-img'><img src={photoIcon} alt="" /></div>
        </div>
        <div className="name">
        <h3>Welcome, Adetoye Bolanle</h3>
        <p>Add a photo</p>
        </div>
        <div className='network'>
          <p>Connections <br /><span className='bold'>Grow your network</span></p>
          <MdPersonAddAlt1 className='connect-icon' />
        </div>
        <p className='item'><BsFillBookmarkFill /> My Items</p>
      </section>
     <section className='hashtags'>
      <div className='network'>
        <p className='bold'>Groups <br /> Events <br /> Follow Hashtags</p>
        <HiPlus className='connect-icon'/>
      </div>
      <p className='item'>Discover more</p>
     </section>   
    </div>
  )
}

export default RightBar