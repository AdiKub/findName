import React from 'react';

import QuestionCard from '../QuestionCard';
import './styles.scss';
import questions from '../../questions.json';

const FirstComponent = () => {

  return (
    <div className='first-component'>
      <QuestionCard question={questions.questions.question2}/>
    </div>
  )
}
export default FirstComponent;