import React from "react";
import {Button, Form} from "react-bootstrap";
import {addPostActionCreator, updateCurrentPostDescriptionActionCreator} from "../../store";


const PostForm = (props) => {
  let newPostElement = React.createRef();

  const onChangeDescription = (event) => {
    let description = event.target.value;
    let action = updateCurrentPostDescriptionActionCreator(description)
    props.store.dispatch(action)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    let action = addPostActionCreator() // {type: 'ADD-POST'}
    props.store.dispatch(action)
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
          <Form.Control as="textarea"
                        ref={newPostElement}
                        rows={5}
                        value={props.store.state.currentPost.description}
                        onChange={onChangeDescription}
          />
        </Form.Group>
        <Button variant="primary"
                type="submit"
                onClick={onSubmit}>
          Сохранить
        </Button>
      </Form>
    </div>
  )
}

export default PostForm;