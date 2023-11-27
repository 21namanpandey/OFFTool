import React from 'react'
import Todo from './Todo'
import AddTodo from './AddTodo'
import todo2 from '../../../assets/todo2.png'

const TodoBlock = () => {
return (
    <div className=' bg-richblack-900 '>
        <div className="flex flex-col relative mx-auto   w-11/12 max-w-maxContent  justify-between gap-8  text-center text-white ">

            <div className=' flex  '>
                <h1 className=' bg-gradient-to-b from-[#df2121] via-[#fa3512] to-[#ca5405] text-transparent bg-clip-text text-6xl font-semibold lg:w-[70%] ml-[175px] mt-2  '>TODO</h1>
                <img src={todo2} alt="" className=' w-[100px] h-[80px] ml-[-345px] '/>
            </div>
            <AddTodo/>
            <Todo/>

        </div>
    </div>
)
}

export default TodoBlock