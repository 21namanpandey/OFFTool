import React from 'react'
import expense2 from '../../../assets/expense2.png'

export const Header = () => {
    return (

        <div className="flex  relative mx-auto   w-11/12 max-w-maxContent  mt-5  text-center text-white ">
            <h2 className=' bg-gradient-to-b from-[#df2121] via-[#fa3512] to-[#ca5405] text-transparent bg-clip-text text-6xl font-semibold lg:w-[70%] ml-[160px] mt-2  '>
                Expense Tracker
            </h2>
            <img src={expense2} alt="" className='w-[100px] h-[80px] ml-[-200px] ' />
        </div>    
    )
}

