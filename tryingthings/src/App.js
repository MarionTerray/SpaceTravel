import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Header from './composants/Header';
import Home from './composants/Home';
import Destination from './composants/Destination';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        
          <Route path='/' element={<><Header/><Home/></>}></Route>
          <Route path='/home' element={<><Header/><Home/></>}></Route>
          <Route path='/destination' element={<><Header/><Destination/></>}></Route>
        
      </Routes>
    </BrowserRouter>
    
    
  );
}

export default App;
