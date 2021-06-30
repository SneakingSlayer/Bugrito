import React, {useState, useEffect} from 'react';
import './components.css';
import {useHistory} from 'react-router-dom'
import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import axios from 'axios';
import {Link} from 'react-router-dom';

export default function Login() {
    const [yourEmail, setEmail] = useState('');
    const [yourPass, setPass] = useState('');
    const history = useHistory();
    const [err, setErr] = useState(false)
    const user = localStorage.getItem('fName')
    useEffect(() => {
        const jwt = localStorage.getItem('jwt');
        if(jwt){
            history.push('/')
        }
    },[history]);

    function validation(e){
        e.preventDefault();
        const userInfo = {
            email: yourEmail,
            password: yourPass
        }
        

            axios.post('/api/user/login', userInfo)
            .then((res) => {
                localStorage.setItem('_id', res.data.id)
                localStorage.setItem('jwt', res.data.token)
                localStorage.setItem('user', res.data.fName)
                console.log(res)
                history.push('/')
            })
            .catch((err) => {
                console.log(err)
                setErr(true)
            })
           // 

    }

     

    return (
        <>
        <Container>
            <Row>
                <Col className="d-flex justify-center" xs={12} lg={12}> 
                    <Form onSubmit={validation}>
                        {err? <p className="description">Invalid username/password</p>: null}
                        <div className="input-group">
                            <input type="email" className="effect-16" placeholder="Email" required onChange={event => setEmail(event.target.value)}></input> 
                        </div>
                        <div className="input-group">
                            <input placeholder="Password" type="password" required onChange={event => setPass(event.target.value)}></input> 
                        </div>
                        <div className="input-group justify-center text">
                            <button className="btn-action" type="submit">Sign In</button>
                        </div>
                        
                        <span className="description">Don't have an account? 
                            <Link className="reg-link" to="/Register">
                                <span >&nbsp; Sign up here</span>
                            </Link>
                        </span>

                    </Form>
                
                </Col>
            </Row>
        </Container>
        {/**<div className="container justify-center ">
            
            <div className="row justify-center">
                
                <form className="form-group text-center" onSubmit={validation}>
                    {err? <p className="description">Invalid username/password</p>: null}
                    <div className="input-group">
                        <input type="email" className="effect-16" placeholder="Email" required onChange={event => setEmail(event.target.value)}></input> 
                    </div>
                    <div className="input-group">
                        <input placeholder="Password" type="password" required onChange={event => setPass(event.target.value)}></input> 
                    </div>
                    <div className="input-group justify-center text">
                        <button className="btn-action" type="submit">Sign In</button>
                    </div>
                    
                    <span className="description">Don't have an account? 
                        <Link className="reg-link" to="/Register">
                            <span >&nbsp; Sign up here</span>
                        </Link>
                    </span>
                </form>
                
            </div>
            
        </div>*/}
        </>
        
    )
}

