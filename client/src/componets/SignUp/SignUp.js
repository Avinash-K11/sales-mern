import  { useState } from 'react';
import './signup.css';
import { redirect } from 'react-router-dom';

export default function SignUp() {

    const [ user, setUser ] = useState({
        name: "",
        email: "",
        password: "",
        cpassword: "",
    });

    let name, value;

    const handleInputs = (e) => {
        console.log(e);
        e.preventDefault();

        name = e.target.name;
        value = e.target.value;

        setUser({...user, [name]:value });
    }

    const PostData = async (e) => {

        const { name, email, password, cpassword } = user;


        const res = await fetch('/api/signup', {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                name, email, password, cpassword
            })
        });

        const data = await res.json();

        if(data.status === 422 || !data) {
            window.alert("Invalid Registration");
        } else {
            window.alert("User Created");

            redirect('/login');
        }
    }

    return (
        <section>
            <div className='signup'>
                <h1 className='form-title'>Sign Up</h1>
                <div className="signup-content">
                    <form method='POST' >
                        <label htmlFor="name">Name</label>
                        <input type='text' name='name' className='content' placeholder='Your Name'  value={user.name}  onChange={handleInputs} required />

                        <label htmlFor="email">Email</label>
                        <input type='email' name='email' className='content' placeholder='Your Email' value={user.email} onChange={handleInputs} required />

                        <label htmlFor="password">Password</label>
                        <input type='password' name='password' className='content' placeholder='Your Password' value={user.password} onChange={handleInputs} />

                        <label htmlFor="cpassword">Confirm Password</label>
                        <input type='password' name='cpassword' className='content' placeholder='Confirm Your Password' value={user.cpassword} onChange={handleInputs} />

                        <button type="submit" className='submit-btn' onClick={PostData} >Register</button>

                    </form>
                </div>
            </div>
        </section>
    );
};