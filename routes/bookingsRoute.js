const express = require("express");
const bookingmodel = require("../models/booking");
const router = express.Router();
const Room = require("../models/room");
const roomModel = require("../models/room");

router.post("/bookroom", async (req, res) => {
  const { room, userid, fromDate, toDate, totalAmount, totalDays } = req.body

  try {
    const newbooking = new bookingmodel({
      room: room.name,
      roomid: room._id,
      userid,
      fromDate,
      toDate,
      totalAmount,
      totalDays,
      transactionId: "1234",
    });

    const booking = await newbooking.save()

    const roomtemp = await Room.findOne({ _id: room._id })
    roomtemp.currentbookings.push({
      bookingid: booking._id,
      fromDate: booking.fromDate,
      toDate: booking.toDate,
      userid: userid,
      status: booking.status
    })

    await roomtemp.save();

    res.send("Room booked Successfully")
  } catch (error) {
    return res.status(400).json({ error })
  }
});


router.post("/getbookingsbyuserid",async(req,res)=>{
  const userid =req.body.userid
  try {
    const bookings =await bookingmodel.find({userid:userid})
    res.send(bookings)
    
  } catch (error) {
    return res.status(400).json({error})
    
  }

  //
  router.post('/cancelbooking',async (req, res) => {

    const{bookingid , roomid} =req.body

    try {
      const booking = await bookingmodel.findOne({_id:bookingid})

      booking.status='cancelled'
      await booking.save()

      const room = await roomModel.findOne({ _id: roomid })

      const bookings =room.currentbookings
      const temp = bookings.filter(booking => booking.bookingid.toString()!==bookingid)
      room.currentbookings =temp

      await room.save()

      res.send('Your booking cancelled Successfully')
      
    } catch (error) {
      return res.status(400).json({error});
      
    }
  
  });
  router.get("/getallbookings",async(req,res)=>{
    try {
      const bookings =await bookingmodel.find()

      res.send(bookings)
      
    } catch (error) {
      return res.status(400).json({error});
      
    }

  })


})
module.exports = router
