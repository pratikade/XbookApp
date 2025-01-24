// file is not Routed anywere, after routing successfully plese remove this comment.


// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from './navbar'
import Footer from './Footer'


import { useState } from 'react';

function UploadFile() {

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleUpload = () => {
        console.log(selectedFile);
    };



    return (
        <>
            <Navbar />

            <div>
                <div className="min-h-screen container md:px-20 px-4 space-y-5 pt-52">
                    <h2 className="text-2xl font-bold mb-6 text-pink-800 text-center">Uplode the file, It`s good to helping others</h2>
                    <form className='space-y-5'>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder='Name Your Book '
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="text" className="block text-sm font-medium text-gray-700">Discription</label>
                            <input
                                type="text"
                                id="text"
                                name="text"
                                placeholder='what kind of book it is ?'
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                                required
                            />
                        </div>

                        <select className='mt-1 block w-full p-2 border border-gray-300 rounded-md transition duration-200 ' required>
                            <option value="Enfineering">Select</option>
                            <option value="Enfineering">Engineering</option>
                            <option value="Medical">Medical</option>
                            <option value="BSc">BSc</option>
                            <option value="Finance">Finance</option>
                        </select>

                        


                        <div className="max-w-md mx-auto text-center space-y-5">
                            <input
                                type="file"
                                onChange={handleFileChange}
                                className="border border-gray-300 p-2 w-full"
                                required
                            />
                            <button
                                onClick={handleUpload}
                                className="mt-4 bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Upload
                            </button>
                            {selectedFile && (
                                <div className="mt-4">
                                    <p className="font-semibold">Selected File:</p>
                                    <p>{selectedFile.name}</p>
                                </div>
                            )}
                        </div>




                        {/* <div>
                        You can contact us via <a href='www.linkedin.com/in/pratik-ade-45014825b'>Linkdin</a> of <a>Facebook</a> or <a>Instagram</a>
                    </div> */}
                    </form>
                    <p className='mt-24'>Note : Do not share anything wierd or illigal, if anything wrong shared from your ID then only you and you will be responsible for the further inquery. the website only gives you a platform to help each other in study</p>
            
                </div>
                </div>

            <Footer />
        </>
    )
}

export default UploadFile
