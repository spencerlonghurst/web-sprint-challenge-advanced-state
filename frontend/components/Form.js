import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'

export function Form(props) {

  console.log('props.form:',props.form)

  const {
    postQuiz,
    inputChange,
    form,
  } = props

  const onChange = evt => {
    inputChange(evt.text)
  }

  const onSubmit = evt => {
    evt.preventDefault()
    postQuiz(evt.question_text, evt.true_answer_text, evt.false_answer_text)
  }

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={onChange} id="newQuestion" placeholder="Enter question" />
      <input maxLength={50} onChange={onChange} id="newTrueAnswer" placeholder="Enter true answer" />
      <input maxLength={50} onChange={onChange} id="newFalseAnswer" placeholder="Enter false answer" />
      <button id="submitNewQuizBtn">Submit new quiz</button>
    </form>
  )
}

export default connect(st => st, actionCreators)(Form)
