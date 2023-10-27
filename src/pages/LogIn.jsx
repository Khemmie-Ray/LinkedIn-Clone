import React, { useState } from 'react'
import loginBg from "../assets/login-hero.svg"
import googleIcon from "../assets/google.svg"
import linkedinicon from "../assets/linkedin1.svg"
import { NavLink, useNavigate } from 'react-router-dom'
import { signInWithPopup } from 'firebase/auth'
import { auth, googleProvider } from '../config/firebase'

const LogIn = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null)

  const googleSignIn = async () => {
    try {
     const success = await signInWithPopup(auth, googleProvider)
      navigate('/home')
      setUser(success?.user)
      console.log('User', success?.user)
    } catch (error) {
      console.error(error)
    }
  }
// console.log(auth?.currentUser?.email)
// console.log(auth?.currentUser)
console.log('Usertwo:', user)

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
        <button onClick={googleSignIn}><img src={googleIcon} alt="" />Sign In with Google</button>
        </section>
        <section className='heroBg'>
           <img src={loginBg} alt="" />
        </section>
        </main>
    </div>
  )
}

export default LogIn