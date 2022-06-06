import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useState } from 'react';

function AddMessages(props) {
  const [message, setMessage] = useState({
    name: "", message: ""
  })

  function handleChange(event) {
    setMessage({ ...message, [event.target.name]: event.target.value });
  }

    function handleSubmit(event) {
    event.preventDefault()
    props.onNewMessage(message)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" >
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" value={message.name} onChange={handleChange} name="name" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Message</Form.Label>
        <Form.Control type="text" value={message.message} onChange={handleChange} name="message" />
      </Form.Group>
      <Button type="submit">Send</Button>
    </Form>
  )
}

export default AddMessages;

