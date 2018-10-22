import React, {Component} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Search from '../Search';
import ShowPage from '../ShowPage';
import './AppRouter.css'

class AppRouter extends Component {
  render () {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Search}/>
          <Route path='/shows' component={ShowPage}/>
        </Switch>
      </div>
    )
  }
}

export default AppRouter;