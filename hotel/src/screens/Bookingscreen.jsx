import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Button, Col, Row } from "react-bootstrap";
import moment from "moment";

function Bookingscreen() {
  const [loading, setLoading] = useState(true);
  const [error, seterror] = useState();
  const [room, setroom] = useState();

  const { roomid, fromDate, toDate } = useParams();

  const fromdate = moment(fromDate, "DD-MM-YYYY");
  const todate = moment(toDate, "DD-MM-YYYY");

  const [totalAmount, setTotalamount] = useState();

  const totalDays = moment.duration(todate.diff(fromdate)).asDays() + 1;


  useEffect(() => {
    async function fetchDatabyid() {
    //if user is ? login go to login page

    if (! localStorage.getItem("currentUser")){
      window.location.reload='/login'
    }


      try {
        setLoading(true);
        const data = (
          await axios.post("/api/rooms/getroombyid", { roomid: roomid })
        ).data;

        setroom(data);

        setTotalamount(data.rentperday * totalDays);
        
        // gst in %
        var cgst = (data.rentperday *totalDays* 9) / 100;
        var sgst = (data.rentperday *totalDays* 9) / 100;
        setTotalamount(data.rentperday * totalDays + cgst + sgst);
        setLoading(false);
      } catch (error) {
        seterror(true);
        setLoading(false);
      }
    }
    fetchDatabyid();
  }, [roomid]);

  async function bookRoom() {
    const bookingDetails = {
      room,
      userid: JSON.parse(localStorage.getItem("currentUser"))._id,
      fromDate,
      toDate,
      totalAmount,
      totalDays,
    };
    try {
      const result = await axios.post("/api/bookings/bookroom", bookingDetails);
    } catch (error) { }
  }

  return (
    <div className="m-5">
      {loading ? (
        <h1>loading</h1>
      ) : room ? (
        <div>
          <div className="row justify-content-center mt-5 bs">
            <div className="col-md-5">
              <h1>{room.name}</h1>
              <img src={room.imageurls[0]} className="bigimg" />
            </div>
            <div className="col-md-6">
              <div style={{ textAlign: "right" }}>
                <h1>Booking details</h1>
                <hr />
                <b>
                  <p>
                    Name :{" "}
                    {JSON.parse(localStorage.getItem("currentUser")).name}
                  </p>
                  <p>From Date : {fromDate}</p>
                  <p>To Date : {toDate}</p>
                  <p>Max count : {room.maxcount}</p>
                </b>
              </div>
              <div style={{ textAlign: "right" }}>
                <h1>Amount Details</h1>
                <hr />
                <b>
                  <p>Total Days : {totalDays}</p>
                  <p>Rent per Days : {room.rentperday}</p>
                  <p>Sub Total : {room.rentperday * totalDays}</p>
                  <p>CGST 9% : {(room.rentperday *totalDays* 9) / 100}</p>
                  <p>SGST 9% : {(room.rentperday * totalDays* 9) / 100}</p>
                  <p>Total Amount : {totalAmount}</p>
                </b>
              </div>
              <div style={{ float: "right" }}>
                <Button className="btn btn-primary m-2" onClick={bookRoom}>
                  Paynow
                </Button>
                <Link to="/home">
                  <Button className="btn btn-primary">Go back</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1>Error..</h1>
      )}
    </div>
  );
}

export default Bookingscreen;
