import React from 'react'
import infoIcon from '../assets/feed-icon.svg'
import { CgHashtag } from 'react-icons/cg'

const LeftBar = () => {
  return (
    <div className='sidebar '>
      <div className='top-sidebar'>
      <div>
        <h2>Add to your feed</h2>
        <img src={infoIcon} alt="" />
      </div>
      <div className="feed-card">
        <div>
          <CgHashtag />
          <p>#linkedin <br /> <button>follow</button></p>
        </div>
        <div>
          <CgHashtag />
          <p>#linkedin <br /> <button>follow</button></p>
        </div>
        <p>View all recommendations &rarr;</p>
      </div>
      </div>
    </div>
  )
}

export default LeftBar