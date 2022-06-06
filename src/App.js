import { useState } from 'react';
import Stack from 'react-bootstrap/Stack';
import DisplayMessages from './DisplayMessages';
import AddMessage from './AddMessage';

function App() {
  const [messages, setMessages] = useState([]);

  function handleNewMessage(message) {
    setMessages(messages.concat(message))
  }

  function deleteMessages() {
    setMessages(messages.filter((message) => message == ''))
  }

  return (
    <Stack gap={3} className="col-md-10 mx-auto">
      <AddMessage onNewMessage={handleNewMessage} />
      <DisplayMessages messages={messages} deleteMessages={deleteMessages} />
    </Stack>
  )
}

export default App;

