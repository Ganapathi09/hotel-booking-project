import React, { useState,useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../index.css'


function Loginscreen() {
    const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')
    const register = async () => {

        try {

        } catch (error) {

        }
    }
    return (
        <div>
            <div className='row justify-content-center mt-1'>
                <div className='col-md-4'>
                    <Form className='bs'>
                        <h1 align="center">Ligin</h1><br />
                        <div className='mb-3'>
                            <input type='email' className='form-control' placeholder='Email'
                                onChange={(event) => { setEmail(event.target.value) }} value={email} /><br />

                            <input type='password' className='form-control' placeholder='Password'
                                onChange={(event) => { setEmail(event.target.value) }} value={password} /><br />

                                <Button className='btn btn-primary' onClick={register}>Login</Button><br/>
                                Dont Have an Account?<Link to= '/Register'>ClickHere</Link>
                        </div>
                    </Form>
                </div>

            </div>

        </div>
    )
}

export default Loginscreen