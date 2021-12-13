import React, { Component, Fragment } from 'react'
import routes from './routes';
import { Switch, Route } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          {
            routes.map((route, index) => {
              return <Route key={index} exact path={route.path} render={(props) => {
                document.title = route.meta.title;
                return (<route.component {...props} routes={route.routes} />)
              }} />
            })
          }
        </Switch>
      </Fragment>
    )
  }
}
