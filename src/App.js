import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginCotainter from './components/LoginPage/LoginContainer';
import UserStatusComponent from './components/UserStatus/UserStatusComponent';
import { Provider } from 'react-redux'
import store from './redux/store';
import ChatBoxComponent from './components/ChatBox/ChatBoxComponent';

const App = () => (
    <Provider store={store}>
        <UserStatusComponent />
        <LoginCotainter />
        <ChatBoxComponent />
    </Provider>
);

ReactDOM.render(<App/>, document.getElementById('root'));
