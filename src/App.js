import React, { Suspense } from 'react';
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import LadingPage from './views/LadingPage';
import RegisterUser from './views/RegisterUser/RegisterUser'
import SignInPage from './views/SignInPage'

function App() {
  const hist = createBrowserHistory();

  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <Router history={hist}>
        <Switch>
          <Route path="/signin" component={SignInPage} exact />
          <Route path="/admin" component={LadingPage} />
          <Route path="/" component={RegisterUser} />
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
