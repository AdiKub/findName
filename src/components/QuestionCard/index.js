import React, { useState } from 'react'
import './styles.scss'

const QuestionCard = (props) => {
  const {question} = props
  const [didAnswered, setIsAnswered] = useState(true)

  const checkAnswer = (answer, id) => {
   const selectedButton = document.getElementById(id)
   selectedButton.style.backgroundColor = answer ? '#6db2eb' : '#cf4e4e'
    setIsAnswered(false)
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
        {question.options.map((item, index) => {
          const option = Object.keys(item)[0].replace(/ /g,"_")
          return (
            <button
              key={option+index}
              id={option+index}
              onClick={() => didAnswered && checkAnswer(item[option], option+index)}
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