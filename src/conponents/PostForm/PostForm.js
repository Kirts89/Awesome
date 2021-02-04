import React from "react";
import {Button, Form} from "react-bootstrap";
import {
  addPostActionCreator, updateCurrentPostContentActionCreator,
  updateCurrentPostDescriptionActionCreator,
  updateCurrentPostTitleActionCreator
} from "../../store";


const PostForm = (props) => {
  let newPostElement = React.createRef();

  const onChangeTitle = (event) => {
    let title = event.target.value;
    console.log(title)
    let action = updateCurrentPostTitleActionCreator(title)
    props.store.dispatch(action)
  }

  const onChangeDescription = (event) => {
    let description = event.target.value;
    let action = updateCurrentPostDescriptionActionCreator(description)
    props.store.dispatch(action)
  }
  const  onChangeContent = (event) => {
    let content = event.target.value;
    let action = updateCurrentPostContentActionCreator(content)
    props.store.dispatch(action)
  }
  const onSubmit = (event) => {   //
    event.preventDefault()
    let action = addPostActionCreator() // {type: 'ADD-POST'}
    props.store.dispatch(action)
  }

  return (
    <div>
      {JSON.stringify(props.store.state.currentPost)}
      <Form>
        <Form.Group controlId="formGroupEmail">
          <Form.Label>Заголовок</Form.Label>
          <Form.Control type="text"
                        value={props.store.state.currentPost.title}
                        onChange={onChangeTitle}
                        placeholder='Заголовок'
          />
        </Form.Group>
        <Form.Group controlId="formGroupPassword">
          <Form.Control as="textarea"
                        ref={newPostElement}
                        rows={2}
                        placeholder='Описание'
                        value={props.store.state.currentPost.description}
                        onChange={onChangeDescription}
          />
        </Form.Group>
        <Form.Group controlId="formGroupContent">
          <Form.Control as="textarea"
                        value={props.store.state.currentPost.content}
                        rows={4}
                        placeholder='Контент'
                        onChange={onChangeContent}
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