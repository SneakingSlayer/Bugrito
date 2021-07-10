import React, {useState, useEffect} from 'react';
import './components.css';
import {useHistory} from 'react-router-dom'
import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux'
import { login} from '../redux/actions/authActions';



export default function Login() {
    const [yourEmail, setEmail] = useState('');
    const [yourPass, setPass] = useState('');
    const history = useHistory();
    const [err, setErr] = useState()
    const dispatch = useDispatch()

    const validation = async (e) => {
        e.preventDefault();
        const userInfo = {
            email: yourEmail,
            password: yourPass
        }
        dispatch(login(userInfo))
    }

    return (
        <>
        <Container className="prod-card">
            <Row>
                <Col className="d-flex justify-center" xs={12} lg={12}> 
                    <Form onSubmit={validation} className="text-center">
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
        </>
        
    )
}

