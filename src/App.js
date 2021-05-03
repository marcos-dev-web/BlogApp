import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';

import AllPosts from './pages/AllPosts';
import PostsByTopic from './pages/PostsByTopic';

function App() {
  return (
		<BrowserRouter>
			<Header />
			<Switch>
				<Route exact path="/all-posts">
					<AllPosts />
				</Route>
				<Route exact path="/posts-by-topic">
					<PostsByTopic />
				</Route>
			</Switch>
		</BrowserRouter>
  );
}

export default App;
