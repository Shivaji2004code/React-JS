import React from 'react';
import { useContext } from 'react';
import UserContext from '../Context/UserContext';

const Profile = () => {

    const {user} = useContext(UserContext);

    if(!user) {
        return <div className='m-2'>Please Login</div>

    }
    return <div className='m-2'>Welcome {user.username}</div>

}

export default Profile;
