import React, { useState, useEffect } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { setAuthenticatedToken } from '../../services/AuthService';
import { connect, useDispatch } from 'react-redux';
import { sendMessage, loginUser } from '../../redux/actions/userActions';
import {
  useHistory,
  useLocation
} from "react-router-dom";


const LoginContainter = (props) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [content, setContent] = useState();
  const [announce, setAnnounce] = useState();
  let history = useHistory();
  let dispatch = useDispatch();
  useEffect(() => {
    // Update the document title using the browser API
    // const socket = socketIOClient('http://localhost:3000');
    // socket.on('chat', data => {
    //   let latestContent = `${content} <br/> ${data}`;
    //   setContent(latestContent);
    // });
    // socket.on('announce', data => {
    //   let latestAnnounce = `${data}`;
    //   setAnnounce(latestAnnounce);
    // });
  });

  async function onLoginClick() {
    let fetchResponse = await fetch('http://localhost:3000/api/v1/user/login', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password
      })
    });
    const data = await fetchResponse.json()
    console.log(data);
    const { userId } = data;
    dispatch(loginUser(userId));
    if (userId) {
      setAuthenticatedToken(userId)
      history.push('/dashboard');
    } 
  }

  return (
    <Container>
      <Form>
        <Form.Group controlId="formUsername">
          <Form.Label>Username: </Form.Label>
          <Form.Control type="username" placeholder="Enter username" onChange={(e)=> setUsername(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Content</Form.Label>
          <Form.Control onChange={(e)=> setMessage(e.target.value)} />
        </Form.Group>
      </Form>
      <p>You typed {username}/{password}</p>
      <div>
        <Button variant="primary" type="submit" onClick={(e)=> onLoginClick()}>
          Submit
        </Button>
      </div>
    </Container>
  );
}
const mapStateToProps = state => {
  return {
    messages: state.messages
  };
}

const mapDispatchToProps = dispatch => ({
  sendMessage: text => dispatch(sendMessage(text))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainter);
