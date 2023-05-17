import { Navigate } from "react-router-dom";
import { UserAuth } from "./config/context";

export const PrivateRoute = ({ children }) => {
    const { currentUser } = UserAuth();

    if (!currentUser) {
        return <Navigate to="/" replace={true} />;
    }
    return children;
};
