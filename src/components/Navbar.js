import React from 'react'
import { BsGithub, BsLinkedin } from "react-icons/bs";
const Navbar = () => {
  return (
    
          <div className='container-fluid'>
      <div className="row justify-content-between mt-2 ">
        <div className="col-md-4">
          <h2 className='text-primary ms-4'>LetsGrowMore </h2>
        </div>
        <div className="col-md-2">
          {/* LinkedIn Link  */}
          <a href="https://www.linkedin.com/in/ajay-kumar-6a041b1ba/" target="_blank" rel="noreferrer">< BsLinkedin className=" text-primary me-3 h3" /> </a>

          {/* Github Link  */}
          <a href="https://github.com/ajaykumar2pp/LGMVIP-WEB-TASK-3" target="_blank" rel="noreferrer">< BsGithub className=" text-primary h3" /> </a>

        </div>
      </div>
      <div className="row justify-content-center mt-3">
        <div className="col-md-8">
            <h3 className='bg-info text-center py-2'>Student Enrollment Form</h3>
        </div>
       </div>
    </div>
       


  )
}

export default Navbar