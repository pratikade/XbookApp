// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';


function Signup() {
    return (
        <>
            <div>
                <div className="min-h-screen flex items-center justify-center">
                    <div className="p-8 rounded shadow-md w-full max-w-md">
                        <h2 className="text-2xl font-bold text-center mb-6 text-pink-500">Signup</h2>
                        <form>
                            <div className="mb-4">
                                <label className="block text-gray-700">Email</label>
                                <input type="email" placeholder="Enter your email" className="w-full p-2 border border-gray-300 rounded mt-2" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Password</label>
                                <input type="password" placeholder="Enter your password" className="w-full p-2 border border-gray-300 rounded mt-2" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Confirm Password</label>
                                <input type="password" placeholder="Confirm your password" className="w-full p-2 border border-gray-300 rounded mt-2" />
                            </div>
                            <div className="flex justify-center"> 
                                <button type="submit" className="bg-pink-500 text-white p-2 rounded mt-4 hover:bg-pink-700">Signup</button> 
                            </div>
                        </form>
                        <div className="text-center mt-4">
                            Already have an account?{" "}
                            <Link to="/" className="text-blue-500 underline">Login</Link>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}

export default Signup;
