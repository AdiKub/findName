import React from 'react'
import { useDispatch } from 'react-redux'
import './styles.scss'

const QuestionCard = (props) => {
  const {question} = props
  const dispatch = useDispatch()
 
  const setAnswer = (option) => {
    question.answer = option
    dispatch({ type: 'SET_ANSWERED_COUNT', title:question })
  }

  return (
    <div className='question-card'>
      <div className='question-card-img-wrapper'>
        <img
          alt='plane'
          className='question-card-img-wrapper_image' 
          src={question.img}
        />
      </div>
      <div className='question-card-options'>
        {question.options.map((item) => {
          const option = Object.keys(item)[0]
          return (
            <button
              key={option}
              onClick={() => setAnswer(option)}
              className='question-card-options_option'
            >
              {option}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default QuestionCard;