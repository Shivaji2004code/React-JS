import React, { useState } from 'react';
import useUser from '../context/UserContext';

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const {setUser} = useUser();

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser(username);

    }
    return (
        <div>
            <input type='text' placeholder='username' value={username}  onChange={(e) => setUsername(e.target.value)}/>
            <input type='text' placeholder='password' value={password}  onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default Login;
