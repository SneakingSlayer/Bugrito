import React, {useState} from 'react';
import {useHistory} from 'react-router-dom'
import axios from 'axios';

export default function Register() {
    const [firstName, setFirstName] = useState('');
    const [lasttName, setLastName] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [err, setErr] = useState(false)
    const history = useHistory();
    
   async function registerUser(e){
        e.preventDefault();
        const userInfo = {
            firstName: firstName,
            lastName: lasttName, 
            birthdate: birthdate,
            email: email,
            password: password
        };

        console.log(userInfo);
        await axios.post('http://localhost:5000/api/user/register', userInfo)
        .then((res) => {
            history.push('/Login')
        })
        .catch((e) => {
            setErr(true)


        })

    }

    return (
        <div className="container justify-center">
            <div className="row justify-center">
                <form className="form-group text-center" onSubmit={registerUser}>
                    <h1 className="create-title">Create an account.</h1>
                    {err? <span className="description">Email already in use.</span>: null}
                    <div className="input-group">
                        <input onChange={event => setFirstName(event.target.value)} placeholder="First Name" required></input> 
                    </div>
                    <div className="input-group">
                        <input onChange={event => setLastName(event.target.value)} placeholder="Last Name" required></input> 
                    </div>
                    <div className="input-group">
                        <input onChange={event => setBirthdate(event.target.value)} type="Date" required></input> 
                    </div>
                    <div className="input-group">
                        <input onChange={event => setEmail(event.target.value)} placeholder="Email" required></input> 
                    </div>
                    <div className="input-group">
                        <input onChange={event => setPassword(event.target.value)} placeholder="Password" type="password" required></input> 
                    </div>
                    <div className="input-group">
                        <button className="btn-action" type="submit">Register</button>
                    </div>
                    
                </form>
            </div>
        </div>
    )
}
