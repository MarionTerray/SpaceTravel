import React, { useState } from 'react';
import '../css/Technology.css';
import { TechData } from './TechData.js';

function Technology() {

  let  [ ElClicked, setElClicked ] = useState(TechData[0])

  function handleClick(e) { 
      setElClicked(TechData[e.target.id])
    }

  return (
    <div className='technology'>
      <h2>03 Space launch 101</h2>
      <div className='technology-detail'>
        <div className='technology-btn'>
          <button id='0' onClick={handleClick}>1</button>
          <button id='1' onClick={handleClick}>2</button>
          <button id='2' onClick={handleClick}>3</button>
        </div>
        <div className='technology-description'>
          <p>THE TERMINOLOGY ...</p>
          <h3>{ElClicked.title}</h3>
          <p>{ElClicked.desc}</p>
        </div>
        <div className='technology-image'>
        <img src={ElClicked.image} alt={ElClicked.name}/>
        </div>
      </div>
    </div>
  )
}

export default Technology