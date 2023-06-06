import React, { useState, useEffect } from 'react'
import axios from 'axios';


export function Users() {
    const [users, setusers] = useState([]);

    useEffect(() => {
        async function fetchUsers() {

            try {
                const data = await (await axios.get("/api/users/getallusers")).data
                setusers(data)


            } catch (error) {
                console.log(error)

            }
        }
        fetchUsers();

    }, [])
    return (
        <div className='row'>
            <div className="col-md-8">
                <h1>Users</h1>
                <table className='table table-light table-bordered'>
                    <thead className='bs'>
                        <tr className='text-center table-dark'>
                            <th>User Id </th>
                            <th> Name</th>
                            <th>E-Mail</th>
                            <th>Is Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users && (users.map(user => {
                            return <tr>
                                <td>{user._id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.isAdmin ? 'YES' : 'NO'}</td>
                            </tr>
                        }))}
                    </tbody>

                </table>
            </div>

        </div>
    )
}