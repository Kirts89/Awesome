import React from "react";
import  {Button, ButtonGroup} from "react-bootstrap";

const CardsNav = () => {
  return (
    <div>
      <h2>Продукция</h2>
      <div className="text-center">
        <ButtonGroup className="mb-2">
          <Button>Вся Продукция</Button>
          <Button>Декоративный кирпич</Button>
          <Button>Декоративная скала</Button>
        </ButtonGroup>
      </div>
    </div>
  );
};

export default CardsNav;