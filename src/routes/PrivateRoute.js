import React, { useState } from "react";
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { isAuthenticated } from '../services/AuthService';

const PrivateRoute = ({ children, ...rest }) => {
  console.log(children);
  return (
    <Route
      {...rest}
      render={({ location }) =>
      isAuthenticated() ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

// const PrivateRoute = ({ children, ...rest }) => {

//   const [isAuthenticated, setAuth] = useState(false);

//   return (
//     <Route
//       {...rest}
//       render={({ location }) =>
//         isAuthenticated ? (
//           children
//         ) : (
//             <Redirect
//               to={{
//                 pathname: "/login",
//                 state: { from: location }
//               }}
//             />
//           )
//       }
//     />
//   );
// }

export default PrivateRoute;
