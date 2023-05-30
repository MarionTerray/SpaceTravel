import React, { useState } from 'react';
import '../css/Crew.css';
import { CrewData } from './CrewData';

function Crew() {
  let  [ ElClicked, setElClicked ] = useState(CrewData[0])

  function handleClick(e) { 
      setElClicked(CrewData[e.target.id])
    }

  return (
    <div className='crew'>
      <h2>02 MEET YOUR CREW</h2>
        <div className='crewContent'>
          <div className='crewPresentation'>
            <p>{ElClicked.poste}</p>
            <h3>{ElClicked.name}</h3>
            <p>{ElClicked.descr}</p>
          </div>
          <img src={ElClicked.image} alt={ElClicked.name} />
          <div className='crewBtn'>
            <button id='0' onClick={handleClick}></button>
            <button id='1' onClick={handleClick}></button>
            <button id='2' onClick={handleClick}></button>
            <button id='3' onClick={handleClick}></button>
          </div>
          
        </div>
    
    
    </div>
  )
}

export default Crew