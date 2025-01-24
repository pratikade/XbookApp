// eslint-disable-next-line no-unused-vars
import React from 'react';

import Navbar from '../components/navbar';
import Footer from "../components/Footer";
import Course from '../components/Course';
import CoursesList from '../../public/CoursesList.json'
function Courses() {
  console.log(CoursesList);
  return (
    <>
      <Navbar />
      <div className='min-h-screen'>
        <Course />
      </div>
      <Footer />
    </>
  );
}

export default Courses;
