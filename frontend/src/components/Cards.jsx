/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'

function Cards({ item }) {
    return (
        <>
            <div className='mt-5 ml-5'>
                <div className="card bg-base-100 w-80 h-auto shadow-xl hover:scale-105 duration-200">
                    <figure>
                        <img
                            src={item.image} alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {item.title}
                            
                        </h2>
                        <p>{item.category}</p>
                        <div className="card-actions justify-between">
                            <div className="badge badge-outline p-3 hover:bg-pink-500">Read</div>
                            <div className="badge badge-outline p-3 hover:bg-pink-500">downlode</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards
