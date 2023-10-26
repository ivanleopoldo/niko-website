import { Link } from "react-router-dom";
import { Profile, ProfileLance } from "../pages";
import { auth } from "../config";
import { UserAuth } from "../config/context";
import NavpropTable from "./NavpropTable";
import MessageCard from "./messagesProps/MessageCard";
import React, {useState} from "react"   ;
function Navbar() {
    const { logout } = UserAuth();

    const [isMessageCardVisible, setMessageCardVisibility] = useState(false);

    const toggleMessageCard = () => {
        setMessageCardVisibility(!isMessageCardVisible);
    };

    const handleLogout = async () => {
        try {
            await logout();
        } catch (err) {
            console.log(err);
        }
    
        
    };

    return (
        <nav className="nav">
            <div class="navbar bg-base-100">
                <div class="flex-1">
                    <Link to={"/home"} style={{ fontSize: "50px" }}>
                        TekNiko
                    </Link>
                </div>
                <div>{/* Home */}
                    <Link
                        class="btn btn-ghost normal-case text-xl"
                        to={"/home"}
                    >
                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                        <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                        </svg>

                    </Link>
                    
                </div>
                <div class="flex-2">
                    <a class="btn btn-ghost normal-case text-xl" href="/Jobs">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                        <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z" />
                        </svg>
                    </a>
                </div>
                {/* Notification */}
                <div class="dropdown dropdown-end mr-[25px]">
                <div className="dropdown dropdown-end">
                <div style={{ position: 'relative', alignItems: 'flex-end' }}>
                        <label tabIndex="0" className="btn btn-ghost">
                        <span className="badge badge-xs badge-error indicator-item"></span>
                         
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path d="M5.85 3.5a.75.75 0 00-1.117-1 9.719 9.719 0 00-2.348 4.876.75.75 0 001.479.248A8.219 8.219 0 015.85 3.5zM19.267 2.5a.75.75 0 10-1.118 1 8.22 8.22 0 011.987 4.124.75.75 0 001.48-.248A9.72 9.72 0 0019.266 2.5z" />
                                <path fillRule="evenodd" d="M12 2.25A6.75 6.75 0 005.25 9v.75a8.217 8.217 0 01-2.119 5.52.75.75 0 00.298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 107.48 0 24.583 24.583 0 004.83-1.244.75.75 0 00.298-1.205 8.217 8.217 0 01-2.118-5.52V9A6.75 6.75 0 0012 2.25zM9.75 18c0-.034 0-.067.002-.1a25.05 25.05 0 004.496 0l.002.1a2.25 2.25 0 11-4.5 0z" clipRule="evenodd" />
                                </svg>
                          
                        </label>
                        </div> 
                     </div>
                    <ul
                        tabindex="0"
                        class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-42"
                    >   
                        {/* notification */}

                        <NavpropTable/>

                    </ul>
                </div>
                  {/* Messages */}  
            <div className="absolute right-0 top-5 mr-[53px] dropdown dropdown-end ">
                <button className="btn btn-ghost btn-circle px-30" onClick={toggleMessageCard}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z" clipRule="evenodd" />
                    </svg>
                </button>
                <ul class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-42">

                      {isMessageCardVisible && <MessageCard style={{ maxHeight: '300px', overflowY: '300px' }} />}
                </ul>
              
            </div>
                <div class="flex-none gap-2">
                    <div class="form-control"></div>
                    <div class="dropdown dropdown-end">
                        <label
                            tabindex="0"
                            class="btn btn-ghost btn-circle avatar online px-30"
                        >
                            <div class="w-10 rounded-full">
                                <img src={auth.currentUser.photoURL} alt="" />
                            </div>
                        </label>
                        <ul
                            tabindex="0"
                            class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                        >
                            <span class="ml-10">
                                {auth.currentUser.displayName}
                            </span>
                            <li>
                                <Link to={"/profile"} class="justify-between">
                                    Profile
                                    <span class="badge">New</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={"/profileLance"}
                                    class="justify-between"
                                >
                                    Freelance Profile
                                    <span class="badge">New</span>
                                </Link>
                            </li>
                            <li>{/* <a>Settings</a> */}</li>
                            <li>
                                <Link onClick={handleLogout}>Logout</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
