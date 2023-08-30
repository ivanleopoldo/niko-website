import React from 'react'
import Certificate from './Certificate';

export function MessageCard2() {
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
                <div className="avatar online">
                    <div className="w-16 rounded-full">
                    <img src={require('../../src/images/her.png')} alt="User Profile" />
                    </div>
                </div>
                <div>
                    <div className="font-bold">Xiao Bao Mao </div>
                    <div className="text-sm opacity-50 badge">Talamban</div>
                    <div className="text-sm opacity-50 badge space-y-7">Electrician</div>
                </div>
                <div>
                    <p>last online:<div className='badge badge-success space-x-3'>Online</div></p>
                </div>
                </div>
                <div className='mt-16 ml-36'>
                    <Certificate/>
                </div>
            </a>
            </div>
            </ul>
          </td>
        </tr>
        {/* start row 2 */}
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
export default MessageCard2