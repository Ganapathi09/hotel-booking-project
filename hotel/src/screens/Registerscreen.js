import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import axios from 'axios'
import '../index.css'
import Error from '../components/Error'
import Success from '../components/Success'


function Registerscreen() {
    const [name, setname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')
    const [cpassword, setcpassword] = useState('')

    const [loading, setloading] = useState(false);
    const [error, seterror] = useState();

    const [success, setsuccess] = useState()
    const register = async () => {

        try {
            const user = {
                name,
                email,
                password,
                cpassword,
            }
            if (password === cpassword) {
                console.log(user)

                try {
                    setloading(true);
                    const result = (await axios.post('/api/users/register', user)).data
                    setloading(false)
                    setsuccess(true)

                    setname('')
                    setEmail('')
                    setpassword('')
                    setcpassword('')

                } catch (error) {
                    console.log(error)
                    setloading(false)
                    seterror(true)

                }
            }
            else {
                alert("put correct password")
            }

        } catch (error) {

        }
    }



    return (
        <div>
            {loading && (loading)}
            {error && (<Error/>)}
            
            <div className='row justify-content-center mt-1'>
                <div className='col-md-5'>
                {success && (<Success message='Registration success'/>)}
                    <Form className='bs'>
                        <h1 align="center">Register</h1><br />
                        <div className='mb-3'>
                            <input type='text' className='form-control' placeholder='Name'
                                onChange={(event) => { setname(event.target.value) }} value={name} /><br />
                            <input type='email' className='form-control' placeholder='Email'
                                onChange={(event) => { setEmail(event.target.value) }} value={email} /><br />

                            <input type='password' className='form-control' placeholder='Password'
                                onChange={(event) => { setpassword(event.target.value) }} value={password} /><br />
                            <input type='password' className='form-control' placeholder='Confirm Password'
                                onChange={(event) => { setcpassword(event.target.value) }} value={cpassword} /><br />


                            <Button className='btn btn-primary' onClick={register}>Register</Button><br />

                        </div>
                    </Form>
                </div>

            </div>

        </div>
    )
}


export default Registerscreen