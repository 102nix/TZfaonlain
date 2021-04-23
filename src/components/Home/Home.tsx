import React from 'react'
import { imgsArr } from '../../imgs/ImgsComp'
import { ValueStateType } from '../../types/stateType'
import './Home.scss'

export const Home: React.FC<ValueStateType> = props => {

  return (
    <div className="card">
        <div className="card__img">
          <img src={imgsArr[props.id! - 1]} />
          {
            (+props.id! === 3 || +props.id! === 6 || +props.id! === 9 || +props.id! === 12) ?   
              <div className="label-home orange-bg">Restaurant & Support available</div> :
              <div className="label-home blue-bg">Independing living</div> 
          } 
        </div>
        <div className="card__body">
          <div className="card__title">{props.title}</div>
          <div className="card__text address">{props.address}</div>
          <div className="card__text price">New Properties for Sale From <span>&#8364;214,999</span></div> 
          <div className="card__text">Shared Ownership Available</div>
        </div>
    </div>
  )
}