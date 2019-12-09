import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux"
import { Form } from 'react-bootstrap';

const ChatBoxComponent = () => {
  const messages = useSelector(state => state.messages);
  const [content, setContent] = useState(messages);
  useEffect(() => {
    console.log(messages);
  });

  return(
    <Form>
      <Form.Group controlId="chatBoxTxtArea">
        <Form.Control as="textarea" value={messages} rows="10" />
      </Form.Group>
    </Form>
  );
};

export default ChatBoxComponent;
