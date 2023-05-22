import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Room from '../components/Room';
import 'antd/dist/reset.css';

import { DatePicker, Space } from 'antd';
const { RangePicker } = DatePicker;


function Homescreen() {
  const [rooms, setroom] = useState([]);
  const [loading, setloading] = useState()
  const [error, seterror] = useState()

  const [fromdate, setfromdate] = useState()
  const [todate, settodate] = useState()
  const [duplicationRoom, setduplicationRoom] = useState()

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
  }, ['api/rooms/getallrooms']);


  function filterByDate(dates) {
    setfromdate(dates[0].format('DD-MM-YYYY'))
    settodate(dates[1].format('DD-MM-YYYY'))

    //tofilter

    // var temprooms=[]
    // var 


  }

  return (
    <div className='container'>

      <div className='row mt-5'>
        <div className='col-md-3'>

          <RangePicker format='DD-MM-YYYY' onChange={filterByDate} />


        </div>


      </div>

      <div className="row justify-content-center mt-5 mt-2">
        {loading ? (<h1>loading...</h1>) : error ? (<h1>error</h1>) : (rooms.map(room => {

          return <div className='col-md-9'>
            <Room room={room} fromdate={fromdate} todate={todate} />

          </div>
        }))}

      </div>

    </div>
  );
}

export default Homescreen;
