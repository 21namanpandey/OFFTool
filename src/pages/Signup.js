import React from 'react'
import Template from '../components/Template';
import signupImg from "../assets/signup.jpg";


const Signup = ({ setIsLoggedIn }) => {
    return (

        <Template
            title="Create your account"
            desc1="Make your task done fast."
            desc2="It’s totally free and super easy."
            image={signupImg}
            formtype="signup"
            setIsLoggedIn={setIsLoggedIn}
        />
    )
}

export default Signup