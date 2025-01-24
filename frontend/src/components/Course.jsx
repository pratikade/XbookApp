// eslint-disable-next-line no-unused-vars
import React from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import CoursesList from '../../public/CoursesList.json'
import CourseListSlider from './CourseListSlider'

function Course() {
  const filterData = CoursesList.filter((data) => data)
  console.log(filterData)


  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='items-center justify-center text-center'>
          <h1 className='text-2xl md:text-4xl pt-28'> We`re delighted to have you <span className='text-pink-500'>here! :)</span> </h1>
        </div>

        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
          
            {filterData.map((item)=>(
              <CourseListSlider item={item} key={item.id} />

            ))}
        </div>

      </div>
    </>
  )
}

export default Course
