import React from 'react';
import { useContext } from 'react';
import UserContext from '../Context/UserContext';
import { useState } from 'react';


const Login = () => {
    const {setUser} = useContext(UserContext)

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault()
        if (username !== "" && password !== ""){
            setUser({username,password});
        }
        
    }
    return (
        <div>
            <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='username' className='m-2 border-2' />
            <input type='text' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password'  className='m-2 border-2'/>
            <button onClick={handleSubmit}>submit</button>
        </div>
    );
}

export default Login;
