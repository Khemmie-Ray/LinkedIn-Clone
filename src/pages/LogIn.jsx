import React from 'react'
import loginBg from "../assets/login-hero.svg"
import googleIcon from "../assets/google.svg"
import linkedinicon from "../assets/linkedin1.svg"
import { NavLink } from 'react-router-dom'
// import Header from '../component/Header'

const LogIn = () => {
  return (
    <div className='login-container'>
        <header>
            <img src={linkedinicon} alt="" className='logo'/>
            <nav>
                <NavLink>Join now</NavLink>
                <NavLink>Sign In</NavLink>
            </nav>
        </header>
        <main className='content'>
        <section className='intro'>
        <h1>Welcome to your professional community</h1>
        <button><img src={googleIcon} alt="" />Sign In with Google</button>
        </section>
        <section className='heroBg'>
           <img src={loginBg} alt="" />
        </section>
        </main>

        {/* <Header /> */}
    </div>
  )
}

export default LogIn