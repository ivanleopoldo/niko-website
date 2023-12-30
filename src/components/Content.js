import React, { useState, useEffect } from "react";
import { Modal, Card } from "../components";
import { Firebase } from "../config";
import { onSnapshot } from "firebase/firestore";
import { Link } from "react-router-dom";

function Content() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState([]);

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  useEffect(() => {
    onSnapshot(Firebase.fetchAllFreelancerData(), (snapshot) => {
      setData(snapshot.docs.map((doc) => doc.data()));
    });
  }, [data]);

  return (
    <div className="tableContent">
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label></label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Province</th>
              <th>City</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {data.map(({ basicInfo, freelanceInfo, locationInfo }, index) => {
              return (
                <tr key={index} name={basicInfo.uid}>
                  <th>
                    <label></label>
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-circle w-12 h-12">
                          <img
                            src={basicInfo.profImage}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{basicInfo.displayName}</div>
                        <div className="text-sm opacity-50">
                          {basicInfo.bio}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="text-center">
                    {/* Job */}
                    <span className="badge badge-ghost badge-sm mt-auto">
                      {freelanceInfo.specialization}
                    </span>
                  </td>
                  <td className="text-center">
                    <div>{locationInfo.provName}</div>
                  </td>
                  <td className="text-center">
                    <div>{locationInfo.city}</div>
                  </td>
                  <td className="text-center">
                    <Link
                      to={`/message/${basicInfo.uid}`}
                      className="bg-green-400 py-1 px-4 rounded-lg text-black font-bold"
                    >
                      Hire
                    </Link>
                  </td>
                </tr>
              );
            })}
            {/* row 2 */}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
}

export default Content;
