import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Tabs } from "antd";
import axios from "axios";
import { Divider, Space, Tag } from 'antd';


const { TabPane } = Tabs;

function Profilescreen() {
  const user = JSON.parse(localStorage.getItem("currentUser"));

  useEffect(() => {
    if (!user) {
      window.location.href = "/login";
    }
  }, []);

  return (
    <div className="ml-3 mt-3">
      <Tabs defaultActiveKey="1">
        <TabPane tab="Profile" key="1">
          <h1>My Profile</h1>
          <br />
          <h1>Name:{user.name}</h1>
          <h1>Email:{user.email}</h1>
          <h1>isAdmin:{user.isAdmim ? "Yes" : "NO"}</h1>
        </TabPane>
        <TabPane tab="Bookings" key="2">
          <MyBookings />
        </TabPane>
      </Tabs>
    </div>
  );
}

export default Profilescreen;

export function MyBookings() {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const [bookings, setbookings] = useState([]);


  useEffect(() => {
    axios
      .post("api/bookings/getbookingsbyuserid", { userid: user._id })
      .then((res) => {
        setbookings(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    // eslint-disable-next-line
  }, []);

  async function cancelBooking(bookingid, roomid) {

    try {

      const result = await (await axios.post("/api/bookings/cancelbooking", { bookingid, roomid })).data
      console.log(result)
      if (result) {
        alert('Your Booking Cancelled Sucessfully')

        window.location.reload()
      }

    } catch (error) {
      console.log(error)
      alert('Failed to Cancel Booking')

    }

  }


  return (
    <div>
      <div className="row">
        <div className="col-md-7 mt-2 mb-2">
          <h1>My bookings</h1>
          {bookings.map((booking) => {
            return (
              <div className="bs">
                <h1>{booking.room}</h1>
                <p><b>BookingId</b> : {booking._id}</p>
                <p><b>CheckIn</b> : {booking.fromDate}</p>
                <p><b>CheckOut</b> : {booking.toDate}</p>
                <p><b>Amount</b> : {booking.totalAmount}</p>
                <p><b>Status</b> : {""}
                {booking.status=='cancelled' ?(<Tag color="red">CANCELLED</Tag>):( <Tag color="green">CONFRIMED</Tag>)}
                </p>


                {booking.status !== 'cancelled' && (
                  <div className="text-right">
                    <Button className="btn btn-primary" onClick={() => { cancelBooking(booking._id, booking.roomid) }}>CANCEL BOOKING</Button>
                  </div>
                )}


              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
