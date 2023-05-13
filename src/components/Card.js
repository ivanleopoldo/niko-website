import React from 'react'

function Card({image, name, bio, date, tags}) {
  return (
    <div className='card' >
      <div class="card w-96 bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img src={image} alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">
            {name}
          </h2>
          <p>
            {bio}
          </p>
          <div class="card-actions">
            <button class="badge badge-outline">
              {tags[0]}
            </button>
            <button class="badge badge-outline">
              {tags[1]}
            </button>
            <a>Year started: {date}</a> 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
           </svg>
            {/* <div className="rating-md ml-46 mt-4"><a>Ratings: </a>
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
          </div> */}
            <button class="btn btn-primary ml-24 mt-10">Hire Now</button>
          </div>
        </div>
      </div>
    </div>  
  );
}

export default Card;