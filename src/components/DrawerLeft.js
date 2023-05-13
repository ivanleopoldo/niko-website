import React from 'react';
import { Link } from 'react-router-dom';

function DrawerLeft() {
  return (
    <div className="drawer drawer-mobile">
    <div className="drawer-side">
      <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
      <ul className="menu p-4 w-80 bg-base-100 text-base-content">
        <li>
          <Link to={'/home'}>Home</Link>
        </li>
        <li>
          <Link to={'/map'}>map</Link>
        </li>
      </ul>
    </div>
  </div>
  )
}

export default DrawerLeft;