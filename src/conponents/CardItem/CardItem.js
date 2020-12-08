import React from "react";
import {Button, Card} from "react-bootstrap";
import s from './CardItem.module.sass'

function CardItem(props) {
  return (
    <div className="col-md-4">
      <Card>
        <Card.Img variant="top" className={s.photo} src={props.card.photoUrl}/>
        <Card.Body>
          <Card.Title>
            {props.card.title}
          </Card.Title>
          <Card.Text>
            <div className="text-muted">{props.card.material}</div>
            {props.card.description}
          </Card.Text>
          <Button variant="primary">Просмотреть</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default CardItem;