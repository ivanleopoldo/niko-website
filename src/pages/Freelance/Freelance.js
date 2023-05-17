import React from 'react'
import { Navbar,Footer,Pagination } from '../../components'
import {FreelancerRqt} from '../../components/Freelance'

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