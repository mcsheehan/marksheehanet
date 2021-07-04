import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const
    LogoutButton = () => {
    const {isAuthenticated, logout } = useAuth0();

    return (
        isAuthenticated &&
        <button className={"button centre"}  onClick={() => logout({ returnTo: window.location.origin })}>
    Log Out
    </button>
);
};

export default LogoutButton;