import React from 'react'
import "./CenterContainer.css";
import labubu1 from '../../assets/labubuleft.png'

import labubu3 from '../../assets/labubu.png'
const CenterContainer = () => {
  return (
  <div className="center-container">
    <div className="wrapper1">
      <img src={labubu1} alt="" />
    </div>
    <div className="content-center">
  
      <div className="boost">Boost Energy</div>
      <h2>TURNING FANTASIES <br /> INTO REALITY</h2>
      <p>THE FULL STRENGTH OF MONSTER COME FROM <br /> NATURAL INFUSE</p>
      <button className='drink'>Drink it up</button>
    </div>
    <div className="wrapper2">
      <img src={labubu3} alt="" />
    </div>
  </div>
  )
}

export default CenterContainer