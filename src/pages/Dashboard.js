import React from 'react'
import Todo from '../components/functions/Todo/Todo'
import AddTodo from '../components/functions/Todo/AddTodo'
import { Link } from 'react-router-dom'
import todo from '../assets/todo4.png'
import scheduler from '../assets/scheduler.png'
import expense from '../assets/expense.png'


const Dashboard = () => {
    return (
        <div className='bg-richblack-900'>

            <div className="flex  relative mx-auto  w-11/12  mt-5 gap-10  text-white ">

                

                <div className=' flex flex-col  '>
                    {/* <AddTodo/> */}
                    {/* <Todo/> */}
                    <Link to={"/dashboard/todo"}>
                        <img src={todo} alt="" className='w-[100px] h-[100px]'/>
                        <h1 className=' text-orange-700   ml-1  text-2xl font-semibold   mt-2  '>TODO</h1>
                    </Link>
                </div>

                <div className=' text-center'>
                    <Link to={"/dashboard/expense"}>
                        <img src={expense} alt="" className=' w-[100px]  h-[100px] ' />
                        <h1 className=' text-orange-600  text-2xl  ml-0 font-semibold w-[100px] mt-2  '>Expense Tracker</h1>
                    </Link>
                </div>

                // <div className=' '>
                //     <Link to={"/dashboard/scheduler"}>
                //         <img src={scheduler} alt="" className=' w-[100px]  h-[100px] ' />
                //         <h1 className=' text-orange-600 text-2xl ml-0 font-semibold   mt-2  '>Scheduler</h1>
                //     </Link>
                // </div>

                

            </div>

        </div>
    )
}

export default Dashboard
