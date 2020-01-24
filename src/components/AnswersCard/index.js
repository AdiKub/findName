import React from 'react'

const AnswersCard = (props) => {
  const {answerObj} = props

  return (
    <div className='question-card'>
      <div className='question-card-img-wrapper'>
        <img
          alt='plane'
          className='question-card-img-wrapper_image' 
          src={answerObj.img}
        />
      </div>
      <div className='question-card-options'>
        {answerObj.options.map((item) => {
          const option = Object.keys(item)[0]
          return (
            <div
              style={{
                backgroundColor: answerObj.answer === option 
                ? item[answerObj.answer] ? '#6db2eb'  : '#cf4e4e' 
                : '' }}
              key={option}
              className='question-card-options_option'
            >
              {option}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AnswersCard;