import React from 'react'
import { NavLink } from 'react-router-dom'
import { ImHome3 } from "react-icons/im"
import { FaUserGroup } from 'react-icons/fa6'
import { FaBriefcase, FaCommentDots } from 'react-icons/fa'
import { IoMdNotifications, IoMdArrowDropdown } from 'react-icons/io'
import { PiDotsNineBold } from 'react-icons/pi'
import linkedinIcon from '../assets/linkedin.png'
import { FiSearch } from 'react-icons/fi'
import { auth } from '../config/firebase'
import { signOut } from 'firebase/auth'
import profileImg from '../assets/profile.jpeg'

const Header = () => {
  const logout = async () => {
    try {
      await signOut(auth)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className='header-wrapper'>
        <header>
            <div className='top-nav'>
             <img src={linkedinIcon} alt="" className='logo'/>
             <div className='search'>
                <FiSearch className='searchIcon' />
             <input type="text" placeholder='search' />
             </div>
            </div>
            <nav>
                <NavLink to="/home"><ImHome3 className='icon' /> <span className='navlink'>Home</span></NavLink>
                <NavLink to=""><FaUserGroup className='icon' /> <span className='navlink'>My Network</span></NavLink>
                <NavLink to="/work"><FaBriefcase className='icon'/> <span className='navlink'>Jobs</span> </NavLink>
                <NavLink><FaCommentDots className='icon'/><span className='navlink'>Messaging</span> </NavLink>
                <NavLink><IoMdNotifications className='icon'/><span className='navlink'>Notifications</span></NavLink>    
                <NavLink className="profile" onClick={logout}><img src={profileImg} alt="" className='avatar' /><span> Me <IoMdArrowDropdown /></span></NavLink>
                <NavLink className="business"><PiDotsNineBold className='icon' /><span> For Business <IoMdArrowDropdown /></span></NavLink>
            </nav>
        </header>
    </div>
  )
}

export default Header