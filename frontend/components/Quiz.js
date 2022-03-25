import React, { useEffect } from 'react'

import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'

export function Quiz(props) {
  const {
    //State:
    quiz,
    selectedAnswer,
    //ASYNC action creator:
    fetchQuiz
  } = props

  useEffect(() => {
    fetchQuiz()
  }, [])

  const onSubmit = evt => {
    evt.preventDefault()
  }

  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        quiz ? (
          <>
            <h2>{quiz.question}</h2>


            <div id="quizAnswers">
              <div className="answer selected">
                {quiz.answers[0].text}
                <button>
                  SELECTED
                </button>
              </div>

              <div className="answer">
                {quiz.answers[1].text}
                <button>
                  Select
                </button>
              </div>
            </div>

            <button id="submitAnswerBtn" onClick={onSubmit} disabled={!selectedAnswer}>Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}

const mapStateToProps = state => {
  // console.log('state', state)
  return {
    quiz: state.quiz,
    selectedAnswer: state.selectedAnswer
  }
}


export default connect(mapStateToProps, actionCreators)(Quiz)