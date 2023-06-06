import React, {  useEffect } from 'react'
import { Tabs } from "antd";
import { Rooms } from './Rooms';
import { Users } from './Users';
import { Addroom } from './Addroom';
import { Bookings } from './Bookings';


const { TabPane } = Tabs
function Adminscreen() {

    useEffect(() => {
        if (localStorage.getItem("currentUser")===null || !JSON.parse(localStorage.getItem("currentUser")).isAdmin) {
            window.location.href = '/'
        }

    }, [])


    return (
        <div className='mt-3 ml-3 '>
            <h1 className='text-center' style={{ fontSize: '30px' }}> <b> ADMIN PANEL</b></h1>
            <Tabs defaultActiveKey="1" >
                <TabPane tab="Bookings" key="1">
                    <Bookings />
                </TabPane>
                <TabPane tab="Rooms" key="2">
                    <Rooms />
                </TabPane>
                <TabPane tab="Add Rooms" key="3">
                    <Addroom />
                </TabPane>
                <TabPane tab="Users List" key="4">
                    <Users />
                </TabPane>

            </Tabs>
        </div>
    )
}

export default Adminscreen


//BOOKINGS
// export function Bookings() {
//     const [bookings, setbookings] = useState([])

//     useEffect(() => {
//         async function fetchbookings() {

//             try {
//                 const data = await (await axios.get("/api/bookings/getallbookings")).data
//                 setbookings(data)


//             } catch (error) {
//                 console.log(error)

//             }
//         }
//         fetchbookings();

//     }, [bookings])



//     return (
//         <div className='row'>
//             <div className="col-md-11">
//                 <h1>Bookings</h1>
//                 <table className='table table-bordered table-light'>
//                     <thead className='bs'>
//                         <tr className='text-center table-dark'>
//                             <th >Booking Id</th>
//                             <th>User Id</th>
//                             <th>User Name</th>
//                             <th>Room</th>
//                             <th>From Date</th>
//                             <th>To Date</th>
//                             <th>Status</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {bookings.length && (bookings.map(booking => {
//                             return <tr>
//                                 <td>{booking._id}</td>
//                                 <td>{booking.userid}</td>
//                                 <td> {JSON.parse(localStorage.getItem("currentUser")).name}</td>

//                                 <td>{booking.room}</td>
//                                 <td>{booking.fromDate}</td>
//                                 <td>{booking.toDate}</td>
//                                 <td>{booking.status}</td>
//                             </tr>

//                         }))}

//                     </tbody>
//                 </table>


//             </div>

//         </div>
//     )
// }

//ROOMS

// export function Rooms() {
//     const [rooms, setrooms] = useState([])

//     useEffect(() => {
//         async function fetchbook() {

//             try {
//                 const data = await (await axios.get("/api/rooms/getallrooms")).data
//                 setrooms(data)


//             } catch (error) {
//                 console.log(error)

//             }
//         }
//         fetchbook();

//     }, [])



//     return (
//         <div className='row'>
//             <div className="col-md-11">
//                 <h1>Rooms</h1>
//                 <table className='table table-bordered table-light'>
//                     <thead className='bs'>
//                         <tr className='text-center table-dark'>
//                             <th >Room Id</th>
//                             <th>Name</th>
//                             <th>Type</th>
//                             <th>Rent P/D</th>
//                             <th>Max Count</th>
//                             <th>Phone no</th>

//                         </tr>
//                     </thead>
//                     <tbody>
//                         {rooms.length && (rooms.map(room => {
//                             return <tr>
//                                 <td className='text-center'>{room._id}</td>
//                                 <td className='text-center'>{room.name}</td>
//                                 <td className='text-center'>{room.type}</td>
//                                 <td className='text-center'>{room.rentperday}</td>
//                                 <td className='text-center'>{room.maxcount}</td>
//                                 <td className='text-center'>{room.phonenumber}</td>

//                             </tr>

//                         }))}

//                     </tbody>
//                 </table>


//             </div>

//         </div>
//     )
// }


//USERS
// export function Users() {
//     const [users, setusers] = useState([]);

//     useEffect(() => {
//         async function fetchUsers() {

//             try {
//                 const data = await (await axios.get("/api/users/getallusers")).data
//                 setusers(data)


//             } catch (error) {
//                 console.log(error)

//             }
//         }
//         fetchUsers();

//     }, [])
//     return (
//         <div className='row'>
//             <div className="col-md-12">
//                 <h1>Users</h1>
//                 <table className='table table-light table-bordered'>
//                     <thead className='bs'>
//                         <tr className='text-center table-dark'>
//                             <th>User Id </th>
//                             <th> Name</th>
//                             <th>E-Mail</th>
//                             <th>Is Admin</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {users && (users.map(user => {
//                             return <tr>
//                                 <td>{user._id}</td>
//                                 <td>{user.name}</td>
//                                 <td>{user.email}</td>
//                                 <td>{user.isAdmin ? 'YES' : 'NO'}</td>
//                             </tr>
//                         }))}
//                     </tbody>

//                 </table>
//             </div>

//         </div>
//     )
// }


//ADD ROOM

// export function Addroom() {
//     const [name, setname] = useState()
//     const [maxcount, setmaxcount] = useState()
//     const [rentperday, setrentperday] = useState()
//     const [type, settype] = useState()
//     const [description, setdescription] = useState()

//     const [imageurl1, setImageurl1] = useState()
//     const [imageurl2, setImageurl2] = useState()
//     const [imageurl3, setImageurl3] = useState()

//     async function addRoom(){
//         const newroom = {
//             name,
//             rentperday,
//             maxcount,
//             description,
//             type,
//             imageurls: [imageurl1, imageurl2, imageurl3],
//             currentbookings: [],
            
//           }
//           try {
//             const result = await (await axios.post("/api/rooms/addroom",newroom)).data
//             console.log(result)
            
//           } catch (error) {
//             console.log(error)
            
//           }
//     }
//     return (
//         <div className='text-center bs'>
//             <div className='col-md-5'>

//                 <input type="text" className='form-control ' placeholder='room name'
//                     value={name} onChange={(event) => { setname(event.target.value) }}
//                 /><br />

//                 <input type="text" className='form-control' placeholder='rent per day' 
//                  value={rentperday} onChange={(event) => { setrentperday(event.target.value) }}
//                  /><br />

//                 <input type="text" className='form-control' placeholder='maxcount' 
//                  value={maxcount} onChange={(event) => { setmaxcount(event.target.value) }}
//                  /><br />

//                 <input type="text" className='form-control' placeholder='description' 
//                  value={description} onChange={(event) => { setdescription(event.target.value) }}
//                 /><br />

//                 <input type="text" className='form-control' placeholder='type' 
//                  value={type} onChange={(event) => { settype(event.target.value) }}
//                 /><br />

//                 <input type="text" className='form-control' placeholder='Image URL 1'
//                  value={imageurl1} onChange={(event) => { setImageurl1(event.target.value) }}
//                   /><br />
                
//                 <input type="text" className='form-control' placeholder='Image URL 2' 
//                  value={imageurl2} onChange={(event) => { setImageurl2(event.target.value) }}
//                  /><br />

//                 <input type="text" className='form-control' placeholder='Image URL 3'
//                  value={imageurl3} onChange={(event) => { setImageurl3(event.target.value) }}
//                   />

//                 <div className='text-right'>
//                     <Button className='btn btn-primary mt-3' onClick={addRoom}>ADD ROOM</Button>

//                 </div>







//             </div>
//         </div>
//     )
// }
