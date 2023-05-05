import React from 'react';
import '../css/Destination.css';


function Destination() {
  return (
    <div className='destination'>
    <h2>01 Pick your destination</h2>
    <div className='destination-menu'>
        <button>Moon</button>
        <button>Mars</button>
        <button>Europa</button>
        <button>Titan</button>
    </div>
    <div className='destination-visual'>
    picture
    </div>
    
    <div className='destination-description'>
       <h3>Mars</h3>
       <p>Don't forget to pack your hiking boots. You'll need them 
        to tackle Olympus Mons, the tallest planetary mountain in
        our solar system. It's two and a half times the size of
        Everest!</p>
        <hr></hr>
        <div className='destination-distance'>
            <p>AVG. DISTANCE </p>
            <p>EST. TRAVEL TIME </p>
            <p><span>225 MIL. KM</span></p>
            <p><span>9 MONTHS</span></p>
        </div>
    </div>
    </div>
  )
}

export default Destination