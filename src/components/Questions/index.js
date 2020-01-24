import React from 'react'
import { useSelector } from 'react-redux'

import QuestionCard from '../QuestionCard'
import AnswersCard from '../AnswersCard'
import './styles.scss'
import questions from '../../questions.json'

const Questions = () => {
  const questionList = questions.questions;
  const ansArr = useSelector(state => state.ansArr);
  const courentQuest = questionList[Object.keys(questionList)[ansArr.length]];

  return (
    <div className='questions'>
      <div className='questions-answers-wrapper'>
       {Object.keys(ansArr).map((ans)=>(
         <AnswersCard
          key={ans}
          answerObj={ansArr[ans]} 
         /> 
       ))}
       {courentQuest && <QuestionCard question={courentQuest} /> }
         
      </div>
    </div>
  )
}

export default Questions;