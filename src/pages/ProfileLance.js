import React from 'react'
import { Footer, Fprofile, Navbar } from '../components'

export function ProfileLance() {
  return (
    <div>
        <div>
          <Navbar/>
        </div>
        <div className='flex justify-center mr-32'>
           <Fprofile/>
        </div>
         
        <div>
         <Footer/>
      </div>
    </div>
    
  )
}

export default ProfileLance