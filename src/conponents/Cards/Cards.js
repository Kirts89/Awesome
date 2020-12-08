import React from "react";
import CardItem from "./CardItem";
import CardsApi from '../../api/CardsApi'

function Cards () {

  let cardItems = CardsApi.query().map(
    (card) => <CardItem card={card} key={card.id}></CardItem>
  )

  return (
    <div className="row">
      {cardItems}
    </div>
  )
}

export default Cards;