import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import Main from './pages/Main'

function App () {
  return (
    <Router>
      <Switch>
        <Route path="*">
          <Main />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
