import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link, useParams} from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';


function Bookingscreen() {
  const [loading, setLoading] = useState(true);
  const [error, seterror] = useState();
  const [room, setroom] = useState();
 
  const {roomid} = useParams();
  useEffect( () => {
    
     async function fetchDatabyid(){
      try {
        setLoading(true);
        const data = (await axios.post("/api/rooms/getroombyid", { roomid: roomid })).data;
        
        setroom(data);
        setLoading(false);
      } catch (error) {
        seterror(true);
        setLoading(false);
      }

     }
     fetchDatabyid()
    
    
  }, [roomid]);
  


  return (
    <div className='m-5'>
      {loading ? (<h1>loading</h1>) : room ?  (
        <div>
          <div className='row justify-content-center mt-5 bs'>
          <div className='col-md-5'>
            <h1>{room.name}</h1>
            <img src={room.imageurls[0] }className='bigimg'/>
            </div>
            <div className='col-md-6'>
              <div style={{textAlign:'right'}}>
                <h1>Booking details</h1>
                <hr/>
                <b>
                  <p>Name:</p>
                  <p>From Date:</p>
                  <p>To Date:</p>
                  <p>Max count:</p>
                </b>
              </div>
              <div style={{textAlign:'right'}}>
              <h1>Amount</h1>
              <hr/>
                <b>
                  <p>Total Days:</p>
                  <p>Rent per Days:{room.rentperday}</p>
                  <p>Total Amount:</p>
                  </b>

                </div>
                <div style={{float:'right'}}>
                  <Button className='btn btn-primary m-2'>Paynow</Button>
                  <Link to='/home'><Button className='btn btn-primary'>Go back</Button></Link>

                </div>


              </div>

          </div>
        </div>
      ):(<h1>Error..</h1>)}
     
    </div>
  );
}

export default Bookingscreen;
