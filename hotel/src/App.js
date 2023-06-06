import './App.css';
import Navigation from './components/Navigation';
import {BrowserRouter,Route, Routes}from 'react-router-dom'
import Homescreen from './screens/Homescreen';
import Bookingscreen from './screens/Bookingscreen';
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';
import Home from './components/Home';
import About from './components/About';
import Profilescreen from './screens/Profilescreen';
import Adminscreen from './AdminDetails/Adminscreen';
function App() {
  return (
    <div className="App">
    <Navigation />
    <BrowserRouter>
    <Routes>
    <Route path='/' exact Component={Home}/>
    <Route path='/About' exact Component={About}/>
    <Route path='/Bookings' exact Component={Homescreen}/>
    <Route path='/book/:roomid/:fromDate/:toDate' exact Component={Bookingscreen}/>
    <Route path='/register' exact Component={Registerscreen}/>
    <Route path='/login' exact Component={Loginscreen}/>
    <Route path='/DashBoard' exact Component={Profilescreen}/>
    <Route path='/admin' exact Component={Adminscreen}/> 


    
    </Routes>

    </BrowserRouter>
    </div>
  );
}

export default App;
