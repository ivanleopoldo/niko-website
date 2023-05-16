import React, { useState, useEffect } from 'react';
import { MessageModal, Fcard} from '.';
import { Firebase, db, auth } from '../config';

export function Freelancer_Rqt() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState([]);

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  useEffect(()=>{
  }, []);

  return (
    <div className='tableContent'>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                </label>
              </th>
              <th>Name</th>
              <th>Job Specific </th>
              <th>Problem Description</th>
              <th>Message</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            { data.map(({full_name, bio, specialization, tags}) => {
              return (
                <tr>
                  <th>
                    <label>
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={require("../images/her78.PNG")} alt="Avatar Tailwind CSS Component" />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{ specialization }</div>
                          <div className="text-sm opacity-50">{ bio }</div>
                          <div className="text-sm opacity-50" placeholder='Year started: '>{ specialization }</div>
                        </div>
                    </div>
                  </td>
                  <td className="text-center">
                      {/* Job */}
                    <span className="badge badge-ghost badge-sm mt-auto">{ specialization }</span>
                  </td>
                  <td>Tesda Certified</td>
                  <th>
                    <button className="btn btn-outline btn-success" onClick={handleModalOpen}>
                     Message
                    </button>
                  </th>
                </tr>
              );
            }) }
          {/* row 2 */}
          </tbody>
          {/* foot */}
        </table>
      </div>
      <MessageModal isOpen={isModalOpen} onClose={handleModalClose}>
        <Fcard 
          image={require('../images/her78.PNG')} 
          name='what the dog doin?'
          bio='i woke up in a new bugatti'
          date='01/15/1748'
          tags={['Electrician', '3 Years Experience']}
        />
      </MessageModal>
    </div>
  );
}

export default Freelancer_Rqt