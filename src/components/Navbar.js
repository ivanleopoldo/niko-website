import { Link } from "react-router-dom";
import { Profile, ProfileLance } from "../pages";
import { auth } from "../config";
import { UserAuth } from "../config/context";

function Navbar() {
    const { logout } = UserAuth();

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
                {/* <div class="flex-1">
          <input type="text" placeholder="Search" class="input-bordered input w-full max-w-xs center" />
        </div> */}
                <div>
                    <Link
                        class="btn btn-ghost normal-case text-xl"
                        to={"/home"}
                    >
                        Home
                    </Link>
                </div>
                <div class="flex-2">
                    <a class="btn btn-ghost normal-case text-xl" href="/Jobs">
                        Jobs
                    </a>
                </div>
                <div class="dropdown dropdown-end">
                    <label
                        tabindex="0"
                        class="btn btn-ghost normal-case text-xl mr-8"
                    >
                        <Link>Notifications</Link>
                        <div class="w-10 rounded-full"></div>
                    </label>
                    <ul
                        tabindex="0"
                        class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-42"
                    >
                        <li>
                            <Link to={"/Message"}>Messages</Link>
                        </li>
                        <li>
                            <Link to={"/Calendar"}>Calendar</Link>
                        </li>
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
