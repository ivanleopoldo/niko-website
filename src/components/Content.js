import React, { useState, useEffect } from 'react';
import { Modal, Card } from '../components';
import { Firebase } from '../config';
import { onSnapshot } from 'firebase/firestore';

function Content() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState([]);

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  useEffect(()=>{
    onSnapshot(Firebase.fetchAllData('professionals'), snapshot => {
      setData(snapshot.docs.map(doc => doc.data()));
    })
  }, [data]);

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
              <th>Job</th>
              <th>Certification</th>
              <th>Rating</th>
              <th>View</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            { data.map(({full_name, specialization, bio, tags}, index) => {
              return (
                <tr key={index}>
                  <th>
                    <label>
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={require("../images/her78.png")} alt="Avatar Tailwind CSS Component" />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{ full_name }</div>
                          <div className="text-sm opacity-50">{ bio }</div>
                          <div className="text-sm opacity-50" placeholder='Year started: '>{ tags[0] }</div>
                          
                        </div>
                    </div>
                  </td>
                  <td className="text-center">
                      {/* Job */}
                    <span className="badge badge-ghost badge-sm mt-auto">{ specialization }</span>
                  </td>
                  <td>Tesda Certified</td>
                  <td>
                  <div className="rating rating-md">
                      <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                      <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                      <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                      <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                      <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                </div>
                  </td>
                  <th>
                    <button className="btn btn-outline btn-info" onClick={handleModalOpen}>
                      Details
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
      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <Card 
          image={require('../images/her78.png')} 
          name='what the dog doin?'
          bio='i woke up in a new bugatti'
          date='01/15/1748'
          tags={['Electrician', '3 Years Experience']}
        />
      </Modal>
    </div>
  );
}

export default Content;