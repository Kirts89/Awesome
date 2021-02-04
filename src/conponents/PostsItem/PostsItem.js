import React from "react";
import {Button, Col, Image, Row} from "react-bootstrap";

function PostsItem(props) {
  return (
    <Row className="posts-item">
      <Col md="4">
        <Image src={props.post.imageUrl} thumbnail />
      </Col>
      <Col>
        <h3>
          {props.post.title}
        </h3>
        <h6>
          {props.post.description}
        </h6>
        <p>
          {props.post.content}
        </p>
        <div className="text-right">
          <Button variant="outline-primary">Читать далее</Button>
        </div>
      </Col>
    </Row>
  )
}

export default PostsItem
