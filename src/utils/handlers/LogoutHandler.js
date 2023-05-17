import { UserAuth } from "../../config/context";

async function LogoutHandler() {
    const { logout } = UserAuth();

    try {
        await logout();
    } catch (err) {
        console.log(err);
    }
}

export default LogoutHandler;
