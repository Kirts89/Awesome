import React from "react";
import {ButtonGroup, Button, Col, Image, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

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
          <ButtonGroup>
            <Link
              className="btn btn-outline-primary"
              role="button"
              to={`/posts/show/${props.post._id}`}
            >
              Читать далее
            </Link>{' '}
            <Link
              className="btn btn-outline-primary"
              role="button"
              to={`/posts/edit/${props.post._id}`}
            >
              Редактировать
            </Link>{' '}
            <Button variant="outline-primary"
            >Удалить</Button>
          </ButtonGroup>
        </div>
      </Col>
    </Row>
  )
}

export default PostsItem
