import './App.css';
import Navigation from './components/Navigation';
import {BrowserRouter,Route, Routes}from 'react-router-dom'
import Homescreen from './screens/Homescreen';
import Bookingscreen from './screens/Bookingscreen';
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';
function App() {
  return (
    <div className="App">
    <Navigation />
    <BrowserRouter>
    <Routes>
    <Route path='/home' exact Component={Homescreen}/>
    <Route path='/book/:roomid' exact Component={Bookingscreen}/>
    <Route path='/register' exact Component={Registerscreen}/>
    <Route path='/login' exact Component={Loginscreen}/>
    
    </Routes>

    </BrowserRouter>
    </div>
  );
}

export default App;
