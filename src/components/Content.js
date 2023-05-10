import React from 'react'

export function content() {
  return<div className='cont' >
          <div class="card w-96 bg-base-100 shadow-xl">
    <figure class="px-10 pt-10">
      <img src={require('../images/her78.PNG')} alt="Shoes" class="rounded-xl" />
    </figure>
    <div class="card-body items-center text-center">
      <h2 class="card-title">Drugs</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div class="card-actions">
      <button class="badge badge-outline">Electrician</button>
      <button class="badge badge-outline">3 years job experience</button>
      <div className="rating-md ml-46 mt-4"><a>Ratings: </a>
        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
    </div>
        <button class="btn btn-primary ml-24 mt-10">Hire Now</button>
      </div>
      
    </div>
  </div>
  
    </div>  
}

export default content