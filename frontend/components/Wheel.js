import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'




export function Wheel(props) {

  const {
    wheel,
    moveClockwise,
    moveCounterClockwise,
  } = props
  
  console.log(props);


  const handleClickClockwise = evt => {
    const { value } = evt.target;
    moveClockwise(value)
  }

  const handleClickCounterClockwise = evt => {
    const { value } = evt.target;
    moveCounterClockwise(value)
  }

  return (
    <div id="wrapper">
      <div id="wheel">
        <div className={`cog ${wheel === 0 ? 'active' : ''}`} style={{ "--i": 0 }}>{`${wheel === 0 ? 'B' : ''}`}</div>
        <div className={`cog ${wheel === 1 ? 'active' : ''}`} style={{ "--i": 1 }}>{`${wheel === 1 ? 'B' : ''}`}</div>
        <div className={`cog ${wheel === 2 ? 'active' : ''}`} style={{ "--i": 2 }}>{`${wheel === 2 ? 'B' : ''}`}</div>
        <div className={`cog ${wheel === 3 ? 'active' : ''}`} style={{ "--i": 3 }}>{`${wheel === 3 ? 'B' : ''}`}</div>
        <div className={`cog ${wheel === 4 ? 'active' : ''}`} style={{ "--i": 4 }}>{`${wheel === 4 ? 'B' : ''}`}</div>
        <div className={`cog ${wheel === 5 ? 'active' : ''}`} style={{ "--i": 5 }}>{`${wheel === 5 ? 'B' : ''}`}</div>
        {/* --i is a custom CSS property, no need to touch that nor the style object */}
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn" onClick={handleClickCounterClockwise}>Counter clockwise</button>
        <button id="clockwiseBtn" onClick={handleClickClockwise}>Clockwise</button>
      </div>
    </div>
  )
}

// const mapStateToProps = state => {
//   // console.log('state', state)
//   return {
//     wheel: state.wheel
//   }
// }


export default connect(st => st, actionCreators)(Wheel)