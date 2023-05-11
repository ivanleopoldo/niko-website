import React, { useState } from 'react';
import Modal from './modal';
import Cards from './cards';

function Content() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

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
                    <div className="font-bold">Xiao bao mao</div>
                    <div className="text-sm opacity-50">Mandaue,Cebucity</div>
                    <div className="text-sm opacity-50" placeholder='Year started: '>4/15/2023</div>
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
          {/* row 2 */}
          </tbody>
          {/* foot */}
        </table>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <Cards />
      </Modal>
    </div>
  );
}

export default Content;