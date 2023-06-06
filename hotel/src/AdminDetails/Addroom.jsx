import React, { useState } from 'react'
import axios from 'axios';
import { Button } from 'react-bootstrap';



export function Addroom() {
  const [name, setname] = useState()
  const [maxcount, setmaxcount] = useState()
  const [rentperday, setrentperday] = useState()
  const [type, settype] = useState()
  const [description, setdescription] = useState()
  const [phonenumber, setphonenumber] = useState()

  const [imageurl1, setImageurl1] = useState()
  const [imageurl2, setImageurl2] = useState()
  const [imageurl3, setImageurl3] = useState()

  async function addRoom() {
    const newroom = {
      name,
      rentperday,
      maxcount,
      description,
      phonenumber,
      type,
      imageurls: [imageurl1, imageurl2, imageurl3],
      currentbookings: [],

    }
    try {
      const result = await (await axios.post("/api/rooms/addroom", newroom)).data
      console.log(result)

    } catch (error) {
      console.log(error)

    }
  }
  return (
    <div className='text-center '>
      <div className='col-md-5'>

        <input type="text" className='form-control ' placeholder='room name'
          value={name} onChange={(event) => { setname(event.target.value) }}
        /><br />

        <input type="text" className='form-control' placeholder='rent per day'
          value={rentperday} onChange={(event) => { setrentperday(event.target.value) }}
        /><br />

        <input type="text" className='form-control' placeholder='maxcount'
          value={maxcount} onChange={(event) => { setmaxcount(event.target.value) }}
        /><br />

        <input type="text" className='form-control' placeholder='description'
          value={description} onChange={(event) => { setdescription(event.target.value) }}
        /><br />

        <input type="text" className='form-control' placeholder='phonenumber'
          value={phonenumber} onChange={(event) => { setphonenumber(event.target.value) }}
        /><br />

        <input type="text" className='form-control' placeholder='type'
          value={type} onChange={(event) => { settype(event.target.value) }}
        /><br />

        <input type="text" className='form-control' placeholder='Image URL 1'
          value={imageurl1} onChange={(event) => { setImageurl1(event.target.value) }}
        /><br />

        <input type="text" className='form-control' placeholder='Image URL 2'
          value={imageurl2} onChange={(event) => { setImageurl2(event.target.value) }}
        /><br />

        <input type="text" className='form-control' placeholder='Image URL 3'
          value={imageurl3} onChange={(event) => { setImageurl3(event.target.value) }}
        />

        <div className='text-right'>
          <Button className='btn btn-primary mt-3' onClick={addRoom}>ADD ROOM</Button>

        </div>







      </div>
    </div>
  )
}
