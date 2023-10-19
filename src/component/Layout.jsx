import React from 'react'
import Header from '../component/Header'
import RightBar from '../component/RightBar'
import LeftBar from '../component/LeftBar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='main-content'>
        <Header />
        <div className='side-wrapper'>
            <RightBar />
            <Outlet />
            <LeftBar />
        </div>
    </div>
  )
}

export default Layout