// eslint-disable-next-line no-unused-vars
import React from 'react'
import baner from '../../public/baner.png'
function Banner() {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row'>
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32">
            <div className='space-y-12'>
            <h1 className="text-5xl font-bold">Hello, Welcome here to learn something <span className='text-pink-800'>new everyday!!!</span></h1>
            <p>
                Achieving top grades in engineering requires dedication, effective 
                study habits, and the right resources. Customized engineering notes tailored
                to your curriculum can be a powerful tool in your academic arsenal. These notes
                are specifically designed to align with your course material, focusing on key 
                concepts, formulas, and problem-solving techniques relevant to your exams. By 
                utilizing these personalized notes, you can streamline your study sessions,
                ensuring you cover all necessary topics without feeling overwhelmed. 
                Additionally, these notes can include practice problems, summaries, and visual
                aids like diagrams and charts to enhance your understanding. With the right
                preparation and resources, you can confidently approach your studies and aim 
                for the top of your class.
            </p>
            <div className='card-actions justify-between'>
                <div className='btn'>
                    <a href='/ShareNotes'>Share Notes</a>
                </div>
                <div className='btn'>
                    Read Notes
                </div>
            </div>
            </div>
        </div>
        <div className="order-1 w-full md:w-1/2">
            <img src={baner} className='w-96 h-96 mt-16 md:mt-40 md:ml-40'></img>

        </div>
    </div>
    </>
  )
}

export default Banner
