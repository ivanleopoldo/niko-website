import React from 'react'

function DrawerLeft() {
  return (
    <div className="drawer drawer-mobile">
    <div className="drawer-side">
      <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
      <ul className="menu p-4 w-80 bg-base-100 text-base-content">
        <li>
          <a href='Home'>Home</a>
        </li>
        <li>
          <a>Maps</a>
        </li>
      </ul>
    </div>
  </div>
  )
}

export default DrawerLeft;