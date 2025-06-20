import React from 'react';
import useUser from '../context/UserContext';

const Profile = () => {
    const {user} = useUser();
    if(user) {
        return (
            <div>
                WELCOME {user.toUpperCase()}
            </div>
        );
    }
    return <div>please Login</div>
}

export default Profile;
