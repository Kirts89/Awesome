import React from "react";
import {Col, Image, Row} from "react-bootstrap";

function Post(props) {
  return (
    <Row className="post">
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
      </Col>
    </Row>
  )
}

export default Post
