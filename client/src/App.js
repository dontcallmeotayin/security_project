import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import TestPage from './page/TestPage';
import TestPage2 from './page/TestPage2';


function App() {
  return (
      <Router>
          <Switch>
              <Route path="/" exact component={TestPage} />
               <Route path="/page2" exact component={TestPage2} />
          </Switch>
      </Router>
  )
}

export default App
