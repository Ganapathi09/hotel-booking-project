import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';

function Bookingscreen() {
  const [loading, setLoading] = useState(true);
  const [error, seterror] = useState();
  const [room, setroom] = useState();
   let {roomid}=useParams()

  useEffect(() => {
    async function fetchid(){
      try {
        setLoading(true);
        const data = (await axios.post("/api/v1/auth/getroombyid", { roomid: roomid })).data;
        
        setroom(data);
        setLoading(false);
      } catch (error) {
        seterror(true);
        setLoading(false);
      }
    }
    fetchid()
  }, [roomid]);


  return (
    <div>
      <h1>roomid={roomid}</h1>
    </div>
  );
}

export default Bookingscreen;
