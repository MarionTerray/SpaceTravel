import React from 'react';
import '../css/Home.css'

function Home() {
  return (
    <div className='home'>
      <div className='text'>
          <h2>So, you want to travel to </h2>
          <h1>SPACE</h1>
          <p>Let's face it, if you want to go to space, you might as well
          genuinely go to outer space and not hover kind of on technology
          edge of it. Well sit back, and relax because we'll give you 
          a truly out of this world experience!</p>
      </div>
      <div className='exploreBtn'>
        <a href='/'>EXPLORE</a>
      </div>
    </div>
    
  )
}

export default Home