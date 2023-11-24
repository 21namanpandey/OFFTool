import React from 'react'
import Todo from '../components/functions/Todo/Todo'
import AddTodo from '../components/functions/Todo/AddTodo'


const Dashboard = () => {
    return (
        <div className='bg-richblack-900'>

            <div className="flex flex-col relative mx-auto  w-11/12 max-w-maxContent  justify-between gap-10  text-center text-white ">

                <div>
                    <h1 className=' bg-gradient-to-b from-[#df2121] via-[#fa3512] to-[#ca5405] text-transparent bg-clip-text text-6xl font-semibold lg:w-[70%] ml-[200px] mt-2  '>TODO</h1>
                </div>

                <div>
                    <AddTodo/>
                    <Todo/>
                </div>

            </div>

        </div>
    )
}

export default Dashboard