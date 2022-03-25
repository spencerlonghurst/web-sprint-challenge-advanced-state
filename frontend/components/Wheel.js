import React, { useState } from 'react'

export default function Wheel() {

  const [wheel, setWheel] = useState({ "B": 0 })

  const changeClockwise = () => {
    if (wheel.B < 5) {
      setWheel({ ...wheel, 'B': wheel.B + 1 })
    } else {
      setWheel({ ...wheel, 'B': wheel.B - 5 })
    }
  }

  const changeCounterClockwise = () => {
    if (wheel.B > 0) {
      setWheel({ ...wheel, 'B': wheel.B - 1 })
    } else {
      setWheel({ ...wheel, 'B': wheel.B + 5 })

    }
  }

  return (
    <div id="wrapper">
      <div id="wheel">
        <div className={`cog ${wheel.B === 0 ? 'active' : ''}`} style={{ "--i": 0 }}>{`${wheel.B === 0 ? 'B' : ''}`}</div>
        <div className={`cog ${wheel.B === 1 ? 'active' : ''}`} style={{ "--i": 1 }}>{`${wheel.B === 1 ? 'B' : ''}`}</div>
        <div className={`cog ${wheel.B === 2 ? 'active' : ''}`} style={{ "--i": 2 }}>{`${wheel.B === 2 ? 'B' : ''}`}</div>
        <div className={`cog ${wheel.B === 3 ? 'active' : ''}`} style={{ "--i": 3 }}>{`${wheel.B === 3 ? 'B' : ''}`}</div>
        <div className={`cog ${wheel.B === 4 ? 'active' : ''}`} style={{ "--i": 4 }}>{`${wheel.B === 4 ? 'B' : ''}`}</div>
        <div className={`cog ${wheel.B === 5 ? 'active' : ''}`} style={{ "--i": 5 }}>{`${wheel.B === 5 ? 'B' : ''}`}</div>
        {/* --i is a custom CSS property, no need to touch that nor the style object */}
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn" onClick={changeCounterClockwise}>Counter clockwise</button>
        <button id="clockwiseBtn" onClick={changeClockwise}>Clockwise</button>
      </div>
    </div>
  )
}
