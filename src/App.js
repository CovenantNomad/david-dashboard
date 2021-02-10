import React, { Suspense } from 'react';
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import LadingPage from './views/LadingPage';

function App() {
  const hist = createBrowserHistory();

  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <Router history={hist}>
        <Switch>
          <Route path="/" component={LadingPage} />
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
