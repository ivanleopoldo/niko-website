import React from 'react'
import { FreelancerRqt, Navbar,Footer,Pagination } from '../components'

export function Freelance() {
  return (
    <div>
      <div className='background-cyan'>
        <Navbar/>
        <div>
          <hr></hr>
        <div className="flex flex justify-center items-center mt-3">
        <FreelancerRqt/>
      </div>
        <div className='flex flex justify-center items-center mt-3'>
        <Pagination/>
      </div>
          
        <div >
            <Footer />
          </div>
      </div>
    </div>
   </div>
  )
}

export default Freelance