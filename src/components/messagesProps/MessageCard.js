import React, { useState } from 'react';
import MessageProp from './MessageProp';

function MessageCard() {
  const [isMessageCardVisible, setMessageCardVisibility] = useState(false);

  const toggleMessagepop = (e) => {
    e.preventDefault();
    setMessageCardVisibility(!isMessageCardVisible);
  };

  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-1/4">
        <thead>
          <tr>
            <th>Messages</th>
          </tr>
        </thead>
        <tbody>
          {/* Start Row 1 */}
          <div>
          <button onClick={toggleMessagepop}>
          <tr className='hover' >
            <td>
              <ul>
                <a>
                  <div className="flex items space-x-3">
                    <div className="avatar online">
                      <div className="w-16 rounded-full">
                        <img src={require('../../images/her.png')} alt="Profile" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Xiao Bao Mao</div>
                      <div className="text-sm opacity-50 badge">Lapu-Lapus</div>
                      <div className="text-sm opacity-50 badge space-y-7">Plumber</div>
                    </div>
                    <div>
                      <p>last online:<div className='badge badge-success'>online</div></p>
                    </div>
                  </div>
                </a>
              </ul>
            </td>
          </tr>  
          </button>
          </div>
          <br></br>
          {/* Start Row 3 */}
        </tbody>
        {/* Foot */}
        <tfoot>
          <tr>
          </tr>
        </tfoot>
      </table>
        {isMessageCardVisible && <MessageProp />}
    </div>
  );
}

export default MessageCard;