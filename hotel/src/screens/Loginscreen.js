import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import {  Link, json } from 'react-router-dom'
import '../index.css'
import axios from 'axios'
import Error from '../components/Error'


function Loginscreen() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [loading, setloading] = useState(false);
    const [error, seterror] = useState();


    async function Login(){
        const user={
            email,
            password,
        }
        try {
            setloading(true);
            const result = (await axios.post('/api/users/login',user)).data
            setloading(false);

            localStorage.setItem('currentUser' , JSON.stringify(result));
            window.location.href='/home'
            
        } catch (error) {
            console.log(error)
            setloading(false);
            seterror(true); 
            
        }
        
    
    }
    return (
        <div>
            {loading && (loading)}
            <div className='row justify-content-center mt-1'>
                <div className='col-md-5 mt-5'>
                    {error && (<Error message ='INVALID'/>)}

                    <Form className='bs'>
                        <h1 align="center">Login</h1><br />
                        <div className='mb-3'>
                            <input type='email' className='form-control' placeholder='Email'
                                onChange={(event) => { setEmail(event.target.value) }} value={email} /><br />

                            <input type='password' className='form-control' placeholder='Password'
                                onChange={(event) => { setPassword(event.target.value) }} value={password} /><br />

                                <Button className='btn btn-primary' onClick={Login}>Login</Button><br/>
                                Dont Have an Account?<Link to= '/Register'>ClickHere</Link>
                        </div>
                    </Form>
                </div>

            </div>

        </div>
    )
}

export default Loginscreen