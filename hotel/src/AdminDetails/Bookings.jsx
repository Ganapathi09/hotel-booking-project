import React, { useState, useEffect } from 'react'
import axios from 'axios'


export function Bookings() {
    const [bookings, setbookings] = useState([])

    useEffect(() => {
        async function fetchbookings() {

            try {
                const data = await (await axios.get("/api/bookings/getallbookings")).data
                setbookings(data)


            } catch (error) {
                console.log(error)

            }
        }
        fetchbookings();

    }, [bookings])



    return (
        <div className='row'>
            <div className="col-md-11">
                <h1>Bookings</h1>
                <table className='table table-bordered table-light'>
                    <thead >
                        <tr className='text-center table-dark'>
                            <th >Booking Id</th>
                            <th>User Id</th>
                            <th>User Name</th>
                            <th>Room</th>
                            <th>From Date</th>
                            <th>To Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.length && (bookings.map(booking => {
                            return <tr>
                                <td>{booking._id}</td>
                                <td>{booking.userid}</td>
                                <td> {JSON.parse(localStorage.getItem("currentUser")).name}</td>

                                <td>{booking.room}</td>
                                <td>{booking.fromDate}</td>
                                <td>{booking.toDate}</td>
                                <td>{booking.status}</td>
                            </tr>

                        }))}

                    </tbody>
                </table>


            </div>

        </div>
    )
}