import React from "react";
import { Footer, Navbar, Uprofile } from "../components";

function Profile() {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className="flex justify-center mr-32">
                <Uprofile />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default Profile;
