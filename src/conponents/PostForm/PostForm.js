import React from "react";
import {Button, Form} from "react-bootstrap";

const PostForm = (props) => {
  let newPostElement = React.createRef();

  return (
    <div>
      <Form>
        <Form.Group controlId="formGroupEmail">
          <Form.Label>Заголовок</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group controlId="formGroupPassword">
          <Form.Label>Описание</Form.Label>
          <Form.Control as="textarea"
                        onChange={props.states.updateCurrentPostDescription}
                        ref={newPostElement}
                        rows={5}
                        value={props.states.currentPost.description}
          />
        </Form.Group>
        <Button variant="primary" onClick={props.states.addPost} type="submit">
          Сохранить
        </Button>
      </Form>
    </div>
  )
}

export default PostForm