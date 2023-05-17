import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Room from '../components/Room';

function Homescreen() {
  const [rooms, setroom] = useState([]);
  const [loading, setloading] = useState()
  const [error, seterror] = useState()

  useEffect(() => {
    async function fetchData() {


      try {
        setloading(true);
        const data = (await axios.get('/api/rooms/getallrooms')).data;

        setroom(data);

        setloading(false)



      } catch (error) {
        seterror(true)
        console.log(error)
        setloading(false)
        

      }
    }
fetchData()
    }, ['api/rooms/getallrooms'])

  return (
    <div className='container'>
      <div className="row justify-content-center mt-5 mt-2">
        {loading ? (<h1>loading...</h1>) : error ? (<h1>error</h1>) : (rooms.map(room => {

          return <div className='col-md-9'>
            <Room room={room} />

          </div>
        }))}

      </div>

    </div>
  );
}

export default Homescreen;
