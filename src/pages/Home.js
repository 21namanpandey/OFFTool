import React from 'react'
// import image from "../assets/offtool_old.png"
import Footer from '../components/Footer';
import OffImage from '../assets/Small-office.png'


const Home = () => {
    return (
        <div className=' bg-richblack-900 '>
            <div className="flex flex-col mt-[85px]  ml-[60px] items-center  text-white w-11/12 ">
                

                <div>
                    <p className=' text-[50px] '>MAKE YOUR WORK EASIER WITH <span className=' text-orange-500 font-bold  '>TOOLS</span> </p>
                </div>

                <div className=' mt-6 text-[25px] text-center   '> 
                    <p>Welcome to <span className=' text-rose-700 text-3xl font-bold   '>OFFTool</span> - your office's productivity sidekick. We simplify work, so you can conquer your tasks effortlessly. Meet the team, discover the features, and start your journey to an organized and efficient workspace today.</p>
                </div>

                <img src={OffImage} alt="imgae" width={558} height={504} loading='lazy' className=' mt-10 w-[900px] ' />
            </div>
            <Footer/>
        </div>
    )
}

export default Home