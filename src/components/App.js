import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import TopWords from '../containers/words/TopWords';
import Words from '../pages/Words';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/words/:count" component={Words} />
        <Route path="/" component={TopWords} />
      </Switch>
    </Router>
  );
}
  
