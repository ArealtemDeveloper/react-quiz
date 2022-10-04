import React from 'react'
import { questions } from '../App'

export const Game =({step, question, onClickVariant}) => {

    const percent = Math.round((step / questions.length) * 100)

    return (
      <>
        <div className="progress">
          <div style={{ width: `${percent}%` }} className="progress__inner"></div>
        </div>
        <h1>{question.title}</h1>
        <ul>
          {question.variants.map((item,index) => <li onClick={() => onClickVariant(index)} key={item}>{item}</li>)}
        </ul>
      </>
    );
  }
