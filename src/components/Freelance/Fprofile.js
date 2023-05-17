import React from 'react'
import { FupdateProf} from '../../components/Freelance/FupdateProf'

export function Fprofile() {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
    <figure><img src={require('../../images/her78.png')} alt="UserProfile" /></figure>
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
        <div classname="flex justify">
            <label classname="label">
                <span className='label-text'>Certification </span>
            </label>
            <label htmlFor="my-modal-4" className="btn btn glass">View Certificate</label>

                {/* Put this part before </body> tag */}
                <input type="checkbox" id="my-modal-4" className="modal-toggle" />
                    <label htmlFor="my-modal-4" className="modal cursor-pointer">
                    <label className="modal-box relative" htmlFor="">
                        <div>
                            <img src={require("../../images/MockCertif.png")} />
                        </div>
                    </label>
                    </label>
                 </div>
                </div>
        <hr></hr>
        <div className='flex justify-center'>
            <FupdateProf/>
        </div>
        
    </div>
    
</div>
  )
}

export default Fprofile