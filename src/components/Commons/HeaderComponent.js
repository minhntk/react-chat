import React, { useState, useEffect } from 'react';
import { Breadcrumb } from 'react-bootstrap';
import {
  NavLink
} from 'react-router-dom';

const HeaderComponent = (props) => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item>
        <NavLink to="/">Home</NavLink >
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <NavLink to="/dashboard">Dashboard</NavLink >
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <NavLink to="/my-blog">My Blog</NavLink >
      </Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default HeaderComponent;