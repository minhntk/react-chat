import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginCotainter from './components/LoginPage/LoginContainer';
import HomePageContainer from './components/HomePage/HomePageContainer';
import HeaderComponent from './components/Commons/HeaderComponent';
import { Provider } from 'react-redux'
import store from './redux/store';
import DashboardContainer from './components/Dashboard/DashboardContainer';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import PrivateRoute from './routes/PrivateRoute';
import { Container, Col } from 'react-bootstrap';

const App = () => (
  <BrowserRouter>
    <HeaderComponent />
    <Switch>
      <Route path='/' exact component={HomePageContainer} />
      <Route path='/login' exact component={LoginCotainter} />
      <PrivateRoute path='/dashboard'>
        <DashboardContainer />
      </PrivateRoute>
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(
  <Provider store={store}>
    <Container>
      <Col></Col>
      <Col xs={6}>
        <App />
      </Col>
      <Col></Col>
    </Container>
  </Provider>,
  document.getElementById("root")
);
