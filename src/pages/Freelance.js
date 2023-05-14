import React from 'react'
import { Freelancer_Rqt, Navbar,Footer,Pagination } from '../components'

export function Freelance() {
  return (
    <div>
      <div>
        <Navbar/>
        <div>
        <div className="flex flex justify-center items-center mt-3">
        <Freelancer_Rqt/>
      </div>
        <div className='flex flex justify-center items-center mt-3'>
        <Pagination/>
      </div>

        <div className="fixed bottom-0 w-full">
            <Footer />
          </div>
      </div>
    </div>
   </div>
  )
}

export default Freelance