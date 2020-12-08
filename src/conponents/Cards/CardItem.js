import React from "react";
import {Button, Card} from "react-bootstrap";
import logo from "../TopNavbar/logo.svg";

function CardItem(props) {
  return (
    <div className="col-md-4">
      <Card>
        <Card.Img variant="top" src={logo}/>
        <Card.Body>
          <Card.Title>{props.card.title}</Card.Title>
          <Card.Text>
            {props.card.description}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default CardItem;