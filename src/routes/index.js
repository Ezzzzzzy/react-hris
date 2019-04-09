import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import routes from "./routes";
import PrivateRoute from "./Private";
import PublicRoute from "./Public";

const Routes = () => {
  return (
    <Router>
      <Switch>
        {routes.map((route, i) => {
          if (route.authL) {
            return <PrivateRoute key={i} {...route} />;
          }
          return <PublicRoute key={i} {...route} />;
        })}
      </Switch>
    </Router>
  );
};

export default Routes;
