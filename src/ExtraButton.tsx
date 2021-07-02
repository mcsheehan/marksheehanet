import {useAuth0} from "@auth0/auth0-react";
import React from "react";
import LoginButton from "./Login";

const ExtraButton = () => {
    const {isAuthenticated, loginWithRedirect, getAccessTokenWithPopup,getAccessTokenSilently} = useAuth0();

    return isAuthenticated && <button onClick={() =>
    {const token = getAccessTokenSilently().then(token => {console.log(token)})}
    }>Extra In</button>;
};

export default ExtraButton;