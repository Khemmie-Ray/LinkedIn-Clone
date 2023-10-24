import React from 'react'
import infoIcon from '../assets/feed-icon.svg'
import { CgHashtag } from 'react-icons/cg'

const LeftBar = () => {
  return (
    <div className='left-bar'>
      <div className='fcard1'>
        <h3>Add to your feed</h3>
        <img src={infoIcon} alt="" className='f-icon'/>
      </div>
      <div className="feed-card">
        <div className='fcard'>
          <CgHashtag className='tag1' />
          <p>#Linkedin <br /> <button className='follow-btn'>Follow</button></p>
        </div>
        <div className='fcard'>
          <CgHashtag className='tag1' />
          <p>#Video <br /> <button className='follow-btn'>Follow</button></p>
        </div>
        <p className='rec-text'>View all recommendations &rarr;</p>
      </div>
    </div>
  )
}

export default LeftBar