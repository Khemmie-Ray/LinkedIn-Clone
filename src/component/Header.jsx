import React from 'react'
import { NavLink } from 'react-router-dom'
import { ImHome3 } from "react-icons/im"
import { FaUserGroup } from 'react-icons/fa6'
import { FaBriefcase, FaCommentDots } from 'react-icons/fa'
import { IoMdNotifications, IoMdArrowDropdown } from 'react-icons/io'
import { PiDotsNineBold } from 'react-icons/pi'

const Header = () => {
  return (
    <div>
        <header>
            <div>
             <img src="" alt="" />
             <input type="text" placeholder='search' />
            </div>
            <nav>
                <NavLink><ImHome3 /> Home</NavLink>
                <NavLink><FaUserGroup /> My Network</NavLink>
                <NavLink><FaBriefcase/> Jobs</NavLink>
                <NavLink><FaCommentDots />Messaging</NavLink>
                <NavLink><IoMdNotifications />Notifications</NavLink>
                <div>
                    <img src="https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
                    <NavLink>Me <IoMdArrowDropdown /></NavLink>
                </div>
                <div>
                    <PiDotsNineBold />
                    <NavLink>Work <IoMdArrowDropdown /></NavLink>
                </div>
            </nav>
        </header>
    </div>
  )
}

export default Header