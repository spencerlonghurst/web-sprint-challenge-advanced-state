import { MOVE_CLOCKWISE } from "./action-types";
import { MOVE_COUNTERCLOCKWISE } from "./action-types";
import { SET_QUIZ_INTO_STATE } from "./action-types";
import { SET_SELECTED_ANSWER } from "./action-types";
import { SET_INFO_MESSAGE } from "./action-types";
import { INPUT_CHANGE } from "./action-types";
import { RESET_FORM } from "./action-types";

import axios from "axios";

// ❗ You don't need to add extra action creators to achieve MVP
export function moveClockwise(value) {
  return {type: MOVE_CLOCKWISE, payload: value}
}
export function moveCounterClockwise(value) {
  return {type: MOVE_COUNTERCLOCKWISE, payload: value}
}
export function setQuiz(quizData) {
  return {type: SET_QUIZ_INTO_STATE, payload: quizData}
}
export function selectAnswer(answer) {
  return {type: SET_SELECTED_ANSWER, payload: answer}
}
export function setMessage(message) {
  return {type: SET_INFO_MESSAGE, payload: message}
}
export function inputChange({id, value}) {
  return {type: INPUT_CHANGE, payload: {id, value}}
}
export function resetForm() {
  return {type: RESET_FORM}
}

// ❗ Async action creators
export function fetchQuiz() {
  return function (dispatch) {
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state
    axios.get('http://localhost:9000/api/quiz/next')
      .then(res => {
        // console.log('GET res', res.data)
        // dispatch({ type: SET_QUIZ_INTO_STATE, payload: })
        dispatch(setQuiz(res.data))
      })
      .catch(err => {
        // console.log('GET err', err)
        debugger
        // dispatch({ type: null, payload: err.response.data.error})

      })
  }
}
export function postAnswer(quiz_id, answer_id) {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
    axios.post('http://localhost:9000/api/quiz/answer', { quiz_id, answer_id })
    .then(res => {
      console.log('res', res)
      dispatch(selectAnswer(null));
      dispatch(setMessage(res.data.message));
      console.log('message', res.data.message)
      dispatch(fetchQuiz())
    })
    .catch(err => {
      debugger
      // dispatch({ type: null, payload: err.response.data.error})
    })
  }
}
export function postQuiz(input) {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
    axios.post('http://localhost:9000/api/quiz/new', { question_text: input.newQuestion, true_answer_text: input.newTrueAnswer, false_answer_text: input.newFalseAnswer })
    .then(res => {
      console.log('res.data.message',res.data.message)
      dispatch(setMessage(`Congrats: "${res.data.question}" is a great question!`))
      dispatch(resetForm())
      debugger
    })
    .catch(err => {
      console.log(err)
      debugger
    })
  }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
