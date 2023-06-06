import React, { useState, useEffect } from 'react'
import axios from 'axios';




export function Rooms() {
    const [rooms, setrooms] = useState([])

    useEffect(() => {
        async function fetchbook() {

            try {
                const data = await (await axios.get("/api/rooms/getallrooms")).data
                setrooms(data)


            } catch (error) {
                console.log(error)

            }
        }
        fetchbook();

    }, [])



    return (
        <div className='row'>
            <div className="col-md-11">
                <h1>Rooms</h1>
                <table className='table table-bordered table-light'>
                    <thead >
                        <tr className='text-center table-dark'>
                            <th >Room Id</th>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Rent P/D</th>
                            <th>Max Count</th>
                            <th>Phone no</th>

                        </tr>
                    </thead>
                    <tbody>
                        {rooms.length && (rooms.map(room => {
                            return <tr>
                                <td className='text-center'>{room._id}</td>
                                <td className='text-center'>{room.name}</td>
                                <td className='text-center'>{room.type}</td>
                                <td className='text-center'>{room.rentperday}</td>
                                <td className='text-center'>{room.maxcount}</td>
                                <td className='text-center'>{room.phonenumber}</td>

                            </tr>

                        }))}

                    </tbody>
                </table>


            </div>

        </div>
    )
}