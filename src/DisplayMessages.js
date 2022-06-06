import { ListGroup } from "react-bootstrap"
import Button from 'react-bootstrap/Button'

function DisplayMessages(props) {

  function messages() {
    if (props.messages === null) return
      return props.messages.map((message) => <ListGroup.Item>{`${message.name}: ${message.message}`}</ListGroup.Item>)
    }

  return (
   <>
    <ListGroup>
      {messages()}
    </ListGroup>
    <Button onClick={props.deleteMessages}>Delete All</Button>
   </>
  )
}

export default DisplayMessages;

