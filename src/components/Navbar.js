import daisyui from "daisyui"
import { IconName } from '@heroicons/react/24/outline';
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const { logout } = UserAuth();

  const handleLogout = async () => {
    try {
      await logout();
    
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <nav className='nav'>
      <div class="navbar bg-base-100">
        <div class="flex-1">
          <a style={{ fontSize: '50px' }}>TekNiko</a>
        </div>
        <div class="flex-1">
          <input type="text" placeholder="Search" class="input-bordered input w-full max-w-xs center" />
        </div>
        <div>
          <a class="btn btn-ghost normal-case text-xl" href="Home">Home</a>
        </div>
        <div class="flex-2">
          <a class="btn btn-ghost normal-case text-xl">Jobs</a>
        </div>
        <div class="dropdown dropdown-end">
          <label tabindex="0" class="btn btn-ghost normal-case text-xl mr-8">
            <a>Notifications</a>
            <div class="w-10 rounded-full">
            </div>
          </label>
          <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-42">
            <li><a>Messages</a></li>
            <li><a>Calendar</a></li>
          </ul>
        </div>
        <div class="flex-none gap-2">
          <div class="form-control">
          </div>
          <div class="dropdown dropdown-end">
            <label tabindex="0" class="btn btn-ghost btn-circle avatar avatar online px-30">
              <div class="w-10 rounded-full">
                <img src={require('../images/her78.PNG')} alt="User picture" />
              </div>
            </label>
            <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
              <span class="ml-10">Xio bao mao</span>
              <li>
                <a class="justify-between">
                  Profile
                  <span class="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a onClick={handleLogout}>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;