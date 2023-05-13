import React, { useState, useEffect } from 'react';
import { Modal, Card } from '../components';
import { db } from '../config';
import { collection, onSnapshot } from 'firebase/firestore';

function Content() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState([]);

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  async function fetchData(){
    onSnapshot(collection(db, 'professionals'), res => {
      const newData = res.docs.map(doc => doc.data());
      setData(newData);
    });
  };

  useEffect(()=>{
    fetchData();
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
              <th>Job</th>
              <th>Certification</th>
              <th>View</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            { data.map(({full_name, bio, tags}) => {
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
                          <div className="font-bold">{ full_name }</div>
                          <div className="text-sm opacity-50">{ bio }</div>
                          <div className="text-sm opacity-50" placeholder='Year started: '>{ tags[0] }</div>
                        </div>
                    </div>
                  </td>
                  <td className="text-center">
                      {/* Job */}
                    <span className="badge badge-ghost badge-sm mt-auto">Electrician</span>
                  </td>
                  <td>Tesda Certified</td>
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
          image={require('../images/her78.PNG')} 
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