import React, { useState } from 'react'

export default function Wheel(props) {

  const [wheel, setWheel] = useState({ "B": 0 })

  const changeClockwise = () => {
    setWheel({ ...wheel, 'B': wheel.B + 1 })
  }

  const changeCounterClockwise = () => {
    setWheel({ ...wheel, 'B': wheel.B - 1 })
  }


console.log('wheel state:', wheel )





  return (
    <div id="wrapper">
      <div id="wheel">
        <div className={`cog ${wheel.B === 0 ? 'active' : ''}`} style={{ "--i": 0 }}>B</div>
        <div className="cog" style={{ "--i": 1 }}></div>
        <div className="cog" style={{ "--i": 2 }}></div>
        <div className="cog" style={{ "--i": 3 }}></div>
        <div className="cog" style={{ "--i": 4 }}></div>
        <div className="cog" style={{ "--i": 5 }}></div>{/* --i is a custom CSS property, no need to touch that nor the style object */}
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn" onClick={changeCounterClockwise}>Counter clockwise</button>
        <button id="clockwiseBtn" onClick={changeClockwise}>Clockwise</button>
      </div>
    </div>
  )
}
