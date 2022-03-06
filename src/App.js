import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import SearchPage from './pages/search/SearchPage';

// const Home = React.lazy(() => import('./pages/home/Home'));
// const Search = React.lazy(() => import('./pages/search/Search'));

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/search" >
            <SearchPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
