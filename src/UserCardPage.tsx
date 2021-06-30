import React from "react";
import {useAuth0} from "@auth0/auth0-react";

import './css/UserCard.css'
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faCoffee } from '@fortawesome/fontawesome-free-solid'
import {render} from "react-dom";

var FontAwesome = require('react-fontawesome');


const FONT_FAMILY_ROOT = '"Titillium Web", sans-serif';
const FONT_FAMILY_CODE = '"Source Code Pro", monospace';
const IMAGE_URL = '/assets/images/wallpaper-large.jpg';

let themeSettings = {};


const Profile = () => {
    const {user, isAuthenticated, isLoading} = useAuth0();

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    return (
        isAuthenticated && (
            <div className={"card"}>
                <img src={user.picture} alt={user.name}/>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                <FontAwesome
                    className='super-crazy-colors'
                    name='rocket'
                    size='2x'
                    spin
                    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                />
            </div>
        )
    );
};

export default Profile;