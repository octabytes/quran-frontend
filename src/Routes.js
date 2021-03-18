import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Home from "pages/Home";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/:surahNumber?"
          render={(routeProps) => <Home {...routeProps} />}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
