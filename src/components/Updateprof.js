import React from 'react'

function updateProf() {
  return (
    <div>
    <label htmlFor="my-modal" className="btn btn-primary">Update</label>

        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my-modal" className="modal-toggle" />
        <div className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg flex justify-center">Update account</h3>
                <hr></hr>
                <p className="py-4"><div className="alert alert-info shadow-lg">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                        <span>If you update your profile it will change your information</span>
                                    </div>
                                    </div></p>
                <div  className="form-control w-full max-w-xs">
                    <div>
                        <div>
                        {/*Profilepic*/}
                        <label className="label">
                                <span className="label-text">What is your new Profile?</span>
                                <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
                        </label>
                    </div>
                        {/*Name*/}
                    <label className="label">
                            <span className="label-text">What is your new name?</span>
                           
                        </label>
                        <input type="text" placeholder="Xiao Bao Mao" className="input input-bordered w-full max-w-xs" maxLength={25} />
                    </div>
                       {/*Address*/}
                    <div>
                    <label className="label">
                            <span className="label-text">What is your new Address?</span>
                           
                        </label>
                        <input type="text" placeholder="Address" className="input input-bordered w-full max-w-xs" />
                    </div>
                           {/*Email*/}
                    <div>
                    <label className="label">
                            <span className="label-text">What is your new Email?</span>
                           
                        </label>
                        <input type="text" placeholder="sample@email.com" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div>
                    <label className="label">
                            <span className="label-text">Please confirm password</span>
                           
                        </label>
                        <input type="Password" placeholder="password" className="input input-bordered w-full max-w-xs" />
                    </div>
                    
                </div>
                <hr className='mt-2.5'></hr>
                <div className="modal-action">
                <label htmlFor="my-modal" className="btn btn-success">Update</label>
                <label htmlFor="my-modal" className="btn btn-error">Exit</label>
             </div>
            </div>
        </div>
    </div>
  )
}

export default updateProf