import React from 'react'
import { Updateprof } from '.'

export function Uprofile() {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={require('../../src/images/her.png')} alt="UserProfile" /></figure>
        <div className="card-body">
            <h2 className="card-title">
            Xio Bao Mao
            </h2>
            <label className='label'>
                <span className='label-text'>Address: </span>
                <p>Neywork,Manhathan</p>
            </label>
            <div className="card-actions justify-start">
                <div class>
                <label>
                    <h1>Date joined</h1>
                    <div className="badge badge-outline">9/11/2001</div>
                </label>
            </div>
            </div>
            <hr></hr>
            <div className='flex justify-center'>
                <Updateprof/>
            </div>
            
        </div>
        
    </div>
  )
}

export default Uprofile