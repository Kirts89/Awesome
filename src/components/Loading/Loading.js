import React from "react";
import {Spinner} from "react-bootstrap";

let Loading = () => {
  return <h4 className="text-center text-primary">
    <Spinner animation="border" variant="primary" />
    &nbsp;
    Loading...
  </h4>
}

export default Loading