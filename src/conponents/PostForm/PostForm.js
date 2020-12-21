import React from "react";
import {Button, Form} from "react-bootstrap";

const PostForm = (props) => {
  let newPostElement = React.createRef();
  let addPost = (event) => {
    event.preventDefault();
    let text = newPostElement.current.value;
     props.addPost(text)
  }
  return (
    <div>
      <Form>
        <Form.Group controlId="formGroupEmail">
          <Form.Label>Заголовок</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group controlId="formGroupPassword">
          <Form.Label>Описание</Form.Label>
          <Form.Control as="textarea" ref={newPostElement} rows={5} />
        </Form.Group>
        <Button variant="primary" onClick={addPost} type="submit">
          Сохранить
        </Button>
      </Form>
    </div>
  )
}

export default PostForm