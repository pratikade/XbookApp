/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'

function CourseListSlider({ item }) {
    return (
        <>
            <div className='mt-5 pl-5'>
                <div className="card bg-base-100 w-80 shadow-xl h-96 hover:scale-105 duration-200">
                    <figure>
                        <img
                            src={item.Thumbnel} alt="course Image" className='h-52 w-fit' />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {item.courseName}
                           
                        </h2>
                        <p>{item.category}</p>
                        <div className="card-actions justify-between">
                            <div className="badge badge-outline p-3 hover:bg-pink-500">Explore</div>
                            <div className="badge badge-outline p-3 hover:bg-pink-500">Share</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CourseListSlider
