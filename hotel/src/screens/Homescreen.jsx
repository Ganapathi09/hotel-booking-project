import React, { useState, useEffect } from "react";
import axios from "axios";
import Room from "../components/Room";
import "antd/dist/reset.css";
import moment from "moment";

import { DatePicker, Space } from "antd";
const { RangePicker } = DatePicker;

function Homescreen() {
  const [rooms, setroom] = useState([]);
  const [loading, setloading] = useState();
  const [error, seterror] = useState();

  const [fromdate, setfromdate] = useState();
  const [todate, settodate] = useState();
  const [duplicationRoom, setduplicationRoom] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        setloading(true);
        const data = (await axios.get("/api/rooms/getallrooms")).data;

        setroom(data);
        setduplicationRoom(data);
        setloading(false);
      } catch (error) {
        seterror(true);
        console.log(error);
        setloading(false);
      }
    }
    fetchData();
  }, ["api/rooms/getallrooms"]);

  function filterByDate(dates) {
    //from date
    console.log(dates[0].format("DD-MM-YYYY"));
    setfromdate(dates[0].format("DD-MM-YYYY"));
    //to date
    console.log(dates[1].format("DD-MM-YYYY"));
    settodate(dates[1].format("DD-MM-YYYY"));
  
    //tempRooms
    var tempRooms = [];
  
    for (const room of duplicationRoom) {
      var availability = false;
  
      if (room.currentbookings.length > 0) {
        for ( const booking of room.currentbookings) {
          //check between or equal to dates
          if (
            !moment(moment(dates[0]).format("DD-MM-YYYY")).isBetween(
              booking.fromDate,
              booking.toDate
            ) &&
            !moment(moment(dates[1]).format("DD-MM-YYYY")).isBetween(
              booking.fromDate,
              booking.toDate
            )
          ) {
            
            if (
              dates[0].format("DD-MM-YYYY") !== booking.fromDate &&
              dates[0].format("DD-MM-YYYY") !== booking.toDate &&
              dates[1].format("DD-MM-YYYY") !== booking.fromDate &&
              dates[1].format("DD-MM-YYYY") !== booking.toDate
            ) {
              availability = true;
            }
          }
        }
      } else {
        availability = true;
      }
  
      if (availability === true) {
        tempRooms.push(room);
      }
    }
  
    setroom(tempRooms);
  }

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-3">
          <RangePicker format="DD-MM-YYYY" onChange={filterByDate} />
        </div>
      </div>

      <div className="row justify-content-center mt-5 mt-2">
        {loading ? (
          <h1>loading...</h1>
        ) : rooms.length > 1 ? (
          rooms.map((room) => {
            return (
              <div className="row-md-9">
                <Room room={room} fromdate={fromdate} todate={todate} />
              </div>
            );
          })
        ) : (
          <h1>Error...</h1>
        )}
      </div>
      <h1 classname="mt-2">
        Room length and its avalabilty is :{rooms.length}
      </h1>
    </div>
  );
}

export default Homescreen;
