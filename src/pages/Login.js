import React from 'react'
import Template from '../components/Template'
import loginImg from "../assets/login.jpg"

const Login = ({ setIsLoggedIn }) => {
    return (
        <Template
            title="Sign in to your account"
            desc1="Make your task done fast."
            desc2="Login to your account for a faster checkout."
            image={loginImg}
            formtype="login"
            setIsLoggedIn={setIsLoggedIn}
        />
    )
}

export default Login