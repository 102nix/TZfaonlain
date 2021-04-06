import React from 'react'
import { Card } from 'react-bootstrap'
import { imgsArr } from '../../imgs/ImgsComp'
import { ValueStateType } from '../../types/stateType'
import './Home.scss'

export const Home: React.FC<ValueStateType> = props => {

  return (
    <div className="col-12 col-lg-4">
      <Card style={{ width: '18rem' }}>
        <div className="img-and-label">
          <Card.Img variant="top" src={imgsArr[props.id! - 1]} />
          {
           (+props.id! === 3 || +props.id! === 6 || +props.id! === 9 || +props.id! === 12)?   
            <div className="btn-danger label-buttom">Restaurant & Support available</div> :
            <div className="btn-info label-buttom">Independing living</div> 
          }
        </div>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.address}</Card.Text>
          <Card.Text className="price">New Properties for Sale From <strong>&#8364;214,999</strong></Card.Text> 
          <Card.Text>Shared Ownership Available</Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}