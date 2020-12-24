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
                        ref={newPostElement}
                        rows={5}
                        value={props.store.state.currentPost.description}
                        onChange={
                          (event) => {
                            props.store.updateCurrentPostDescription(event)
                          }
                        }
          />
        </Form.Group>
        <Button variant="primary"
                type="submit"
                onClick={(event) => { props.store.addPost(event) }}>
          Сохранить
        </Button>
      </Form>
    </div>
  )
}

export default PostForm