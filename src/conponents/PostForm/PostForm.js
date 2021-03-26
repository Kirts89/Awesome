import React from "react";
import {Button, Form} from "react-bootstrap";


const PostForm = (props) => {
  // PROPS {posts: {items: [], current: {}}}
  const onChangeTitle = (event) => {
    let title = event.target.value;
    props.onChangeTitle(title)
  }

  const onChangeDescription = (event) => {
    let description = event.target.value;
    props.onChangeDescription(description)
  }

  const  onChangeContent = (event) => {
    let content = event.target.value;
    props.onChangeContent(content)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    props.onSubmit()
  }

  return (
    <div>
      {JSON.stringify(props.post)}
      <Form>
        <Form.Group controlId="formGroupEmail">
          <Form.Label>Заголовок</Form.Label>
          <Form.Control type="text"
                        value={props.post.title}
                        onChange={onChangeTitle}
                        placeholder='Заголовок'
          />
        </Form.Group>
        <Form.Group controlId="formGroupPassword">
          <Form.Control as="textarea"
                        rows={2}
                        placeholder='Описание'
                        value={props.post.description}
                        onChange={onChangeDescription}
          />
        </Form.Group>
        <Form.Group controlId="formGroupContent">
          <Form.Control as="textarea"
                        value={props.post.content}
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