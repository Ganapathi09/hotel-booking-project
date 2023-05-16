import './App.css';
import Navigation from './components/Navigation';
import {BrowserRouter,Route, Routes}from 'react-router-dom'
import Homescreen from './screens/Homescreen';
import Bookingscreen from './screens/Bookingscreen';
function App() {
  return (
    <div className="App">
    <Navigation />
    <BrowserRouter>
    <Routes>
    <Route path='/home' Component={Homescreen}/>
    <Route path='/book/:roomid'  Component={Bookingscreen}/>
    
    </Routes>

    </BrowserRouter>
    </div>
  );
}

export default App;
