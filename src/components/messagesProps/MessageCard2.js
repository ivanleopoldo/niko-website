import React, { useEffect, useState } from "react";
import { UserAuth } from "../../config/context";
import { Firebase } from "../../config";
import { onSnapshot } from "firebase/firestore";

export function MessageCard2() {
  const auth = UserAuth();
  const [data, setData] = useState({});

  useEffect(() => {
    onSnapshot(Firebase.fetchAllFreelancerData(), (snapshot) => {
      setData(snapshot.docs.map((doc) => doc.data()));
    });
  }, [data]);

  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-1/4">
        {/* head */}
        <thead>
          <tr>
            <th>User</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <td>
              <ul>
                <div>
                  <div className="flex items- space-x-3">
                    <div className="avatar online">
                      <div className="w-16 rounded-full">
                        <img src={""} alt="User Profile" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Xiao Bao Mao </div>
                      <div className="text-sm opacity-50 badge">Talamban</div>
                      <div className="text-sm opacity-50 badge space-y-7">
                        Electrician
                      </div>
                    </div>
                    <div>
                      <p>
                        last online:
                        <div className="badge badge-success space-x-3">
                          Online
                        </div>
                      </p>
                    </div>
                  </div>
                </div>
              </ul>
            </td>
          </tr>
          {/* start row 2 */}
          {/* start row 3 */}
        </tbody>
        {/* foot */}
        <tfoot>
          <tr></tr>
        </tfoot>
      </table>
    </div>
  );
}
export default MessageCard2;
