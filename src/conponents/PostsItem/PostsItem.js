import React from "react";
import {Button, Col, Image, Row} from "react-bootstrap";

function PostsItem(props) {
  return (
    <Row>
      <Col md="4">
        <Image src={props.post.imageUrl} thumbnail />
      </Col>
      <Col>
        <h3>
          {props.post.title}
        </h3>
        <p>
          {props.post.description}
        </p>
        <div className="text-right">
          <Button variant="outline-primary">Читать далее</Button>
        </div>
      </Col>
    </Row>
  )
}

export default PostsItem
