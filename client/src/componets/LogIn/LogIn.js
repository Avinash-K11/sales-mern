import { useState, useContext } from 'react';
import { redirect } from 'react-router-dom';
import { UserContext } from '../../App.js';

import './login.css';

export default function LogIn() {

    const { disatch } = useContext(UserContext);

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const loginUser = async (e) => {
        const res = await fetch('/api/login',{
            method:'POST',
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                email, password
            })
        });

        const data = res.json();

        if(data.status === 422 || !data) {
            window.alert("Invalid Credentials");
        } else {
            disatch({ type: "USER", payload: true });     
            window.alert("Login Successful");

            redirect('/');
        }
    }

    return (
        <section>
            <div className='signup'>
                <h1 className='form-title'>Log In</h1>
                <div className="signup-content">
                    <form method='POST'>
                        <label htmlFor="email">Email</label>
                        <input type='email' name='email' className='content' placeholder='Your Email' required value={email}  
                        onChange={(e) => setEmail(e.target.value) }/>

                        <label htmlFor="password">Password</label>
                        <input type='password' name='password' className='content' placeholder='Your Password'  value={password} 
                        onChange={(e) => setPassword(e.target.value) } />

                        <button type="submit" className='submit-btn' onClick={loginUser} >Log In</button>

                    </form>
                </div>
            </div>
        </section>
    );
};