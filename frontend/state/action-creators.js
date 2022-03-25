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
export function inputChange(text) {
  return {type: INPUT_CHANGE, payload: text}
}
export function resetForm(value) {
  return {type: RESET_FORM, payload: value}
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
        dispatch({ type: null, payload: err.response.data.error})

      })
  }
}
export function postAnswer() {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
  }
}
export function postQuiz() {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
  }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
