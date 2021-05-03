import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Load from './components/Load';

const Home = lazy(() => import('./pages/Home'));
const AllPosts = lazy(() => import('./pages/AllPosts'));


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Suspense fallback={<Load />}>
            <Home />
          </Suspense>
        </Route>
        <Route path="/all-posts" exact>
          <Suspense fallback={<Load />}>
            <AllPosts />
          </Suspense>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
