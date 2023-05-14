import React from 'react'
import Messages from './Messages';

function Fcard({image, name, bio, date, tags}) {
  return (
    <div className='card' >
        <p>User Pr</p>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image} alt="User Image" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">
            {name}
          </h2>
          <p>
            {bio}
          </p>
          <div className="card-actions">
            <button className="badge badge-outline">
              {tags[0]}
            </button>
            <button className="badge badge-outline">
              {tags[1]}
            </button>
            <a>Year started: {date}</a> 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
           </svg>
           <div class="flex justify-center">
                <button class="btn btn-success">Accept</button>  
                <button class="btn btn-error ml-2.5">Decline</button>
            </div>
          </div>
        </div>
      </div>
    </div>  
  );
}

export default Fcard;
