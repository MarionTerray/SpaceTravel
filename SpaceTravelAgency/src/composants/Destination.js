import React, { useState } from 'react';
import '../css/Destination.css';
import { planet } from './Planet.js';



function Destination() {

  let  [ ElClicked, setElClicked ] = useState(planet[0]);

  function handleClick(e) { 
      setElClicked(planet[e.target.id])
    }


  return (
    <div className='destination'>
    <h2>01 Pick your destination</h2>
    <div className='destination-menu'>
        <button id='0' onClick={handleClick}>Moon</button>
        <button id='1' onClick={handleClick}>Mars</button>
        <button id='2' onClick={handleClick}>Europa</button>
        <button id='3' onClick={handleClick}>Titan</button>
    </div>
    <div className='destination-visual'>
      <img src={ElClicked.image} alt={ElClicked.name}/>
    </div>
    
    <div className='destination-description'>
       <h3>{ElClicked.name}</h3>
       <p>{ElClicked.descritpion}</p>
        <hr></hr>
        <div className='destination-distance'>
            <p>AVG. DISTANCE </p>
            <p>EST. TRAVEL TIME </p>
            <p><span>{ElClicked.distance}</span></p>
            <p><span>{ElClicked.time}</span></p>
        </div>
    </div>
    </div>
  )
}

export default Destination