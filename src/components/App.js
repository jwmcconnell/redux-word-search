import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import TopWords from '../containers/words/TopWords';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={TopWords} />
      </Switch>
    </Router>
  );
}
  
