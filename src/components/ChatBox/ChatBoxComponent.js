import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux"
import { Form, Button } from 'react-bootstrap';
import socketIOClient from "socket.io-client";
import * as SockJS from 'sockjs-client';
import { Stomp } from '@stomp/stompjs';

const ChatBoxComponent = () => {
  const messages = useSelector(state => state.messages);
  const [chatContent, setChatContent] = useState('');
  let stompClient;
  connect();
  const [content, setContent] = useState(messages);
  // useEffect(() => {
  //   //console.log(messages);
  // });

  function onSendMessage() {
    //const  { sendMessage } = props;
    console.log(content);
    stompClient.send("/app/sendMessage", {}, JSON.stringify(`${content}`));
    // const socket = socketIOClient('http://localhost:3000/app/chat.sendMessage');
    // socket.emit('chat', JSON.stringify(`User typed: ${content}`));
    //sendMessage(message);
  }

  function connect() {
    let socket = new SockJS('http://localhost:3000/gs-guide-websocket');
    stompClient = Stomp.over(socket);
    stompClient.connect("guest", "guest", function (frame) {
        //setConnected(true);
        //console.log('Connected: ' + frame);
        stompClient.subscribe('/topic/greetings', function (message) {
            if(message) {
              let addedMessage = chatContent + "<br/>" + message.body
              setChatContent(addedMessage)
              console.log(message.body)
              
            }
        });
    });
}

  return(
    <Form>
      <Form.Group controlId="chatBoxTxtArea">
        <Form.Control as="textarea" value={content} rows="10" onChange={(e)=> setContent(e.target.value)} />
        <div>
        <Button variant="primary" type="button" onClick={(e)=> onSendMessage()}>
          Send
        </Button>
        </div>
        <div>{chatContent}</div>
      </Form.Group>
    </Form>
  );
};

export default ChatBoxComponent;
