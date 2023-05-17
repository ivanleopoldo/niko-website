import React from 'react';
import Messages from './Messages';
import MessageProp from './MessageProp';

export function MessageCard() {
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
            <a>
                <div className="flex items- space-x-3">
                <div className="avatar offline">
                    <div className="w-16 rounded-full">
                    <img src={require('../images/Top KIM.jpg')} alt="User Profile" />
                    </div>
                </div>
                <div>
                    <div className="font-bold">Kim Jung Un </div>
                    <div className="text-sm opacity-50 badge">Talamban</div>
                    <div className="text-sm opacity-50 badge space-y-7">Electrician</div>
                </div>
                <div>
                    <p>last online:<div className='badge space-x-3'>30mins</div></p>
                </div>
                </div>
            </a>
            </div>
            </ul>
          </td>
        </tr>
        {/* start row 2 */}
        <tr>
          <td>
          <ul>
            <a>
                <div className="flex items space-x-3">
                <div className="avatar online">
                    <div className="w-16 rounded-full">
                    <img src={require('../images/her78.png')} alt="Profile" />
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
        {/* start row 3 */}
        
      </tbody>
      {/* foot */}
      <tfoot>
        <tr>
        </tr>
      </tfoot>
    </table>
  </div>
  );
}

export default MessageCard;