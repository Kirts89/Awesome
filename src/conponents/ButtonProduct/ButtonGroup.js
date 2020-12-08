import React from "react";
import  {Button, ButtonGroup} from "react-bootstrap";

const ButtonGroup1 = () => {
  return (
    <div className="text-center">
      <ButtonGroup className="mb-2">
        <Button>Вся Продукция</Button>
        <Button>Декоративный кирпич</Button>
        <Button>Декоративная скала</Button>
      </ButtonGroup>
    </div>
  );
};


export default ButtonGroup1;