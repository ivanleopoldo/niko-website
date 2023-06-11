import React from 'react'
import { CalendarProp,Footer,Navbar } from '../components'
function Calendar() {
  return (
    <div>
        <div>
            <div>
                <Navbar/>
            </div>
            <div> 
                <CalendarProp/>
            </div>
           <div>
            <Footer/>
           </div>
        </div>
    </div>
  )
}

export default Calendar