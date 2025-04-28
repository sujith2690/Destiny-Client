import React, { useState } from 'react'
import './Auth.css'
import { useNavigate } from 'react-router'
import LoginForm from '../components/LoginForm'
import SignUpForm from '../components/SignUpForm'

const Auth = () => {
    const navigate = useNavigate()
    const [auth, setAuth] = useState(true)
    const handleLogin = () => {
        console.log(auth, '------- auth')
        setAuth((prev) => !prev)
    }
    return (
        <section className='bg-black flex h-screen items-center justify-center lg:justify-end lg:px-10 bg-no-repeat bg-cover'
            style={{ backgroundImage: 'url(./River.webp)' }}
        >
            <div className="w-full max-w-md z-20 bg-white/50 bg-opacity-30 backdrop-blur-lg p-5 rounded-lg">
                <h1 className="my-6 text-5xl cursor-pointer text-center font-extrabold" onClick={() => navigate('/')}>DESTINY</h1>
                {auth ? <LoginForm handleLogin={handleLogin} />
                    : <SignUpForm handleSignUp={handleLogin} />
                }
            </div>
        </section>
    )
}

export default Auth
