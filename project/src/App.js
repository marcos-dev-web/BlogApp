import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Load from './components/Load';

const Home = lazy(() => import('./pages/Home'));


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <Suspense fallback={<Load />}>
            <Home />
          </Suspense>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
