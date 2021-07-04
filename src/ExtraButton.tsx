import {useAuth0} from "@auth0/auth0-react";
import React from "react";

const ExtraButton = () => {
    const {isAuthenticated, loginWithRedirect, getAccessTokenWithPopup,getAccessTokenSilently} = useAuth0();

    return isAuthenticated && <button className={"button centre"} onClick={() =>
    {const token = getAccessTokenWithPopup().then(token => {console.log(token)})}
    }>Get Token</button>;
};

export default ExtraButton;