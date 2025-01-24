// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg text-center">Login</h3>
                    {/* Email */}
                    <div className='mt-4 space-y-2'>
                        <span>Email</span><br/>
                        <input type='email' placeholder='Enter your Email' className='w-80 px-3 border rounded-md outline-none py-2' required/>
                    </div>
                    {/* password */}
                    <div className='mt-4 space-y-2'>
                        <span>Password</span><br/>
                        <input type='password' placeholder='Enter your password' className='w-80 px-3 border rounded-md outline-none py-2' required/>
                    </div>
                    {/* submit button */}
                    <div className='flex justify-around mt-4'>
                        <button className='bg-pink-500 text-white rounded-md py-2 px-3 hover:bg-pink-700 duration-200'>Login</button>
                        <p>Not Register?{" "} 
                            <Link to={"/Signup"} className='underline text-blue-500 cursor-pointer'>Signup</Link>{" "}
                        </p>
                    </div>
                </div>
            </dialog>
        </div>
    )
}

export default Login
